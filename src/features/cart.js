import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
        cartItems: [],
        numItemsInCart: 0,
        cartTotal: 0,
        shipping: 500,
        tax: 0,
        orderTotal: 0,
};

const cartSlice = createSlice({
        name: "cart",
        initialState: defaultState,
        reducers: {
                addItem(state, action) {
                        console.log(action.payload);
                },
                removeItem(state, action) {
                        console.log(action.payload);
                },
                clearCart(state) {
                        return defaultState;
                },
                editItem(state, action) {
                        console.log(action.payload);
                },
        },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart, editItem } = cartSlice.actions;
