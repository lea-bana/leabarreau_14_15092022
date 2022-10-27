import employeeReducer from "./employees";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});
