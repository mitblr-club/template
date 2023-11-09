import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

const IconList = () => {
  return (
    <nav className="flex items-center space-x-1">
      <Link href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            size: 'icon',
            variant: 'ghost',
          })}
        >
          <Icons.instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </div>
      </Link>

      <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            size: 'icon',
            variant: 'ghost',
          })}
        >
          <Icons.twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </div>
      </Link>

      <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            size: 'icon',
            variant: 'ghost',
          })}
        >
          <Icons.linkedin className="h-5 w-5 fill-current" />
          <span className="sr-only">LinkedIn</span>
        </div>
      </Link>

      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            size: 'icon',
            variant: 'ghost',
          })}
        >
          <Icons.gitHub className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
    </nav>
  );
};

export default IconList;
