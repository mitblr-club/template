import { NavItem } from '@/types/nav-item';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Club Name',
  institution: 'Manipal Institute of Technology Bengaluru (MIT)',
  description: 'Site metdata description!',
  eventsTableId: 'f348a5f5bb934f87bbe2f16c10521cb5',
  blogTableId: 'b161b7c3fb8c415cac57781069d8b4fb',
  navLinks: [
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
  ] satisfies NavItem[],
  mediaLinks: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://in.linkedin.com/',
    github: 'https://github.com/',
    twitter: 'https://twitter.com/',
    institute: 'https://manipal.edu/mitblr.html',
  },
  contactDetails: {
    number: '+91 1234567890',
    email: 'abc.efg@gmail.com',
  },
};
