import React, { useState } from "react";
import icoAdd from "../assets/ico-user-add.svg";
import Modal from "../components/Modal.jsx";
import Dropdown from "../components/Dropdown";
import Input from "./Input";
import "../style/Form.css";
import INPUT_DATA from "../data/INPUT_DATA.json";
import DROPDOWN_DATA from "../data/DROPDOWN_DATA.json";

//

//

export default function Form() {
  const initialState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    startDate: "",
    department: "",
  };

  const [newEmployee, setNewEmployee] = useState(initialState);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const submit =
    !newEmployee.firstName ||
    !newEmployee.lastName ||
    !newEmployee.dateOfBirth ||
    !newEmployee.street ||
    !newEmployee.city ||
    !newEmployee.state ||
    !newEmployee.zipCode ||
    !newEmployee.startDate ||
    !newEmployee.department ? (
      <button type="submit" className="add-employee-button" disabled>
        Add an employee
      </button>
    ) : (
      <button type="submit" className="add-employee-button">
        Add an employee
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
    newEmployee.state = employeesList.abbrev;

    // STORE DATA
    window.localStorage.setItem("employeesList", JSON.stringify(employeesList));

    // RESET FORM
    setNewEmployee(initialState);

    // OPEN MODAL
    setModal(!modal);
  };

  return (
    <form action="" id="add-employee-form" onSubmit={handleSubmit}>
      <img className="add-employee-ico" src={icoAdd} alt="add employee icon" />
      <section className="form-data">
        {INPUT_DATA.map((data, index) => (
          <Input
            className={data.id}
            key={index}
            htmlFor={data.id}
            label={data.name}
            type={data.type}
            id={data.id}
            value={newEmployee[index]}
            handleChange={handleChange}
            autoComplete="off"
          />
        ))}

        {DROPDOWN_DATA.map((data, index) => (
          <Dropdown
            className={data.id}
            key={index}
            htmlFor={data.id}
            label={data.name}
            type={data.type}
            id={data.id}
            select={data.select}
            handleChange={handleChange}
          />
        ))}
      </section>

      {submit}

      <Modal
        show={modal}
        close={toggle}
        title={"Confirmation"}
        sub={"New collaborator"}
        msg={"successfully registred"}
      />
    </form>
  );
}
