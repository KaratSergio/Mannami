export interface EventResponse {
  id: string | number;
  title: string;
  date: string;
  time: string;
  location: string;
  maxParticipants: number;
  targetAudience: string[];
}

export interface EventsState {
  events: EventResponse[];
}

export interface EventProps {
  event: EventResponse;
}

export type EventId = EventResponse['id'];
export type DetailedEvent = EventResponse & { description: string };
