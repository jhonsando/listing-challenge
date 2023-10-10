import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { bookingOptionsReducer } from "reducers/bookingOptions/bookingOptions.reducer";

export const store = configureStore({
  reducer: {
    bookingOptions: bookingOptionsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
