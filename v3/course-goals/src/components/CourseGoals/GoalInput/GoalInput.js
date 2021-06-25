import "./GoalInput.css";
import { useState } from "react";

import Button from "../../UI/Button/Button";

/**
 *
 * @param {*} props
 * @returns
 */
const courseInput = (props) => {
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (e) => {
    setText(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(text);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input onChange={goalInputChangeHandler} type="text" />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default courseInput;
