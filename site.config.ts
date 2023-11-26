import { NavItem } from '@/types/nav-item';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Club Name',
  institution: 'Manipal Institute of Technology Bengaluru (MIT)',
  description: "Empower your MIT Bengaluru club experience with our centralized platform, seamlessly managing and collaborating on events, blogs, and administration.",
  navLinks: <NavItem[]>[
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Events',
      href: '/events',
    },
  ],
  mediaLinks: {
    instagram: 'https://www.instagram.com/codex.mitb/',
    linkedin: 'https://in.linkedin.com/company/codexclub',
    github: 'https://github.com/CodeX-MIT-BLR',
    twitter: 'https://twitter.com/CodeX_MITB',
    institute: 'https://manipal.edu/mitblr.html'
  },
  contactDetails: {
    number: '+91 1234567890',
    email: 'abc.efg@gmail.com'
  },
  homePage: {
    tagline: 'One Ecosystem for all Clubs.',
  }
};
