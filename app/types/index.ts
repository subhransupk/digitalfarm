import { TargetAndTransition, VariantLabels } from 'framer-motion';
import type { ReactNode } from 'react';

export interface BasePageProps {
  children?: ReactNode;
}

export interface ServiceProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface HelpTopic {
  id: number;
  title: string;
  icon: ReactNode;
  articles: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  label: string;
  value: string;
}

export type TimeSlot = string;

export interface AnimationProps {
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: TargetAndTransition | VariantLabels;
  transition?: Record<string, unknown>;
  whileHover?: TargetAndTransition;
  viewport?: Record<string, unknown>;
} 