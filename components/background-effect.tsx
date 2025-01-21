"use client";

import { useEffect } from 'react';

export default function BackgroundEffect() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 20;
      const y = (clientY - window.innerHeight / 2) / 20;
      
      requestAnimationFrame(() => {
        document.body.style.setProperty(
          '--mouse-x',
          `${x}deg`
        );
        document.body.style.setProperty(
          '--mouse-y',
          `${-y}deg`
        );
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
} 