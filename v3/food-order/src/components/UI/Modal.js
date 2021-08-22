import { Fragment } from "react";
import { createPortal } from "react-dom";
import "./Modal..css";

/**
 *
 * @param {*} props
 * @returns
 */
const Backdrop = () => {
  return <div className="backdrop" />;
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
const modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default modal;
