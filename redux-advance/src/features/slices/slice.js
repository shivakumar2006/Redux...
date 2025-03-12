import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 

export const createUser = createAsyncThunk("createUser", async (data) => {
    const response = await fetch("https://67d047e1825945773eb04baa.mockapi.io/crud", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(data),
    })
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        
    }
})

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    }
})

export default userDetail.reducer;