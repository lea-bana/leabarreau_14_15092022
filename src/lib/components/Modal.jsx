import { createPortal } from "react-dom";
import PropTypes from "prop-types";

/**
 * Modal
 *
 * @param   {object}     props
 * @param   {boolean}    props.modal            [display Modal || null]
 * @param   {function}   props.close            [handling Modal close when click]
 * @param   {string}     props.x                [image source]
 * @param   {string}     props.icon             [image source]
 * @param   {boolean}    props.hideIcon         [display item || null]
 * @param   {string}     props.title            [title of message]
 * @param   {boolean}    props.hideTitle        [display item || null]
 * @param   {string}     props.msgL1            [body of message, Line 1]
 * @param   {string}     props.msgL2            [body of message, Line 2]
 * @param   {boolean}    props.hideMsgL2        [display item || null]
 * @param   {string}     props.btn1             [label for btn1]
 * @param   {boolean}    props.disableBtn1      [add || remove 'disabled' attribute on its className]
 * @param   {boolean}    props.hideBtn1         [display item || null]
 * @param   {string}     props.btn2             [label for btn2]
 * @param   {boolean}    props.disableBtn2      [add || remove 'disabled' attribute on its className]
 * @param   {boolean}    props.hideBtn2         [display item || null]
 * @param   {function}   props.redirect         [handling redirect to another page when click]
 * @param   {boolean}    props.hideHeader       [display item || null]
 * @param   {boolean}    props.hideFooter       [display item || null]
 *
 * @returns {Reactnode}  jsx injected in DOM
 */

export default function Modal({
  modal,
  close,
  x,
  icon,
  hideIcon,
  title,
  hideTitle,
  msgL1,
  msgL2,
  hideMsgL2,
  btn1,
  disableBtn1 = "",
  hideBtn1,
  btn2,
  disableBtn2 = "",
  hideBtn2,
  redirect,
  hideHeader,
  hideFooter,
}) {
  if (disableBtn1) disableBtn1 = "disabled";
  if (disableBtn2) disableBtn2 = "disabled";

  return createPortal(
    <>
      {modal ? (
        <main
          autoFocus
          className="modal"
          role="main"
          // close modal when click outside of it
          onClick={() => {
            close();
          }}
        >
          <section
            className="modal-container"
            role="dialog"
            id="modal-component"
            aria-modal="true"
            tabIndex={-1}
            aria-labelledby="dialogTitle"
            aria-describedby="dialogDescription"
          >
            <button
              className="modal-container--close"
              aria-label="Close"
              onClick={close}
            >
              <img src={x} alt="close icon" />
            </button>

            {hideHeader ? null : (
              <>
                <header className="modal-header">
                  {hideIcon ? null : (
                    <img className="modal-header--icon" src={icon} alt={icon} />
                  )}
                  {hideTitle ? null : (
                    <h2
                      tabIndex="0"
                      className="modal-header--title"
                      id="dialogTitle"
                    >
                      {title}
                    </h2>
                  )}
                </header>
                <hr className="modal-header--separator" />
              </>
            )}
            <main className="modal-main--msg">
              <p
                tabIndex="0"
                id="dialogDescription"
                className="modal-main--msgL1"
              >
                {msgL1}
              </p>
              {hideMsgL2 ? null : (
                <p
                  tabIndex="0"
                  id="dialogDescription"
                  className="modal-main--msgL2"
                >
                  {msgL2}
                </p>
              )}
            </main>
            {hideFooter ? null : (
              <>
                <hr className="modal-footer--separator" />
                <footer className="modal-footer">
                  {hideBtn1 ? null : (
                    <button
                      className={`modal-footer--btn1 ${disableBtn1}`}
                      aria-label="Close"
                      onClick={close}
                    >
                      {btn1}
                    </button>
                  )}
                  {hideBtn2 ? null : (
                    <button
                      className={`modal-footer--btn2 ${disableBtn2}`}
                      aria-label="Link"
                      onClick={redirect}
                    >
                      {btn2}
                    </button>
                  )}
                </footer>
              </>
            )}
          </section>
        </main>
      ) : null}
    </>,
    document.body
  );
}

/**
 * Modal PROPTYPES
 */
Modal.propTypes = {
  modal: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  x: PropTypes.string,
  icon: PropTypes.string,
  hideIcon: PropTypes.bool,
  title: PropTypes.string,
  hideTitle: PropTypes.bool,
  msgL1: PropTypes.string.isRequired,
  msgL2: PropTypes.string,
  hideMsgL2: PropTypes.bool,
  btn1: PropTypes.string,
  disableBtn1: PropTypes.bool,
  hideBtn1: PropTypes.bool,
  btn2: PropTypes.string,
  redirect: PropTypes.func,
  disableBtn2: PropTypes.bool,
  hideBtn2: PropTypes.bool,
  hideHeader: PropTypes.bool,
  hideFooter: PropTypes.bool,
};
