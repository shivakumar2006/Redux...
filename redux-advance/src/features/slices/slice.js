import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 

// create users
export const createUser = createAsyncThunk("createUser", async (data, {rejectWithValue}) => {
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
        return rejectWithValue(error.toString());
    }
})

// get users details
export const getUser = createAsyncThunk("getUser", async (_, thunkAPI) => {
    const response = await fetch("https://67d047e1825945773eb04baa.mockapi.io/crud", {
        method: "GET"
    })
    try {
        const result = await response.json();
        console.log("get user api response : ", result);
        return result;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.toString());
    }
})

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers : (builder) => {
        builder
        // create User
        .addCase(createUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        })
        .addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        })
        
        // getUser 
        .addCase(getUser.pending, (state) => {
            console.log("user fetching : ");
            state.loading = true;
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            console.log("user fetching successfully : ", action.payload);
        })
        .addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            console.log("error when user fetching : ", action.payload);
            state.error = action.payload;
        })
    }
})

export default userDetail.reducer;