import employeeReducer from "./employees";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    employee: employeeReducer,
  },
});
