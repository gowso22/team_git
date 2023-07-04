import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    num : 1,
};

const CounterSlice = createSlice({
    name : 'counter',
    initialState,

    reducers : {
        increment : (state, action) => {
            state.num = state.num + action.payload
        },
        decrement : (state, action) => {
            state.num = state.num - action.payload
        },
    }
});

export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;