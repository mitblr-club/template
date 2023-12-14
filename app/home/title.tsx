import { siteConfig } from '@/site.config';

import Link from 'next/link';

export default function Title() {
  return (
    <div className="mt-c25 flex h-c60 flex-col items-center justify-between overflow-x-hidden md:mt-c15 md:h-c30 lg:h-c30 xl:mt-c5 xl:h-c45">
      <div className="px-3 text-center text-5xl font-bold duration-1000 animate-in fade-in-0 md:text-6xl xl:text-7xl">
        {siteConfig.homePage.tagline}
      </div>

      <div className="px-c10 text-center sm:text-xs md:text-base lg:text-xl">
        {siteConfig.description}
      </div>

      <div className="flex justify-between gap-c3 md:gap-c10">
        <div>
          <Link href="/events">
            <button className="text-decoration-none transition-box-shadow user-select-none -webkit-user-select-none touch-action-manipulation will-change-box-shadow active:shadow-inner-lg hover:secondary focus:secondary active:secondary relative box-border inline-flex h-12 cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-md border-none bg-primary px-4 text-left text-base font-bold text-white shadow-md transition-transform will-change-transform hover:-translate-y-2 hover:shadow-lg hover:ring-2 hover:ring-opacity-50 focus:outline-none focus:ring-2 focus:ring-opacity-50 active:translate-y-2 active:ring-2 active:ring-opacity-50">
              Current Events
            </button>
          </Link>
        </div>

        <div>
          <Link href="/about">
            <button className="text-decoration-none transition-box-shadow user-select-none -webkit-user-select-none touch-action-manipulation will-change-box-shadow active:shadow-inner-lg hover:secondary focus:secondary active:secondary relative box-border inline-flex h-12 cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-md border-none bg-gray-900 px-4 text-left text-base font-bold text-gray-100 shadow-md transition-transform will-change-transform hover:-translate-y-2 hover:shadow-lg hover:ring-2 hover:ring-opacity-50 focus:outline-none focus:ring-2 focus:ring-opacity-50 active:translate-y-2 active:ring-2 active:ring-opacity-50 dark:bg-gray-100 dark:text-gray-700">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
