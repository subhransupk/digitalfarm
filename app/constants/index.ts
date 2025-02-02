export const CONTACT_EMAIL = 'contact@digitalfarm.com';
export const SUPPORT_EMAIL = 'support@digitalfarm.com';

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/digitalfarm',
  linkedin: 'https://linkedin.com/company/digitalfarm',
  github: 'https://github.com/digitalfarm'
} as const;

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
] as const;

export const SERVICE_CATEGORIES = [
  'UI/UX Design',
  'Web Development',
  'Mobile Apps',
  'SaaS Development',
  'Digital Marketing'
] as const;

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.5,
  slow: 0.8
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const; 