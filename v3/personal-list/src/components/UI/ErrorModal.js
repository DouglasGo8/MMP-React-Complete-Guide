import { Fragment } from "react";
import { createPortal } from "react-dom";
import "./ErrorModal.css";

import Card from "./Card";
import Button from "./Button";

/**
 *
 * @param {*} props
 * @returns
 */
const BackDrop = (props) => (
  <div className="backdrop_p" onClick={props.onConfirm} />
);

/**
 *
 * @param {*} props
 * @returns
 */
const ModalOverlay = (props) => {
  return (
    <Card className="modal_p">
      <header className="header_p">
        <h2>{props.title}</h2>
      </header>
      <div className="content_p">
        <p>{props.message}</p>
      </div>
      <footer className="actions_p">
        <Button text="Okay" onClick={props.onConfirm} />
      </footer>
    </Card>
  );
};

/**
 *
 * @returns
 */
const errorModal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default errorModal;
