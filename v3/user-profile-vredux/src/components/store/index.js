import { createStore } from "redux";

import { TOGGLE, INCREASE, INCREMENT, DECREMENT } from "./labels";

const initialState = { counter: 0, showCounterField: true };

/**
 *
 * @param {*} state
 * @param {*} action
 */
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
        showCounterField: state.showCounterField,
      };

    case INCREASE:
      return {
        counter: state.counter + action.value,
        showCounterField: state.showCounterField,
      };

    case DECREMENT:
      return {
        counter: state.counter === 0 ? 0 : state.counter - 1,
        showCounterField: state.showCounterField,
      };

    case TOGGLE:
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
