import Link from 'next/link';

import { MainNav } from '@/components/main-nav';

import IconList from './icon-list';
import SiteSheet from './site-sheet';
import ThemeToggle from './theme-toggle';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden lg:block">
            <IconList />
          </div>
          <ThemeToggle />
          <SiteSheet />
        </div>
      </div>
    </header>
  );
}
