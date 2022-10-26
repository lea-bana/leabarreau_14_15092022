import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as employeeActions from "../utils/employees";
import icoAdd from "../assets/ico-user-add.svg";
import { DropdownD, DropdownS } from "../components/Dropdown";
// import Input from "./Input";
import "../style/Form.css";
// import INPUT_DATA from "../data/INPUT_DATA.json";
import { states } from "../data/DROPDOWN_DATA";
import { Modal, useModal } from "leabmodal";
import confirm from "../assets/ico-user-confirm.svg";
import close from "../assets/cancel.png";

//

//

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("AL");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("Sales");
  const [employeeCreated, setEmployeeCreated] = useState(false);
  const [employeeNotCreated, setEmployeeNotCreated] = useState(false);
  const dispatch = useDispatch();

  const employee = {
    firstName: firstName,
    lastName: lastName,
    dateOfBirth: dateOfBirth,
    startDate: startDate,
    street: street,
    city: city,
    state: state,
    zipCode: zipCode,
    department: department,
  };

  const departments = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ];

  const buttonFunctions = (e) => {
    // e.preventDefault();
    if (
      firstName !== "" &&
      lastName !== "" &&
      dateOfBirth !== "" &&
      startDate !== "" &&
      street !== "" &&
      city !== "" &&
      zipCode !== ""
    ) {
      dispatch(employeeActions.addEmployee(employee));
      setEmployeeCreated(true);
      toggle(e);
    } else {
      setEmployeeNotCreated(true);
    }
  };

  // FORM SETTINGS

  const submit =
    !firstName ||
    !lastName ||
    !dateOfBirth ||
    !street ||
    !city ||
    !zipCode ||
    !startDate ||
    !department ? (
      <button
        type="submit"
        className="submit"
        onClick={() => buttonFunctions()}
        disabled
      >
        Save
      </button>
    ) : (
      <button
        type="submit"
        className="submit"
        onClick={() => buttonFunctions()}
      >
        Save
      </button>
    );

  // // MODAL MODULE SETTINGS

  const { isOpen, toggle, escToClose } = useModal();

  useEffect(() => {
    window.addEventListener("keydown", escToClose);
    return () => window.removeEventListener("keydown", escToClose);
  });

  const redirectTo = useNavigate();
  function goTo() {
    redirectTo("/employees");
  }

  return (
    <form action="" id="add-employee-form">
      <img className="add-employee-ico" src={icoAdd} alt="add employee icon" />
      <section className="form-data">
        <fieldset id="addressContainer">
          <legend className="addressGroup">Address</legend>
          <div className="input-wrapper street address">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="input-wrapper city address">
            <label htmlFor="City">City</label>
            <input
              type="text"
              id="city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="input-wrapper zipCode address">
            <label htmlFor="Zip Code">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <DropdownS
            className={"stateAbbrev address"}
            label={"State"}
            labelFor={"state"}
            htmlFor={"id"}
            type={"text"}
            options={states}
            onChangeFunction={setState}
          />
        </fieldset>

        <div className="input-wrapper firstName">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-wrapper lastName">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-wrapper dateOfBirth">
          <label htmlFor="dateOfBirth">Date Of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div className="input-wrapper startDate">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <DropdownD
          className={"department"}
          options={departments}
          onChangeFunction={setDepartment}
          label={"Department"}
          labelFor={"department"}
          htmlFor={"id"}
        />
      </section>

      {submit}

      {employeeCreated ? (
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
      ) : null}
      {employeeNotCreated ? (
        <Modal
          modal={isOpen}
          close={toggle}
          x={close}
          title="NOT ALLOWED"
          btn1="Add an employee"
          btn2="Employees list"
          redirect={goTo}
          autofocus
        />
      ) : null}
    </form>
  );
}
