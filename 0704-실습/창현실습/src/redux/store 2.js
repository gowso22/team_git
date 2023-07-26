import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import AuthSlice from "./AuthSlice";
import TodoSlice from "./TodoSlice";
import CartSlice from "./CartSlice";




const store = configureStore({
    reducer : {
        CounterSlice : CounterSlice,
        AuthSlice : AuthSlice,
        TodoSlice : TodoSlice,
        CartSlice : CartSlice,
    }
});

export default store;