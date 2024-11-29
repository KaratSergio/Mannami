import { RootState } from '@redux';
import { EventResponse } from './eventsTypes';

export const selectAllEvents = (state: RootState): EventResponse[] => state.events.events;
