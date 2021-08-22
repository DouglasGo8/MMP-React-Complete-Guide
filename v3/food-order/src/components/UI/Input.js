import "./Input.css";
/**
 *
 */
const input = (props) => (
  <div className="input">
    <label htmlFor={props.input.id}>{props.label}</label>
    <input {...props.input} />
  </div>
);

export default input;
