import React, { useState } from "react";
import Backdrop from "./Backdrop";
/**
 *
 */
const todo = ({ text }) => {
  const [showModal, setShowModal] = useState();

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={() => setShowModal(true)}>
          Delete
        </button>
      </div>
      {showModal} && <Backdrop clickHandler={() => setShowModal(false)} />
      {showModal} && Component
    </div>
  );
};

export default todo;
