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
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if(find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            cartSlice.caseReducers.getCartTotal(state); // update total after adding...
        },
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, quantity } = cartItem;
                const itemTotal = price * quantity;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQuantity += quantity;
                return cartTotal;
            },
            {
                totalPrice: 0,
                totalQuantity: 0,
            }
        );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            })
        },
        decreaseQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload) {
                    if(item.quantity > 1) {
                        return { ...item, quantity : item.quantity - 1};
                    }
                }
                return item;
            })
        },
    },
})

export const { addToCart, getCartTotal, removeItem, increaseQuantity, decreaseQuantity, addToWishList, removeFromWishlist} = cartSlice.actions;

export default cartSlice.reducer;