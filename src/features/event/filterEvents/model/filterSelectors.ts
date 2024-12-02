import { createSelector } from 'reselect';
import { RootState } from '@redux';
import { EventResponse, selectAllEvents } from '@entities/event';

const selectFilterState = (state: RootState) => state.filter;

export const filteredEvents = createSelector([selectFilterState, selectAllEvents], (filters, events) => {
  return events.filter((event: EventResponse) => {
    const matchesTitle = event.title.toLowerCase().includes(filters.searchText.toLowerCase());
    const matchesLocation = event.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesDate = filters.date ? event.date === filters.date : true;
    const matchesTargetAudience = filters.targetAudience ? event.targetAudience.includes(filters.targetAudience) : true;

    return matchesTitle && matchesLocation && matchesDate && matchesTargetAudience;
  });
});
