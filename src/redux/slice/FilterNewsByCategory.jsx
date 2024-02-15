import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchFilterNewsData = createAsyncThunk("filterData/fetchFilterNewsData",
async()=>{
    const res = await axios.get("newsData.js")
    console.log(res.data);
    return res.data
}
)

export const filterByNewsSlice = createSlice({
    name: "filterData",
    initialState: {
        isLoading: false,
        filterData: [],
        error: null,
    },
    extraReducers:(builder)=>{
builder.addCase(fetchFilterNewsData.pending,(state)=>{
    state.isLoading = true
});
builder.addCase(fetchFilterNewsData.fulfilled, (state,action)=>{
   state.isLoading = false;
   const filter = state.filterData.filter((news)=>
   news.category === action.payload
   );

})
builder.addCase(fetchFilterNewsData.rejected,(state,action)=>{
    state.isLoading = false;
    state.newsData = [];
    state.error = action.error.message
})

    }
})

export default filterByNewsSlice.reducer;
