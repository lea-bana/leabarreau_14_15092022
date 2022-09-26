import logoDesign from "../assets/Design.svg";
import logoBrand from "../assets/brand.svg";
import icoList from "../assets/list.svg";
import icoAdd from "../assets/userAdd.svg";
import "../style/App.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-item nav-brand">
          <img
            className="nav-logo-design"
            src={logoDesign}
            alt="Health Wealth logo design"
          />
          <img
            className="nav-logo-brand"
            src={logoBrand}
            alt="Health Wealth logo brand name"
          />
        </div>
        <div className="nav-item nav-menu">
          <h1>HRnet Employees</h1>
          <div className="nav-menu-choice">
            <img
              className="nav-ico"
              src={icoList}
              alt="Health Wealth logo brand name"
            />
            <span>Current</span>
          </div>
          <div className="nav-menu-choice">
            <img
              className="nav-ico"
              src={icoAdd}
              alt="Health Wealth logo brand name"
            />
            <span>Create</span>
          </div>
        </div>
      </nav>
      <hr className="nav-shadow" />
    </>
  );
}
