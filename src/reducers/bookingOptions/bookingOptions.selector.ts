import { RootState } from "app/store";

export const selectFilterOptions = (state: RootState) =>
  state.bookingOptions.filterOptions;
