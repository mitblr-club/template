'use client';

import { siteConfig } from '@/site.config';

import * as React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { Icons } from '@/components/icons';

export function MainNav() {
  const navLinks = siteConfig.navLinks;
  const pathname = usePathname();

  return (
    <div className="flex gap-8">
      <Link href="/" className="inline-flex items-center">
        <Icons.clubLogo height={36} width={36} />
      </Link>
      <nav className="hidden items-center space-x-6 text-sm font-medium lg:flex">
        {navLinks?.map(
          (item, index) =>
            item.href && (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === item.href
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
              >
                {item.title}
              </Link>
            )
        )}
      </nav>
    </div>
  );
}
