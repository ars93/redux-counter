// src/redux/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Initial state of the counter
const initialState = {
  value: 0
};

// Create a slice for the counter
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    currentCount: (state, action) => {
      state.value = action.payload;
    }
  }
});

// Export actions to use them in the component
export const { increment, decrement, currentCount, reset } =
  counterSlice.actions;

// Export the reducer to configure in the store
export default counterSlice.reducer;
