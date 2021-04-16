import React from "react";

const modal = ({ text, onClose }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
        borderRadios: "6px",
        padding: "1rem",
        textAlign: "center",
        width: "30rem",
        zIndex: "10",
        position: "fixed",
        top: "20vh",
        left: " calc(50% - 15rem)",
      }}
    >
      <p>{text}</p>
      <button className="btn btn--alt" onClick={onClose}>
        Cancel
      </button>
      <button className="btn" onClick={onClose}>
        Confirm
      </button>
    </div>
  );
};

export default modal;
