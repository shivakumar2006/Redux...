import { configureStore } from "@reduxjs/toolkit"; 
import userDetail from "../features/slices/slice";

const store = configureStore({
    reducer: {
         app: userDetail,
    }
});

export default store;