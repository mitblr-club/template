import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types/nav';
import Link from 'next/link';
import * as React from 'react';

interface MainNavProps {
  items?: NavItem[];
}

const items: NavItem[] = [
  {
    title: 'Home',
    href: '/home',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Services',
    href: '/services',
  },
  // Add more items as needed
];

export function MainNav() {
  return (
    <div className='flex gap-6 md:gap-10'>
      <Link href='/' className='inline-flex items-center'>
        <Icons.clubLogo />
      </Link>
      {items?.length ? (
        <nav className='flex gap-6'>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'hidden items-center justify-center text-sm font-medium text-muted-foreground lg:flex',
                    item.disabled && 'cursor-not-allowed opacity-80',
                  )}
                >
                  {item.title}
                </Link>
              ),
          )}
        </nav>
      ) : null}
    </div>
  );
}
