import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../redux/slices/CartSlice";

export const store = configureStore({
    reducer: {
        cart: CartReducer
    }
})


// import { configureStore } from "@reduxjs/toolkit"; 
// import CartReducer from "../redux/slices/CartSlice";

// export const store = configureStore({
//     reducer: {
//         cart: CartReducer
//     }
// });