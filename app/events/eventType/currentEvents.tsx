'use client';

import Autoplay from 'embla-carousel-autoplay';

import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import data from './data';

export function CurrentEvents() {
  const currentEvents = data.filter((event) => event.status === 'Active');

  if (currentEvents.length === 0) {
    return (
      <div className="mt-c15 md:mt-c5 xl:mt-c3">
        <div className="text-center text-xl">
          No Events Available. Please Check Again Later
        </div>
      </div>
    );
  }

  const targetLength: number = 100;

  return (
    <div className="mt-c15 md:mt-c5 xl:mt-c3">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
          dragFree: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="h-fit bg-opacity-70 shadow-md duration-300 ease-in-out hover:scale-110 hover:bg-opacity-100 hover:shadow-lg"
      >
        <CarouselContent>
          {currentEvents.map((event, index) => {
            let hiddenText: string = '';

            if (event.description.length > targetLength) {
              event.description =
                event.description.substring(0, targetLength - 3) + '...';
            } else {
              hiddenText = '* '.repeat(
                (targetLength - event.description.length) / 2
              );
            }

            return (
              <CarouselItem key={index}>
                <Link href="/">
                  <Card className="h-fit">
                    <CardHeader className="text-left">
                      <div className="flex flex-row justify-between">
                        <div className="text-sm font-light dark:font-extralight">
                          {event.date}
                        </div>
                        <div className="text-right">
                          {index + 1}/{currentEvents.length}
                        </div>
                      </div>
                      <CardTitle>{event.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-3">
                        <div className="text-md text-center font-medium dark:font-light md:text-lg">
                          {event.description}{' '}
                          <span className="invisible">{hiddenText}</span>
                        </div>
                        <div className="flex flex-col gap-2 text-right">
                          <div className="text-sm font-light dark:font-extralight">
                            Time: {event.time}
                          </div>
                          <div className="text-sm font-light dark:font-extralight">
                            Venue: {event.venue}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="max-xl:hidden" />
        <CarouselNext className="max-xl:hidden" />
      </Carousel>
    </div>
  );
}
