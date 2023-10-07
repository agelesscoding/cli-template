/** Core */
import { createSlice } from "@reduxjs/toolkit";

/* Instruments */
const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

/** Types */
export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

