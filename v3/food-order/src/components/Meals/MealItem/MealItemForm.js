import { useRef, useState } from "react";
import Input from "../../UI/Input";

import "./MealItemForm.css";

/**
 *
 * @param {*} props
 * @returns
 */
const mealItemForm = (props) => {
  const [amountIsValid, setAmoutIsValid] = useState(true);
  const amountInput = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInput.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmoutIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInput}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount!</p>}
    </form>
  );
};

export default mealItemForm;
