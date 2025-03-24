import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice";
import wishListSlice from "../features/WishListSlice";

export const store = configureStore({
    reducer: {
        allCart: cartReducer,
        fullWishList: wishListSlice,
    },
})