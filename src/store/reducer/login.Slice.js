import { createSlice } from "@reduxjs/toolkit";


export const loginSlice = createSlice({
    name:'login',
    initialState:{
        loginUser:[],
        token: localStorage.getItem("token")
    },
    reducers:{
        fetchLogin: (state, action) => {
            state.loginUser = action.payload
        }
    }
})

export const {fetchLogin} = loginSlice.actions
export default loginSlice.reducer