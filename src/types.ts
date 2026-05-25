export interface Author {
  id: number;
  name: string;
  role: string;
  tagline: string;
  quote: string;
  description: string;
  blogUrl?: string;
  instagramUrl?: string;
}

export interface BookExcerpt {
  id: number;
  chapter: string;
  sentence: string;
  context: string;
}

export interface PromoTemplate {
  id: string;
  platform: 'instagram' | 'threads' | 'blog' | 'community';
  title: string;
  description: string;
  content: string;
  hashtags: string[];
}

export interface GuestBookEntry {
  id: string;
  authorName: string;
  content: string;
  timestamp: string;
  emoji: string;
}

export interface BagItem {
  id: string;
  name: string;
  weightValue: number; // 0-100 gauge of mental weight
  icon: string;
  description: string;
}
