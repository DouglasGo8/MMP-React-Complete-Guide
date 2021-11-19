import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../reducers/counter-reducer";
import "./Counter.css";

const Counter = () => {
  // React automatically set a Subscription
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isShowCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const dynamicIncreaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className="counter">
      <h1>Redux Counter</h1>
      {isShowCounter && <div className="value">{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={dynamicIncreaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
