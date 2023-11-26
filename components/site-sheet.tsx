'use client';

import { siteConfig } from '@/site.config';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import IconList from './icon-list';
import { Icons } from './icons';

export default function SiteSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className={cn(
            buttonVariants({
              size: 'icon',
              variant: 'ghost',
            }),
            'lg:hidden'
          )}
        >
          <Icons.hamburger className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </button>
      </SheetTrigger>

      <SheetContent>
        <div className="flex h-full w-full flex-col items-center justify-evenly gap-16 duration-700 animate-in slide-in-from-right-full">
          <SheetClose asChild>
            <Link href="/">
              <Icons.clubLogo height={96} width={96} />
            </Link>
          </SheetClose>

          <div className="flex flex-col items-center gap-8">
            {siteConfig.navLinks?.map(
              (item, index) =>
                item.href && (
                  <SheetClose asChild key={index}>
                    <Link href={item.href}>
                      <button className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                        {item.title}
                      </button>
                    </Link>
                  </SheetClose>
                )
            )}
          </div>

          <IconList />
        </div>
      </SheetContent>
    </Sheet>
  );
}
