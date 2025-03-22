import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../data/ProductData";

const initialState = { 
    cart: [],
    items: ProductData,
    totalQuantity: 0,
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload); 
        }
    },
})

export default cartSlice.reducer;