import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import icoClose from "../assets/ico-cross-circle.svg";
import icoConfirm from "../assets/ico-user-confirm.svg";

import "../style/Modal.css";

export default function Modal({ show, close, title, sub, msg }) {
  const employeesList = useNavigate();

  function goTo() {
    employeesList(`/employees`);
  }

  return createPortal(
    <>
      {show ? (
        <main className="modal">
          <section className="modal-content">
            <button className="modal-close" onClick={close}>
              <img src={icoClose} alt="close icon" />
            </button>
            <img
              className="confirm-employee-ico"
              src={icoConfirm}
              alt="confirm employee icon"
            />
            <header className="modal-header">
              <h2 className="modal-title"> {title} </h2>
            </header>
            <main className="modal-msg">
              <p>{sub}</p>
              <p>{msg}</p>
            </main>
            <footer className="modal-footer">
              <button className="return" onClick={close}>
                Add employee
              </button>
              <button className="result" onClick={goTo}>
                Employees list
              </button>
            </footer>
          </section>
        </main>
      ) : null}
    </>,
    document.body
  );
}
