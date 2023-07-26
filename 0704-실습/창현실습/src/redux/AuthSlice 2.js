import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLogin : false,
};

const AuthSlice = createSlice({
    name : 'auth',
    initialState,

    reducers : {
        login : (state, action) => {
            state.isLogin = true
        },
        logout : (state, action) => {
            state.isLogin = false
        },
    }
});

export const {login, logout} = AuthSlice.actions;
export default AuthSlice.reducer;