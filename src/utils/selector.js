export const selectEmployee = (state) =>
  JSON.parse(localStorage.getItem("employeeList"));
