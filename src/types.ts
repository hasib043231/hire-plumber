export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface PlumberProfile {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  specialty: string;
  experience: string;
  baseRate: string;
  imageUrl: string;
}

export type AppState = 'landing' | 'chatting' | 'matching' | 'booked';
