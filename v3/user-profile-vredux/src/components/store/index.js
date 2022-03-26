import { createStore } from "redux";

const initialState = { counter: 0, showCounterField: true };

/**
 *
 * @param {*} state
 * @param {*} action
 */
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
        showCounterField: state.showCounterField,
      };
    case "increase":
      return {
        counter: state.counter + action.value,
        showCounterField: state.showCounterField,
      };

    case "decrement":
      return {
        counter: state.counter === 0 ? 0 : state.counter - 1,
        showCounterField: state.showCounterField,
      };

    case "toggle":
      return {
        counter: state.counter,
        showCounterField: !state.showCounterField,
      };

    default:
      return state;
  }
};

/**
 *
 */
const store = createStore(counterReducer);

export default store;
