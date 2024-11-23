import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from '@entities/user';
import { eventsReducer } from '@entities/event';

export const rootReducer = combineReducers({
  user: userReducer,
  events: eventsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
