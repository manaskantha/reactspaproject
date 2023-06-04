import {} from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    decrease(state, action) {
      state.value = state.value - action.payload;
    },
  },
});

export const reducerActions = counterSlice.actions;
