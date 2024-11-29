import { selectAllEvents } from '@entities/event';
import { useAppSelector } from '@redux';
import { Event } from '@entities/event';

const EventListWidget = () => {
  const events = useAppSelector(selectAllEvents);

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {events.map((event) => (
        <div key={event.id}>
          <Event event={event} />
        </div>
      ))}
    </div>
  );
};

export default EventListWidget;
