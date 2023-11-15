'use client';

import { siteConfig } from '@/site.config';

import * as React from 'react';

import Link from 'next/link';

import { Icons } from '@/components/icons';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function MainNav() {
  const navLinks = siteConfig.navLinks;

  return (
    <div className="flex gap-6">
      <Link href="/" className="inline-flex items-center">
        <Icons.clubLogo height={36} width={36} />
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          {navLinks?.map(
            (item, index) =>
              item.href && (
                <NavigationMenuItem>
                  <Link key={index} href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
