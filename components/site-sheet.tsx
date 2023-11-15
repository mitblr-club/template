'use client';

import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import IconList from './icon-list';
import { Icons } from './icons';

const SiteSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div
          className={buttonVariants({
            size: 'icon',
            variant: 'ghost',
          })}
        >
          <Icons.hamburger className="block h-5 w-5 lg:hidden" />
          <span className="sr-only">Menu</span>
        </div>
      </SheetTrigger>

      <SheetContent>
        <div className="mt-36 flex flex-col items-center gap-28">
          <div>
            <SheetClose asChild>
              <Link href="/">
                <Icons.clubLogo height={96} width={96} />
              </Link>
            </SheetClose>
          </div>

          <div className="flex flex-col items-center gap-7">
            <SheetClose asChild>
              <Link href="/about">
                <button className="text-4xl font-bold text-gray-900 dark:text-slate-200">
                  About
                </button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/events">
                <button className="text-4xl font-bold text-gray-900 dark:text-slate-200">
                  Events
                </button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/blog">
                <button className="text-4xl font-bold text-gray-900 dark:text-slate-200">
                  Blog
                </button>
              </Link>
            </SheetClose>
          </div>

          <div className="mt-24">
            <IconList />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SiteSheet;
