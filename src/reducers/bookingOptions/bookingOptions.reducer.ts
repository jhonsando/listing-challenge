import { createReducer } from "@reduxjs/toolkit";
import { FilterOptions } from "models/interfaces/bookingOptions.interface";
import { setFilters } from "reducers/bookingOptions/bookingOptions.actions";

interface BookingOptionsState {
  filterOptions: FilterOptions | null;
}

const initialState: BookingOptionsState = {
  filterOptions: null,
};

export const bookingOptionsReducer = createReducer(initialState, (builder) => {
  builder.addCase(setFilters, (state, action) => ({
    ...state,
    filterOptions: action.payload,
  }));
});
