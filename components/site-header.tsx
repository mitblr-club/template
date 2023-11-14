import { MainNav } from '@/components/main-nav';
import Link from 'next/link';

import IconList from './icon-list';
import SiteSheet from './site-sheet';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-40 w-full border-b'>
      <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
        <MainNav />
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <div className='hidden lg:block'>
            <IconList />
          </div>
          <ThemeToggle />
          <SiteSheet />
        </div>
      </div>
    </header>
  );
}
