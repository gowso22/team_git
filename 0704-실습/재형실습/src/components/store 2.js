import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';

// Define the initial state of the counter
const initialState = {
  count: 0
};

// Define a reducer function to handle state updates
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Create the Redux store
const store = configureStore({
  reducer: 
    counterReducer,
    auth: authReducer
});

export default store;
