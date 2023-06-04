import { createStore } from "redux";
import {} from "./Reducer";

const store = createStore(counterSlice.reducer);

const counterSubscriber = () => {
  const latestState = store.getState();
};

store.subscribe(counterSubscriber);

export default store;