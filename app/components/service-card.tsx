'use client';

import { motion } from 'framer-motion';
import { Card, CardBody } from '@nextui-org/card';
import type { ServiceProps } from '../types';

interface ServiceCardProps extends ServiceProps {
  index: number;
}

export function ServiceCard({ icon, title, description, index }: ServiceCardProps): JSX.Element {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="group"
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="relative bg-gradient-to-br from-white/10 to-white/5 group-hover:from-brand-500/20 group-hover:to-secondary-500/20 transition-all duration-500 border border-white/10 group-hover:border-brand-500/30 backdrop-blur-xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.03] group-hover:opacity-[0.05]"></div>
        <CardBody className="flex flex-row items-start gap-6 p-8 relative">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500/10 to-secondary-500/10 group-hover:from-brand-500/20 group-hover:to-secondary-500/20 transition-all duration-500 backdrop-blur-xl border border-white/10 group-hover:border-brand-500/30">
            <div className="text-brand-500 group-hover:text-brand-400 transition-colors duration-300">
              {icon}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-brand-500 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-black text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
} 