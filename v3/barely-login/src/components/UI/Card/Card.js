import "./Card.css";

/**
 *
 * @param {*} props
 * @returns
 */
const card = (props) => (
  <div className={`${card} ${props.className}`}>{props.children}</div>
);

export default card;
