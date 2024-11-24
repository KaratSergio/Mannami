import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '@redux';

const actionWrapper = <Returned, ThunkArg>(
  name: string,
  handler: (
    args: ThunkArg,
    thunkAPI: {
      dispatch: AppDispatch;
      getState: () => RootState;
      rejectWithValue: (value: string) => void;
    }
  ) => Promise<Returned>
) => {
  return createAsyncThunk<Returned, ThunkArg, { state: RootState; dispatch: AppDispatch }>(
    name,
    async (args, thunkAPI) => {
      try {
        return await handler(args, thunkAPI);
      } catch (error) {
        return thunkAPI.rejectWithValue(error instanceof Error ? error.message : 'An error occurred');
      }
    }
  );
};

export default actionWrapper;
