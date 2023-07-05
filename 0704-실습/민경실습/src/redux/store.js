import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import authReducer from "./authSlice";
import todosReducer from "./todosSlice";
import cartReducer from "./cartSlice";

import logger from "redux-logger";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    todos: todosReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
