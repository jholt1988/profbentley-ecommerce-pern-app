import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const InitialState = {
    IsFetching: false,
    IsAuthenticated: false,
    error: null
}
export const checkLoginStatus = createAsyncThunk(
    'auth/checkLogin',
    async (param, thunkAPI) => {
        try {
            const response = await isLoggedIn();

            return {
                cart: response.cart,
                IsAuthenticated: true,
                user: response.user
            }

        } catch (err) {
            throw err
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, thunkAPI) => {
        try {
            const response = await login(credentials);
            return {
                user: response,
                IsAuthenticated: true
            }

        } catch (err) {
           throw err
        }

    })

export const registerUser = createAsyncThunk(
    'auth/registerUser', 
    async (credentials, thunkAPI) => {
        try {
            const response = await register(credentials)
            return {
                user: response, 
                IsAuthenticated: true 
            }
        } catch (err){
            throw err
        }
    }
)

const AuthSlice = createSlice({
    name: "auth",
    initialState: InitialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(checkLoginStatus.fulfilled, (state, action) => {
                const { IsAuthenticated } = action.payload
                state.IsAuthenticated = IsAuthenticated
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                const { IsAuthenticated } = action.payload
                state.IsAuthenticated = IsAuthenticated
            })
            .addCase(loginUser.rejected, (state, action) => {
                const {error} = action.payload
                state.error = error
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                const { IsAuthenticated } = action.payload
                state.IsAuthenticated = IsAuthenticated
            })
            .addCase(registerUser.rejected, (state, action) => {
                const { error } = action.payload
                state.error = error
            })
    }

})

export default AuthSlice.reducer