import { createSlice } from "@reduxjs/toolkit";


const initialCounterState = {
  value: 0,
  showCounterField: true,
};

/**
 *
 */
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  // Redux toolkit allows you manipulate directly state object, but this is bad practice
  reducers: {
    toggle(state) {
      state.showCounterField = !state.showCounterField;
    },
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    increment(state) {
      state.value++;
    },
    decrement(state) {
      // const myValue = state.counter;
      /*if (state.value === 0) {
        state.value = 0;
      } else {
        state.value--;
      }*/
      state.value = state.value === 0 ? 0 : state.value - 1;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
