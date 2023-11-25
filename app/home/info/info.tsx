import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import data from './data';

export default function Info() {
  return (
    <div className="mt-c20 p-c6 md:mt-c10 lg:mt-c5 xl:mt-c1">
      <div className="p-c3 text-center text-2xl font-bold md:text-4xl">
        What&apos;s in mitblr.club?<br></br>
        <span className="p-c1 text-lg font-normal">Check out our projects</span>
      </div>

      <div
        className="flex flex-col items-center justify-center gap-c3vh 
                lg:grid lg:grid-cols-2 lg:gap-c3vh"
      >
        {data.map((item, index) => (
          <Card
            className="relative h-fit w-c70 overflow-hidden rounded-lg 
                shadow-md duration-300 ease-in-out hover:scale-105 hover:shadow-lg md:w-fit"
            key={index}
          >
            <CardHeader>
              <CardTitle className="text-left text-2xl font-bold">
                {item.Title}
              </CardTitle>
              <CardDescription className="text-md text-justify font-medium">
                {item.Description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
