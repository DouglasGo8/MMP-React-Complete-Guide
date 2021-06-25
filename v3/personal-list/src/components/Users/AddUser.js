import { useRef, useState } from "react";

import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

/**
 *
 * @returns
 */
const addUser = (props) => {
  const ageInputRef = useRef();
  const nameInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    const enteredAge = ageInputRef.current.value;
    const enteredName = nameInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Enter a value",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Enter a Age Valid",
      });
      return;
    }

    //console.log(age);
    props.onAddUser(enteredAge, enteredName);

    ageInputRef.current.value = "";
    nameInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button text="Add User" type="submit" />
        </form>
      </Card>
    </div>
  );
};

export default addUser;
