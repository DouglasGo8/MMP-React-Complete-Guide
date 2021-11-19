import "./Card.css";

/**
 *
 * @param {*} props
 * @returns
 */
const Card = (props) => {
  return (
    <section className={`${"card"} ${props.className ? props.className : ""}`}>
      {props.children}
    </section>
  );
};

export default Card;
