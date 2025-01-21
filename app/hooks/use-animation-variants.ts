import type { AnimationProps } from '../types';
import type { TargetAndTransition } from 'framer-motion';

export function useAnimationVariants(delay = 0): AnimationProps {
  return {
    initial: { opacity: 0, y: 20 } as TargetAndTransition,
    animate: { opacity: 1, y: 0 } as TargetAndTransition,
    transition: { duration: 0.5, delay },
    viewport: { once: true }
  };
}

export const fadeInUp: AnimationProps = {
  initial: { opacity: 0, y: 20 } as TargetAndTransition,
  animate: { opacity: 1, y: 0 } as TargetAndTransition,
  transition: { duration: 0.5 }
};

export const staggerChildren: AnimationProps = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  } as TargetAndTransition
};

export const scaleOnHover: AnimationProps = {
  whileHover: { scale: 1.05 } as TargetAndTransition,
  transition: { duration: 0.2 }
}; 