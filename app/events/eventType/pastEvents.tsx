import Link from 'next/link';

import { formatDate } from '@/lib/formatDate';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { getEvents } from '../page';

export default function PastEvents({ events }: any) {
  const pastEvents = events
    .filter((event: any) => (event.joinable ? null : event))
    .reverse();

  if (pastEvents.length === 0) {
    return (
      <div className="mt-c10 md:mt-c5 xl:mt-c3">
        <div className="text-center text-xl">
          No Events Available. Please Check Again Later
        </div>
      </div>
    );
  }

  return (
    <div className="mt-c10 md:mt-c5 xl:mt-c3">
      <div className="flex flex-col gap-3 md:grid md:grid-cols-2 xl:grid-cols-3">
        {pastEvents.map((event: any, index: number) => {
          return (
            <div key={index} className="mt-c5">
              <Link href="/events/[slug]" as={`/events/${event.slug}`} passHref>
                <Card className="flex h-fit w-c80 flex-col bg-card bg-opacity-70 shadow-md duration-300 ease-in-out hover:scale-105 hover:bg-opacity-100 hover:shadow-lg md:w-c40 xl:w-c25">
                  <CardHeader>
                    <div className="text-md font-light dark:font-extralight">
                      {formatDate(event.date)}
                    </div>
                    <CardTitle className="flex flex-col justify-center">
                      <div className="flex text-2xl font-bold">
                        {event.title}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-fit overflow-clip text-sm font-medium dark:font-light">
                      This event is over
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="px-1 pb-0 pt-2">
                      {event.tags?.map((tag: any) => (
                        <span
                          key={tag}
                          className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
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
