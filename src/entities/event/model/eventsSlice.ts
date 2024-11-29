import { createSlice } from '@reduxjs/toolkit';
import { events } from '../api/eventsDB';
import { EventsState } from './eventsTypes';

const initialState: EventsState = {
  events: events,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
});

export default eventsSlice.reducer;
