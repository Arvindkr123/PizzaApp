import { configureStore } from "@reduxjs/toolkit";
import CartSlices from "./slices/CartSlices";
import CategorySlice from "./slices/CategorySlice";

const Store = configureStore({
  reducer: {
    cart: CartSlices,
    category: CategorySlice,
  },
});
export default Store;
