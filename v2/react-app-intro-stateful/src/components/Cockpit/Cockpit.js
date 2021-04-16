import React, { useEffect } from "react";

import classes from "./Cockpit.css";

 const cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http Requesr
    //setTimeout(() => {
    //  alert("Saved data to cloud!");
    //}, 1000);
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect"); // works just when component in none ef
    };
  }, [props.person]);
  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p>This really works!</p>
      <button className={classes.Button} onClick={props.clicked}>
        Show Content
      </button>
    </div>
  );
};


export default React.memo(cockpit);