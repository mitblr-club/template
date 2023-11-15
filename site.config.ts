import { NavItem } from '@/types/nav-item';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Club Name',
  description: 'This is a club website template.',
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
  },
};
