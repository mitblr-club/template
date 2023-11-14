'use client';

import Link from 'next/link';

import IconList from './icon-list';
import { Icons } from './icons';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet';

const SiteSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className='btn btn-primary'>
          <Icons.hamburger className='h-5 w-5 fill-current xs:block lg:hidden' />
        </button>
      </SheetTrigger>

      <SheetContent>
        <div className='mt-36 flex flex-col items-center gap-28'>
          <div>
            <SheetClose asChild>
              <Link href='/'>
                <svg
                  version='1.0'
                  width='75'
                  height='75'
                  viewBox='0 0 900 900'
                  preserveAspectRatio='xMinYMin'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>CodeX Logo</title>
                  <g
                    transform='matrix(0.1, 0, 0, -0.1, -911.100037, 1707.999878)'
                    className='fill-black dark:fill-white'
                    stroke='none'
                  >
                    <path
                      d='M16020 16077 c0 -6 -701 -2091 -704 -2094 -2 -2 -83 193 -181 434 -97 241 -229 565 -293 721 l-115 284 -320 160 -320 160 -441 -17 c-243 -9 -443 -18 -445 -20 -2 -3 328 -821 733 -1820 405 -998 736 -1819 736 -1825 0 -9 -500 -1507 -785 -2352 l-64 -188 278 0 278 0 299 889 c164 490 301 888 304 886 3 -2 163 -391 355 -865 l349 -862 318 -159 317 -159 433 11 c238 6 441 14 450 17 15 6 -27 115 -308 807 -178 440 -538 1327 -800 1970 l-475 1170 476 1418 c261 780 475 1423 475 1428 0 5 -112 9 -275 9 -151 0 -275 -1 -275 -3z m-1473 -1612 c270 -665 505 -1239 521 -1275 27 -61 187 -455 375 -925 46 -115 303 -749 571 -1408 268 -660 486 -1200 484 -1202 -9 -9 -773 -24 -781 -16 -9 9 -179 425 -875 2136 -796 1959 -1572 3878 -1569 3881 6 7 465 21 627 20 l155 -1 492 -1210z' />
                    <path
                      d='M10326 15053 l-375 -398 0 -1910 0 -1910 376 -397 376 -398 907 0 907 0 376 398 376 397 0 453 1 452 -290 0 -290 0 0 -306 0 -306 -232 -234 -232 -234 -620 1 -621 0 -182 189 -183 189 0 1708 0 1708 188 188 187 187 621 0 621 0 227 -234 226 -234 0 -306 0 -306 290 0 290 0 0 453 0 452 -376 398 -375 397 -909 0 -908 0 -376 -397z' />
                  </g>
                </svg>
              </Link>
            </SheetClose>
          </div>

          <div className='flex flex-col items-center gap-7'>
            <SheetClose asChild>
              <Link href='/about'>
                <button className='text-4xl font-bold text-gray-900 dark:text-slate-200'>
                  About
                </button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href='/events'>
                <button className='text-4xl font-bold text-gray-900 dark:text-slate-200'>
                  Events
                </button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href='/blog'>
                <button className='text-4xl font-bold text-gray-900 dark:text-slate-200'>
                  Blog
                </button>
              </Link>
            </SheetClose>
          </div>

          <div className='mt-24'>
            <IconList />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SiteSheet;
