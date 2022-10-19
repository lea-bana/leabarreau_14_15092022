import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import icoAdd from "../assets/ico-user-add.svg";
import Dropdown from "../components/Dropdown";
import Input from "./Input";
import "../style/Form.css";
import INPUT_DATA from "../data/INPUT_DATA.json";
import DROPDOWN_DATA from "../data/DROPDOWN_DATA.json";
import { Modal, useModal } from "leabmodal";
import confirm from "../assets/ico-user-confirm.svg";
import close from "../assets/cancel.png";

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
      <button type="submit" className="submit" disabled>
        Save
      </button>
    ) : (
      <button type="submit" className="submit">
        Save
      </button>
    );

  // MODAL MODULE SETTINGS

  const { isOpen, toggle, escToClose } = useModal();

  //ON CHANGE
  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.id]: e.target.value.trim() });
  };

  // GET DATA
  // avec les données mockées
  //   let employeesList =
  //     JSON.parse(window.localStorage.getItem("employeesList")) || EMPLOYEES_LIST;
  let employeesList = [];
  let employeesListLS = localStorage.getItem("employeesList");
  if (employeesListLS) {
    employeesList = JSON.parse(employeesListLS);
  }

  // detects when escape key pressed to close the modal
  // and stop event propagation when occured

  useEffect(() => {
    window.addEventListener("keydown", escToClose);
    return () => window.removeEventListener("keydown", escToClose);
  });

  const redirectTo = useNavigate();
  function goTo() {
    redirectTo("/employees");
  }

  // ON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // UPDATE DATA
    employeesList.push(newEmployee);

    // COMPLETE / CORRECT DATA
    newEmployee.id = employeesList.length;
    newEmployee.dateOfBirth = newEmployee.dateOfBirth.replace(/-/g, "/");
    newEmployee.startDate = newEmployee.startDate.replace(/-/g, "/");

    // STORE DATA
    window.localStorage.setItem("employeesList", JSON.stringify(employeesList));

    // OPEN MODAL
    toggle();

    // RESET FORM
    setNewEmployee({ ...newEmployee }, e.target.reset());
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

      <Modal
        modal={isOpen}
        close={toggle}
        x={close}
        icon={confirm}
        title="Confirmation"
        msgL1="New collaborator"
        msgL2="successfully registred"
        btn1="Add an employee"
        btn2="Employees list"
        redirect={goTo}
        autofocus
      />
    </form>
  );
}
