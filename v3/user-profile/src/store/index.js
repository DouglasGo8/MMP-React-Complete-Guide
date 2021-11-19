import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../reducers/auth-reducer";
import counterReducer from "../reducers/counter-reducer";

/*const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case DYNAMIC_INCREASE:
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case DECREMENT:
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case TOGGLE:
      return {
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};*/

const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
  },
});



export default store;
