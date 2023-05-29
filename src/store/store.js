import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer/login.Slice";

export const store = configureStore({
    reducer:{
        login: loginReducer,
    }
})