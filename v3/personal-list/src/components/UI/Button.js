import "./Button.css";

/**
 *
 * @param {*} props
 * @returns
 */
const button = (props) => (
  <button
    className="button"
    type={props.type || "button"}
    onClick={props.onClick}
  >
    {props.text}
  </button>
);

export default button;
