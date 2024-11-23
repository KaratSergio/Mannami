import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Event {
  id: string;
  title: string;
  date: string;
}

interface EventsState {
  events: Event[];
}

const initialState: EventsState = {
  events: [],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<Event>) {
      state.events.push(action.payload);
    },
    removeEvent(state, action: PayloadAction<string>) {
      state.events = state.events.filter((event) => event.id !== action.payload);
    },
    resetEvents(state) {
      state.events = [];
    },
  },
});

export const { addEvent, removeEvent, resetEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
