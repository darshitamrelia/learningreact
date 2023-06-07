import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import profileSlice from "./profileSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    profile: profileSlice,
    product: productSlice,
  },
});
