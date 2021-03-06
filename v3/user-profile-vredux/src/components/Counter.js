import { useSelector, useDispatch } from "react-redux";

import { TOGGLE, INCREASE, INCREMENT, DECREMENT } from "./store/labels";

import classes from "./Counter.module.css";

/**
 *
 * @returns
 */
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounterField);

  const incrementHandler = () => {
    dispatch({ type: INCREMENT });
  };

  const decrementHandler = () => {
    dispatch({ type: DECREMENT });
  };

  const increaseHandler = () => {
    dispatch({ type: INCREASE, value: 2 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: TOGGLE });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>Increase by Num</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
