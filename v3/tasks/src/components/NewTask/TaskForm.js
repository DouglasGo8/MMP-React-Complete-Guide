import { useRef } from "react";

import "./TaskForm.css";

/**
 *
 * @param {*} props
 * @returns
 */
const TaskForm = (props) => {
  const taskInputRef = useRef();
  const submitHandler = (evt) => {
    evt.preventDefault();

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{props.loading ? "Sending..." : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
