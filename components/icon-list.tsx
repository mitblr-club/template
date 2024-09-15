import { siteConfig } from '@/config/site';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';

export default function IconList() {
  return (
    <nav className="flex items-center space-x-1">
      <Link
        href={siteConfig.mediaLinks.instagram}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={cn(
            buttonVariants({
              size: 'icon',
              variant: 'ghost',
            }),
            'hover:stroke-primary-foreground'
          )}
        >
          <Icons.instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </div>
      </Link>

      <Link
        href={siteConfig.mediaLinks.twitter}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={cn(
            buttonVariants({
              size: 'icon',
              variant: 'ghost',
            }),
            'hover:stroke-primary-foreground'
          )}
        >
          <Icons.twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </div>
      </Link>

      <Link
        href={siteConfig.mediaLinks.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={cn(
            buttonVariants({
              size: 'icon',
              variant: 'ghost',
            }),
            'hover:stroke-primary-foreground'
          )}
        >
          <Icons.linkedin className="h-5 w-5 fill-current" />
          <span className="sr-only">LinkedIn</span>
        </div>
      </Link>

      <Link
        href={siteConfig.mediaLinks.github}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={cn(
            buttonVariants({
              size: 'icon',
              variant: 'ghost',
            }),
            'hover:stroke-primary-foreground'
          )}
        >
          <Icons.github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
    </nav>
  );
}
