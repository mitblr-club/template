import { siteConfig } from '@/site.config';

import Image from 'next/image';

import mitblr_club from '../public/mitblr_club.png';

const SiteFooter = () => {
  return (
    <div className="top-0 z-50 mx-6 flex  flex-col  items-center justify-around gap-2 border-t  bg-background/95 p-1 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:mx-20 lg:flex-row lg:gap-4 lg:p-3">
      <div className="text-2xl font-bold">
        mitblr.<span className="text-violet-500">club</span>
      </div>

      <div className="flex items-center">
        <h2>
          <a
            href={siteConfig.mediaLinks.insitute}
            className="text-sm font-normal hover:text-blue-600 hover:underline"
          >
            {siteConfig.institution}
          </a>
        </h2>
      </div>
    </div>
  );
};

export default SiteFooter;
