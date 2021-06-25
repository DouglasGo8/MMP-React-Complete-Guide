import "./GoalList.css";

import GoalItem from "../GoalItem/Goaltem";

const goalList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <GoalItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.text}
        </GoalItem>
      ))}
    </ul>
  );
};

export default goalList;
