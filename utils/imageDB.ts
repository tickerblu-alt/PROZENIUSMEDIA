
const DB_NAME = 'ProZeniusMediaDB';
const STORE_NAME = 'images';
const DB_VERSION = 2; // Bumped version to ensure fresh schema if needed

export const initDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => {
        console.error("IndexedDB Error:", request.error);
        reject(request.error);
    };
  });
};

export const saveImageToDB = async (key: string, base64: string) => {
  try {
      const db = await initDB();
      return new Promise<void>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const request = store.put(base64, key);
        
        request.onsuccess = () => {
            // db.close(); // Optional: keeps connection clean
            resolve();
        };
        request.onerror = () => reject(request.error);
      });
  } catch (error) {
      console.error("Failed to save to DB:", error);
  }
};

export const getImageFromDB = async (key: string): Promise<string | null> => {
  try {
      const db = await initDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const request = store.get(key);
        
        request.onsuccess = () => {
            resolve(request.result || null);
        };
        request.onerror = () => reject(request.error);
      });
  } catch (error) {
      console.error("Failed to get from DB:", error);
      return null;
  }
};

export const clearImageFromDB = async (key: string) => {
    try {
        const db = await initDB();
        return new Promise<void>((resolve, reject) => {
          const tx = db.transaction(STORE_NAME, 'readwrite');
          const store = tx.objectStore(STORE_NAME);
          const request = store.delete(key);
          request.onsuccess = () => resolve();
          request.onerror = () => reject(request.error);
        });
    } catch (error) {
        console.error("Failed to clear DB:", error);
    }
};

export const getAllImagesFromDB = async (): Promise<Record<string, string>> => {
    try {
        const db = await initDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const request = store.getAllKeys();
            
            request.onsuccess = async () => {
                const keys = request.result as string[];
                const result: Record<string, string> = {};
                
                // Get all values
                // Note: Ideally use a cursor for large datasets, but this is fine for ~20 images
                let processed = 0;
                if(keys.length === 0) resolve({});

                keys.forEach(key => {
                    const valReq = store.get(key);
                    valReq.onsuccess = () => {
                        result[key] = valReq.result;
                        processed++;
                        if(processed === keys.length) resolve(result);
                    };
                });
            };
            request.onerror = () => reject(request.error);
        });
    } catch (error) {
        return {};
    }
};
