const { createStore } = require("redux");

/**
 * Inputs Old state + Dispatched Action -> Output new State Object
 */
const countReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "add":
      return { counter: state.counter + 1 };
    case "remove":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(countReducer); // Mandatory register

console.log(store.getState());

/*const counterSubscriber = () => {
  const latestState = store.getState(); // get last state snapshot
  console.log(latestState);
};*/

/*store.subscribe(counterSubscriber);

store.dispatch({ type: "add" });
store.dispatch({ type: "remove" });*/
