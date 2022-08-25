import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:'ui',
    initialState:{ cartIsvisible: false },
    reducers:{
        toggler (state) {
         

            state.cartIsvisible = !state.cartIsvisible;
        }
    }
});
export const uiActions = uiSlice.actions;
export default uiSlice;