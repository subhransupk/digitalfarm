'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  textColor?: 'light' | 'dark';
}

export function SectionHeader({
  label,
  title,
  description,
  className = '',
  textColor = 'dark'
}: SectionHeaderProps): JSX.Element {
  const textColorClasses = {
    light: 'text-white',
    dark: 'text-neutral-900'
  };

  return (
    <div className={`text-center mb-16 ${className}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block bg-brand-500/10 backdrop-blur-sm border border-brand-500/20 rounded-full px-6 py-3 mb-6"
        >
          <span className="text-brand-600 font-medium">{label}</span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-4xl font-bold mb-4 ${textColorClasses[textColor]}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-xl max-w-3xl mx-auto ${
            textColor === 'light' ? 'text-neutral-400' : 'text-neutral-600'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
} 