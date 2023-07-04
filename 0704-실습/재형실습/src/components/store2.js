import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice1';

// Create the Redux store
const store2 = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default store2;
