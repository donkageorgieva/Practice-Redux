import { createStore } from "redux";

const initialState = {
  counter: 0,
};
const reducer = (state = initialState, actions) => {
  if (actions.type === "ADD") {
    return {
      counter: state.counter + 1,
    };
  } else if (actions.type === "REMOVE") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
const store = createStore(reducer);

export default store;
