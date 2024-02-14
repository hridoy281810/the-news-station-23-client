import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchAllNewsData = createAsyncThunk("newsData/fecthAllNewsData",
async()=>{
    const res = await axios.get("newsData.js")
    console.log(res.data);
    return res.data
}
)
const allNewsDataSlice = createSlice({
    name: "newsData",
    initialState: {
        isLoading: false,
        newsData: [],
        error: null,
    },
    extraReducers:(builder)=>{
builder.addCase(fetchAllNewsData.pending,(state)=>{
    state.isLoading = true
});
builder.addCase(fetchAllNewsData.fulfilled, (state,action)=>{
   state.isLoading = false;
   state.newsData = action.payload;
   state.error = null
})
builder.addCase(fetchAllNewsData.rejected,(state,action)=>{
    state.isLoading = false;
    state.newsData = [];
    state.error = action.error.message
})

    }
})

export default allNewsDataSlice.reducer;
