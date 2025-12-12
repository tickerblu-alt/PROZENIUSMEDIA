export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  expertise: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link?: string;
}

export interface VideoCase {
  id: string;
  title: string;
  stats: string[];
  thumbnail: string;
  clientName: string;
  clientRole: string;
  clientImage: string;
}

export enum Sector {
  AUTOMOBILE = 'Automobile',
  FITNESS = 'Fitness',
  EDUCATION = 'Education',
  REAL_ESTATE = 'Real Estate',
  HOSPITALITY = 'Hospitality',
  FASHION = 'Fashion',
  TECHNOLOGY = 'Technology',
  HEALTHCARE = 'Healthcare',
  FMCG = 'FMCG',
  TRAVEL = 'Travel',
  GENERAL = 'General'
}