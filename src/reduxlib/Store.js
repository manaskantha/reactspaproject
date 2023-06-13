import { createStore } from "redux";
import { counterSlice } from "./Reducer";

const store = createStore(counterSlice.reducer);

const counterSubscriber = () => {
  const latestState = store.getState();
};

store.subscribe(counterSubscriber);

export default store;
