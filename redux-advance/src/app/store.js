import { configureStore } from "@reduxjs/toolkit"; 
import { userDetail } from "../features/slices/slice";

export const store = configureStore({
    reducer: {
         app: userDetail,
    }
});