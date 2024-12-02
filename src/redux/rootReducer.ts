import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from '@entities/user';
import { eventsReducer } from '@entities/event';
import { filterReducer } from '@features/event/filterEvents';

export const rootReducer = combineReducers({
  user: userReducer,
  events: eventsReducer,
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
