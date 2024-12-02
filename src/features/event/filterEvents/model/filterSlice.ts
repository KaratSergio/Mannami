import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from './filterTypes';

const initialState: FilterState = {
  searchText: '',
  location: '',
  date: '',
  targetAudience: '',
};

const filterSlice = createSlice({
  name: 'filter events',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setTargetAudience: (state, action: PayloadAction<string>) => {
      state.targetAudience = action.payload;
    },
  },
});

export const { setSearchText, setLocation, setDate, setTargetAudience } = filterSlice.actions;
export default filterSlice.reducer;
