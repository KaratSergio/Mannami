export interface Audience {
  adults: boolean;
  men: boolean;
  women: boolean;
}

export interface EventFormData {
  eventDate: Date | null;
  location: string;
  maxParticipants: number;
  audience: Audience;
}
