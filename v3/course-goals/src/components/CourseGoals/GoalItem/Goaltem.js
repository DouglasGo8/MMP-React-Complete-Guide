import "./GoalItem.css";

/**
 *
 * @param {*} props
 * @returns
 */
const goalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default goalItem;
