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

// delete user details
export const deleteUser = createAsyncThunk("deleteUser", async (id, {rejectWithValue}) => {
    const response = await fetch(`https://67d047e1825945773eb04baa.mockapi.io/crud/${id}`, {
        method: "DELETE"
    })
    try {
        const result = await response.json();
        return result; 
    } catch (error) {
        return rejectWithValue(error.toString());
    }
})

// update user 
export const updateUser = createAsyncThunk("updateUser", async (data, {rejectWithValue}) => {
    const response = await fetch(`https://67d047e1825945773eb04baa.mockapi.io/crud/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(data)
    })
    try {
        const result = await response.json();
        return result 
    } catch (error) {
        return rejectWithValue(error.toString());
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

        // deleteUser 
        .addCase(deleteUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            const { id } = action.payload;

            if (id) {
                 state.users = state.users.filter((user) => user.id !== id) 
            }

            console.log("delete actions : ", action.payload);

        })
        .addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // updateUser 
        .addCase(updateUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.map((user) => (
                user.id === action.payload.id ? action.payload : user
            ));
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        })
    }
})

export default userDetail.reducer;