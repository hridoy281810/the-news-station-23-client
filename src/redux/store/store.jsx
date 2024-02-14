import { configureStore } from "@reduxjs/toolkit";
import AllNewsDataReducer from "../slice/AllNewsDataSlice";

export const store = configureStore({
   reducer:{
    newsData: AllNewsDataReducer
   } 
})