import { siteConfig } from '@/site.config';

import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="top-0 z-50 flex w-full flex-col items-center justify-between border-t bg-background/95 p-3 lg:flex-row lg:gap-4 lg:p-5">
      <div className="py-3 text-2xl font-bold lg:px-4 lg:py-0">
        mitblr
        <span className="text-purple-700 dark:text-purple-400">{'.'}club</span>
      </div>

      <div className="flex items-center pb-3 lg:px-4 lg:pb-0">
        <h2>
          <Link
            href={siteConfig.mediaLinks.institute}
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            {siteConfig.institution}
          </Link>
        </h2>
      </div>
    </footer>
  );
}
