import { Fragment } from "react";
import { createPortal } from "react-dom";
import "./Modal..css";

/**
 *
 * @param {*} props
 * @returns
 */
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

/**
 *
 * @param {*} props
 * @returns
 */
const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};
/**
 *
 */
const portalElement = document.getElementById("overlays");
/**
 *
 * @param {*} props
 */
const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
