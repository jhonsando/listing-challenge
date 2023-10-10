import { createAction } from "@reduxjs/toolkit";
import { FilterOptions } from "models/interfaces/bookingOptions.interface";

export const setFilters = createAction<FilterOptions | null>(
  "bookingOptions/setFilters"
);
