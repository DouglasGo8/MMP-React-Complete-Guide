import { forwardRef } from "react";
import "./Input.css";
/**
 *
 */
const input = forwardRef((props, ref) => (
  <div className="input">
    <label htmlFor={props.input.id}>{props.label}</label>
    <input ref={ref} {...props.input} />
  </div>
));

export default input;
