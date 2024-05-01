import { createSlice } from "@reduxjs/toolkit";
import { DefaultContext } from "react-icons/lib";
import { json } from "react-router-dom";
import { toast } from "react-toastify";

const defaultState = {
    cartItems: [],
    numItemInCart:0,
    cartTotal: 0,
    shipping: 300,
    tax:0,
    orderTotal:0,
}
const getCartFromLC = ()=>{
    return JSON.parse(localStorage.getItem("cart")) || defaultState
}
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLC(),
  reducers: {
    addItem: (state, action) => {
      const {product} = action.payload
      const item = state.cartItems.find((i)=>i.cartID ===product.cartID)
      if(item) {item.amount += product.amount}
      else{
        state.cartItems.push(product)
      }
      state.numItemInCart += product.amount
      state.cartTotal += product.amount * product.price
     cartSlice.caseReducers.calcTotals(state)
      toast.success("item added to cart")
    },
    clearCart: (state) => {
        localStorage.setItem("cart",JSON.stringify(defaultState));
        return defaultState
    },
    removeitem: (state, action) => {
        const {cartID} = action.payload
        const product = state.cartItems.find((i)=>{
          return  i.cartID ===cartID
        })
        state.cartItems = state.cartItems.filter((i)=>i.cartID !==cartID)
        state.numItemInCart -= product.amount
        state.cartTotal -= product.amount * product.price
        cartSlice.caseReducers.calcTotals(state);
         toast.error("item removed from cart");

    },
    updateItem: (state, action) => {
        const {cartID, amount} = action.payload
        const item = state.cartItems.find((i)=>{
           return i.cartID === cartID
        })
        state.numItemInCart += amount -item.amount
        state.cartTotal += item.price * (amount - item.amount)
        item.amount = amount
        cartSlice.caseReducers.calcTotals(state);
        toast.error("item updated");
    },
    calcTotals:(state)=>{
         state.tax = 0.1 * state.cartTotal;
         state.orderTotal = state.cartTotal + state.shipping + state.shipping;
         localStorage.setItem("cart", JSON.stringify(state));
    }
  },
});

export const {addItem, clearCart ,removeitem, updateItem} = cartSlice.actions

export default cartSlice.reducer