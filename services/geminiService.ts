import { GoogleGenAI, GenerateContentResponse, Modality } from "@google/genai";

// Helper to get fresh AI instance (needed for dynamic API key updates)
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

// --- EXISTING SERVICES ---

export const generateBrandFilmScript = async (
  topic: string,
  sector: string,
  businessName: string
): Promise<string> => {
  try {
    const ai = getAI();
    const prompt = `
      Act as a Professional Brand Strategist and Film Director using the ProZenius Framework.
      Create a 30-second Brand Film Script for an Indian client.
      
      Client Name: ${businessName}
      Sector: ${sector}
      Topic: ${topic}
      
      Requirements:
      1. Brand DNA Hook (0-5s): Identify the core identity immediately.
      2. Dark DNA Marketing Hook (5-20s): Use a psychological trigger (scarcity, authority, social proof) to retain attention.
      3. Call to Action (20-30s): Professional, high-trust directive.
      4. Tone: Premium, Cinematic, Authoritative (Corporate English with optional Hindi punchlines).
      
      Format with Scene Headings, Visual Cues, and Audio.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate brand script.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating Brand DNA script.";
  }
};

export const generateDPMAudit = async (
  inputs: { name: string; sector: string; challenge: string }
): Promise<string> => {
  try {
    const ai = getAI();
    const prompt = `
      Perform a 'DARK DNA MARKETING' Audit (DDM) for this business:
      Name: ${inputs.name}
      Sector: ${inputs.sector}
      Challenge: ${inputs.challenge}
      
      Provide a 3-step ProZenius Strategy:
      1. The Dark DNA Gap (What is missing in their current identity)
      2. The Dark DNA Trigger (Which psychological hook to use: Scarcity, Authority, etc.)
      3. The Scale Path (90-day roadmap to 5x revenue)
      
      Keep it professional, concise, and highly strategic. Use 'Dark DNA' terminology.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Audit generation failed.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Could not perform Dark DNA audit.";
  }
};

export const generateDarkDNAAnalysis = async (url: string): Promise<string> => {
  try {
    const ai = getAI();
    const prompt = `
      Analyze the brand potential for the website/url: ${url}.
      (Infer the industry and brand voice if the URL is generic).

      Perform a "Dark DNA Analysis" Report.
      
      Output strictly in Markdown with the following structure:

      ### 1. Brand Archetype & Shadow
      Identify the surface archetype (e.g., The Ruler, The Caregiver) and its 'Shadow Self' (the hidden psychological hook we can exploit).

      ### 2. Tonal Map
      **Current Tone:** (Describe their likely current vibe)
      **Dark DNA Tone:** (Prescribe the aggressive/authoritative tone needed for dominance)

      ### 3. Competitive Gap Matrix
      Identify 3 psychological voids in this market that competitors are ignoring. (e.g. "Competitors sell features; you must sell Status").

      Tone of voice: Highly strategic, "War Room" consultant style.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Analysis failed.";
  } catch (error) {
    console.error("Dark DNA Analysis Error", error);
    return "Error generating analysis.";
  }
};

// --- NEW MODULES ---

export const generateSpeech = async (text: string): Promise<string | null> => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });
    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || null;
  } catch (e) {
    console.error("TTS Error", e);
    return null;
  }
};

export const generateAdCampaign = async (brand: string, product: string, audience: string, emotion: string): Promise<string> => {
  try {
    const ai = getAI();
    const prompt = `
      Generate a Video Ad Campaign for '${brand}' selling '${product}'.
      Target Audience: ${audience}
      Core Emotion: ${emotion}
      
      Deliverables:
      1. 3x 15-second Shorts Scripts (Viral Hooks, fast paced).
      2. 2x 30-second Ad Scripts (Story-driven, high production value).
      3. A Shot List for the production team.
      
      Ensure compliance with Indian Ad Standards (ASCI) - no misleading claims, safe for family viewing.
      Format clearly with headers.
    `;
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Campaign generation failed.";
  } catch (error) {
    console.error("Ad Campaign Error", error);
    return "Error generating campaign.";
  }
};

export const generateReelStrategy = async (url: string): Promise<string> => {
  try {
    const ai = getAI();
    const prompt = `
      Analyze the website URL context: ${url} (Infer the brand/niche).
      Generate 6 Viral Instagram Reel Concepts for this brand.
      
      For each Reel, provide:
      - Hook (Text overlay on video start)
      - Visual Description (What is happening)
      - Caption (With hashtags)
      - CTA (Call to Action)
      
      Focus on 'Edutainment' and 'Behind the Scenes' styles suitable for Indian audiences.
      Output as a structured list.
    `;
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
    });
    return response.text || "Reel strategy failed.";
  } catch (error) {
    console.error("Reel Strategy Error", error);
    return "Error generating reels.";
  }
};

export const generateSocialPost = async (topic: string, platform: string, tone: string): Promise<string> => {
  try {
    const ai = getAI();
    const prompt = `
      Act as a social media expert. Create a high-engagement post for ${platform}.
      Topic: ${topic}
      Tone: ${tone}

      Structure:
      1. Hook (Grab attention immediately)
      2. Value Body (The core message)
      3. Call to Action (CTA)
      4. 5 Relevant Hashtags
      5. AI Image Prompt (A detailed description of an image to go with this post)
    `;
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Failed to generate post.";
  } catch (error) {
    console.error("Social Post Error", error);
    return "Error generating social post.";
  }
};

// --- EXISTING MEDIA SERVICES ---

export const generateVeoVideo = async (prompt: string, aspectRatio: '16:9' | '9:16'): Promise<string | null> => {
  try {
    const ai = getAI();
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: aspectRatio
      }
    });

    // Poll for completion
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      operation = await ai.operations.getVideosOperation({operation: operation});
    }

    const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (videoUri) {
        // Append API Key for access
        return `${videoUri}&key=${process.env.API_KEY}`;
    }
    return null;
  } catch (error) {
    console.error("Veo Video Gen Error:", error);
    throw error;
  }
};

export const chatWithGemini = async (history: {role: string, parts: {text: string}[]}[], message: string): Promise<string> => {
  try {
    const ai = getAI();
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      history: history
    });

    const result = await chat.sendMessage({ message });
    return result.text || "No response generated.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "Error communicating with AI.";
  }
};

export const analyzeImage = async (base64Data: string, mimeType: string, prompt: string): Promise<string> => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: mimeType,
              data: base64Data
            }
          },
          { text: prompt }
        ]
      }
    });
    return response.text || "Could not analyze image.";
  } catch (error) {
    console.error("Image Analysis Error:", error);
    return "Error analyzing image.";
  }
};