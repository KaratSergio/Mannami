import { EventListWidget } from '@widgets';
import { FilterEvents } from '@features/event/filterEvents';

const EventListPage = () => {
  return (
    <div className="container">
      <FilterEvents />
      <EventListWidget />
    </div>
  );
};

export default EventListPage;
