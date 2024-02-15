import { configureStore } from "@reduxjs/toolkit";
import AllNewsDataReducer from "../slice/AllNewsDataSlice";
import  filterByNewsReduce  from "../slice/FilterNewsByCategory";

export const store = configureStore({
   reducer:{
    newsData: AllNewsDataReducer,
    filterNews: filterByNewsReduce
   } 
})