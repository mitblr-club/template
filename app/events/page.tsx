import { CurrentEvents } from './eventType/currentEvents';
import { PastEvents } from './eventType/pastEvents';

const Events = () => {
  return (
    <div className="mt-c20 px-0 pb-c3 md:mt-c10 xl:mt-c5 xl:px-c8">
      <div className="text-center text-4xl font-bold">Current Events</div>
      <CurrentEvents />

      <div className="mt-c20 text-center text-4xl font-bold md:mt-c10 xl:mt-c5">
        Past Events
      </div>
      <PastEvents />
    </div>
  );
};

export default Events;
