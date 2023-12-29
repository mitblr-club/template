import { siteConfig } from '@/site.config';

import { CurrentEvents } from './eventType/currentEvents';
import PastEvents from './eventType/pastEvents';

export async function getEvents() {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${siteConfig.eventsTableId}`,
    { next: { revalidate: 60 } }
  );
  const events = await res.json();
  return events;
}

export default async function Events() {
  const events = await getEvents();

  return (
    <div className="mt-c20 px-0 pb-c3 md:mt-c10 xl:mt-c5 xl:px-c8">
      <div className="text-center text-4xl font-bold">Current Events</div>
      <CurrentEvents events={events} />

      <div className="mt-c20 text-center text-4xl font-bold md:mt-c10 xl:mt-c5">
        Past Events
      </div>
      <PastEvents events={events} />
    </div>
  );
}
