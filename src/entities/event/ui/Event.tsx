import { EventProps } from '../model';

const Event = ({ event }: EventProps) => {
  return (
    <div className="p-4 border rounded shadow-md text-sm">
      <h3 className="text-lg font-bold">{event.title}</h3>
      <p>{event.location}</p>
      <p>
        {event.date} at {event.time}
      </p>
      <p>participants: 0 / {event.maxParticipants} </p>
      <p>{event.targetAudience.join(', ')}</p>
    </div>
  );
};

export default Event;
