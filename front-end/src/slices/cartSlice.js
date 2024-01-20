import { createSlice } from "@reduxjs/toolkit";

// Items to be stored in local storage so that when we leave the site, we come back, our items are still in the cart.
// Local storage can only hold strings.
const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {cartItems: []};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
});

export default cartSlice.reducer;