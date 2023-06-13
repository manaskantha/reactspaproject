import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "u1",
    firstName: "Peter",
    lastName: "Jones",
    dob: new Date(1994, 7, 14),
    gender: "Male",
  },
  {
    id: "u2",
    firstName: "Sam",
    lastName: "Smith",
    dob: new Date(1988, 5, 11),
    gender: "Male",
  },
];

export const counterSlice = createSlice({
  name: "USERS",
  initialState,
  reducers: {
    addBasicDetails(state, action) {
      state.USERS = action.payload;
    },
  },
});

export const reducerActions = counterSlice.actions;
