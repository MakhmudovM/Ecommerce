import { createSlice } from "@reduxjs/toolkit";
 import toast from "react-hot-toast";
 const defaultState = {
   cartItems: [],
   numItemsInCart: 0,
   cartTotal: 0,
   orderTotal: 0,
 }
 const cartSlice = createSlice({
   name: "cart",
   initialState: defaultState,
   reducers: {
     addItem: (state, { payload }) => {
       const { product } = payload;
       if (item) {
         item.amount += product.amount;
       } else {
         state.cartItems.push(product);
       }
       state.cartTotal += product.price * product.amount;
     },
   },
 });
 export const { addItem } = cartSlice.actions;
 export default cartSlice.reducer;