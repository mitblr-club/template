import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import data from './data';

export default function BlogCard() {
  if (data.length === 0) {
    return (
      <div className="mt-c15 md:mt-c5 xl:mt-c3">
        <div className="text-center text-xl">
          No Events Available. Please Check Again Later
        </div>
      </div>
    );
  }

  const descLength: number = 100;
  const titleLength: number = 50;

  return (
    <div className="mt-c15 md:mt-c5 xl:mt-c3">
      <div className="flex flex-col gap-3 md:grid md:grid-cols-2 xl:grid-cols-3">
        {data.map((item: any, index: number) => {
          let hiddenDescText: string = '';

          if (item.description.length > descLength) {
            item.description =
              item.description.substring(0, descLength - 3) + '...';
          } else {
            hiddenDescText = '* '.repeat(
              (descLength - item.description.length) / 2
            );
          }

          let hiddenTitleText: string = '';

          if (item.title.length > titleLength) {
            item.title = item.title.substring(0, titleLength - 3) + '...';
          } else {
            hiddenTitleText = '* '.repeat(
              (titleLength - item.title.length) / 2
            );
          }

          return (
            <div key={index} className="mt-c5">
              <Link href="/">
                <Card className="flex h-fit w-c80 flex-col bg-card bg-opacity-70 shadow-md duration-300 ease-in-out hover:scale-105 hover:bg-opacity-100 hover:shadow-lg  md:w-c40 xl:w-c25">
                  <CardHeader>
                    <div className="text-md font-light dark:font-extralight">
                      {item.date}
                    </div>
                    <CardTitle className="flex flex-col justify-center">
                      <div className="flex text-2xl font-bold">
                        {item.title}
                        <span className="invisible">{hiddenTitleText}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-fit overflow-clip text-sm font-medium dark:font-light">
                      {item.description}{' '}
                      <span className="invisible">{hiddenDescText}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <div className="text-md font-medium dark:font-light">
                      {item.author}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
