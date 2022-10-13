import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import icoAdd from "../assets/ico-user-add.svg";
import Dropdown from "../components/Dropdown";
import Input from "./Input";
import "../style/Form.css";
import INPUT_DATA from "../data/INPUT_DATA.json";
import DROPDOWN_DATA from "../data/DROPDOWN_DATA.json";

//

//

export default function Form() {
  // FORM SETTINGS

  const initialState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    street: "",
    city: "",
    zipCode: "",
    stateAbbrev: "",
    startDate: "",
    department: "",
  };

  const [newEmployee, setNewEmployee] = useState(initialState);

  const submit =
    !newEmployee.firstName ||
    !newEmployee.lastName ||
    !newEmployee.dateOfBirth ||
    !newEmployee.street ||
    !newEmployee.city ||
    !newEmployee.zipCode ||
    !newEmployee.startDate ||
    !newEmployee.stateAbbrev ||
    !newEmployee.department ? (
      <button type="submit" className="add-employee-button" disabled>
        Save
      </button>
    ) : (
      <button type="submit" className="add-employee-button">
        Save
      </button>
    );

  //ON CHANGE
  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.id]: e.target.value.trim() });
  };

  // GET DATA
  //   let employeesList =
  //     JSON.parse(window.localStorage.getItem("employeesList")) || EMPLOYEES_LIST; + MOCKES
  let employeesList = [];
  let employeesListLS = localStorage.getItem("employeesList");
  if (employeesListLS) {
    employeesList = JSON.parse(employeesListLS);
  }

  // ON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // UPDATE DATA
    employeesList.push(newEmployee);

    // COMPLETE / CORRECT DATA
    newEmployee.id = employeesList.length;
    newEmployee.startDate = newEmployee.startDate.replace(/-/g, "/");
    newEmployee.dateOfBirth = newEmployee.dateOfBirth.replace(/-/g, "/");

    // STORE DATA
    window.localStorage.setItem("employeesList", JSON.stringify(employeesList));

    // RESET FORM
    setNewEmployee({ ...newEmployee }, e.target.reset());
    setNewEmployee(initialState);
  };

  return (
    <form action="" id="add-employee-form" onSubmit={handleSubmit}>
      <img className="add-employee-ico" src={icoAdd} alt="add employee icon" />
      <section className="form-data">
        <fieldset id="addressContainer">
          <legend className="addressGroup">Address</legend>
        </fieldset>
        {INPUT_DATA.map((data, index) => (
          <Input
            key={index}
            className={data.className}
            htmlFor={data.id}
            label={data.label}
            type={data.type}
            id={data.id}
            value={newEmployee[index]}
            handleChange={handleChange}
            autoComplete="off"
          />
        ))}

        {DROPDOWN_DATA.map((data, index) => (
          <Dropdown
            key={index}
            className={data.className}
            htmlFor={data.id}
            label={data.label}
            type={data.type}
            id={data.id}
            select={data.select}
            handleChange={handleChange}
          />
        ))}
      </section>

      {submit}
    </form>
  );
}
