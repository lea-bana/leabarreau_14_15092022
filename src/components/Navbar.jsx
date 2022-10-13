import logoDesign from "../assets/Design.svg";
import logoBrand from "../assets/brand.svg";
import icoList from "../assets/list.svg";
import icoAdd from "../assets/ico-user-add.svg";
import "../style/Navbar.css";
import { NavLink } from "react-router-dom";
import React from "react";

/**
 * Navbar
 * @returns {Reactnode}  jsx injected in DOM
 */

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-item nav-brand">
          <img
            className="nav-logo--design"
            src={logoDesign}
            alt="Health Wealth logo design"
          />
          <img
            className="nav-logo--brand"
            src={logoBrand}
            alt="Health Wealth logo brand name"
          />
        </div>
        <div className="nav-item nav-menu">
          <h1 className="nav-menu--title">HRnet Employees</h1>
          <NavLink to="/employees" className="nav-menu--choice">
            <img
              className="nav-ico"
              src={icoList}
              alt="Health Wealth logo current list"
            />
            <span>Current</span>
          </NavLink>
          <NavLink to="/" className="nav-menu--choice">
            <img
              className="nav-ico"
              src={icoAdd}
              alt="Health Wealth logo add user"
            />
            <span>Create</span>
          </NavLink>
        </div>
      </nav>
      <hr className="nav-shadow" />
    </>
  );
}
