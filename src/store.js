import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/cart/CartSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    cartState: CartReducer,
    userState: userReducer,
  },
});

