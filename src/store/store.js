import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = {
  counter: 0,
  showCounter: true,
};
const authInitialState = {
  isLoggedIn: false,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      if (action.payload) {
        state.counter = state.counter + action.payload;
      } else {
        state.counter++;
      }
    },
    decrement(state) {
      state.counter--;
    },

    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
