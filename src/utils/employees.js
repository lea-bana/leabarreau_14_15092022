import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

const { actions, reducer } = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (draft, action) => {
      draft.employees.push(action.payload);
      localStorage.setItem("employeeList", JSON.stringify(draft.employees));
      return;
    },
  },
});

export const { addEmployee } = actions;

export default reducer;
