import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounterField: true };

/**
 *
 */
const counterSlice = createSlice({
  name: "counter",
  initialState,
  // Redux toolkit allows you manipulate directly state object, but this is bad practice
  reducers: {
    toggle(state) {
      state.showCounterField = !state.showCounterField;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      // const myValue = state.counter;
      /*if (state.counter === 0) {
        state.counter = 0;
      } else {
        state.counter--;
      }*/
      state.counter = state.counter === 0 ? 0 : state.counter - 1;
    },
  },
});

/**
 *
 */
const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
