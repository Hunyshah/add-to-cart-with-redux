import { createSlice } from "@reduxjs/toolkit";
const intialvalue ={
    items:[],
    totalamount:0
}
const cartSlice = createSlice({
    name:'cart',
    initialState:intialvalue,
    reducers:{
       additemtoCart (state,action){
        const newitem = action.payload;
        const existingitem = state.items.find(item => item.id === newitem.id);
         state.totalamount++;
        if (!existingitem){
            state.items.push({
                id:newitem.id,
                price:newitem.price,
                quanitity:1,
                totalprice:newitem.price,
                name:newitem.title
            });
        }
        else {
            existingitem.quanitity++;
            existingitem.totalprice=existingitem.totalprice + newitem.price;
        }
      
       },
       removeitemtoCart (state, action){
        const id = action.payload;
        const existingitem = state.items.find(item => item.id === id);
         state.totalamount--;
        if (existingitem.quanitity===1){
           state.items = state.items.filter(item => item.id !== id);
        } else {
            existingitem.quanitity--
            existingitem.totalprice = existingitem.totalprice - existingitem.price;
        }

    },
    }
})
export const cartActions = cartSlice.actions;
export default cartSlice;
