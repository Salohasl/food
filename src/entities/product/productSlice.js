import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "../data/data.js";

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {}
})

export default productSlice.reducer;