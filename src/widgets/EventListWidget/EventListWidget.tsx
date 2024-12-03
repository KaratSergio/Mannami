import { useAppSelector } from '@redux';
import { filteredEvents } from '@features/event/filterEvents';
import { Event } from '@entities/event';

const EventListWidget: React.FC = () => {
  const events = useAppSelector(filteredEvents);

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
