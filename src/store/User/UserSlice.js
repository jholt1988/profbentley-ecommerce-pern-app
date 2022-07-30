import { createSlice, createSelector } from '@reduxjs/toolkit';
import { checkLoginStatus, loginUser, registerUser } from '../Auth/AuthSlice';

const LoadingStatus = {
    Idle: "IDLE",
    Loading: "LOADING",
    Success: "SUCCESS", 
    Error: "ERROR"
}

const InitialState = {
    user: {}, 
    isLoading: LoadingStatus.Idle, 
    isAuthenticated: false, 
    error: null
    
}

const UserSlice = createSlice({
    name: 'user', 
    initialState: InitialState, 
    reducers: {},
    extraReducers: builder => {
        builder 
            .addCase(checkLoginStatus.fulfilled, (state, action) => {
                const {IsAuthenticated, User} = action.payload
                state.user = User
                state.isAuthenticated = IsAuthenticated
                state.isLoading = LoadingStatus.Success
            })
            .addCase(loginUser.rejected, (state, action) => {
                const { error, IsAuthenticated } = action.payload
                state.isAuthenticated = IsAuthenticated
                state.error = error
                state.isLoading = LoadingStatus.Error
        })
            .addCase(loginUser.fulfilled, (state, action) => {
                const { User, IsAuthenticated } = action.payload
                state.isAuthenticated = IsAuthenticated
                state.user = User
                state.isLoading = LoadingStatus.Success
        })
                .addCase(registerUser.rejected, (state, action) => {
                const { error, IsAuthenticated } = action.payload
                state.isAuthenticated = IsAuthenticated
                state.error = error
                state.isLoading = LoadingStatus.Error
        })
                .addCase(registerUser.fulfilled, (state, action) => {
                const { user, IsAuthenticated } = action.payload
                state.isAuthenticated = IsAuthenticated
                state.user = user
                state.isLoading = LoadingStatus.Success
        })
               .addCase(loginUser.pending, (state, action) => {
                state.user = {}
                state.isLoading = LoadingStatus.Loading
        })
            .addCase(registerUser.pending, (state, action) => {
                 state.user = {}
                state.isLoading = LoadingStatus.Loading
        })
    }
    
})



export const userSelector = (state) => state.user.user

export default UserSlice.reducer