import { configureStore } from "@reduxjs/toolkit";
import CartSlices from "./slices/CartSlices";

const Store = configureStore({
  reducer: {
    cart: CartSlices,
  },
});
export default Store;
