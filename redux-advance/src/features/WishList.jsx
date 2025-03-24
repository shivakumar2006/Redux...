import { createSlice } from '@reduxjs/toolkit';

const initialState =  {
    wishllist: [],
    items: ProductData,
    totalWishlistQuantity: 0,
}

export const wishListSlice = createSlice({
    name: "Wishlist",
    initialState,
    reducers: {
        
    }
})