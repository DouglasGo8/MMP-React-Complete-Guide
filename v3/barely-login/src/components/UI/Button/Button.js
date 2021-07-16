import "./Button.css";

/**
 *
 * @param {*} props
 * @returns
 */
const button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`button props.className`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default button;
