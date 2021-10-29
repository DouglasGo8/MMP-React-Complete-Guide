import "./TaskItem.css";

/**
 * @author dougdb
 * @param {*} props
 * @returns
 */
const TaskItem = (props) => <li className="task">{props.children}</li>;

export default TaskItem;
