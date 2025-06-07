import type { LucideIcon } from 'lucide-react';

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  details: { icon: LucideIcon; text: string }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ChallengeDay {
  id: string;
  day: number;
  title: string;
  mission: string;
}
