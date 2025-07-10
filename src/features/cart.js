import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
        cartItems: [],
        numItemsInCart: 0,
        cartTotal: 0,
        shipping: 500,
        tax: 0,
        orderTotal: 0,
};

const getCartFromLocalStorage = () => {
        return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : defaultState;
};

const cartSlice = createSlice({
        name: "cart",
        initialState: getCartFromLocalStorage(),
        reducers: {
                addItem(state, action) {
                        const { product } = action.payload;

                        const item = state.cartItems.find((item) => item.cartId === product.cartId);

                        if (item) {
                                item.amount += product.amount;
                        } else {
                                state.cartItems.push(product);
                        }
                        state.numItemsInCart += product.amount;
                        state.cartTotal += product.price * product.amount;
                        cartSlice.caseReducers.calculateTotals(state);

                        localStorage.setItem("cart", JSON.stringify(state));
                        toast.success("Item added to cart");
                },
                removeItem(state, action) {
                        const { cartID } = action.payload;
                        const product = state.cartItems.find((item) => item.cartId === cartID);
                        if (product) {
                                state.cartItems = state.cartItems.filter((item) => item.cartId !== cartID);
                                state.numItemsInCart -= product.amount;
                                state.cartTotal -= product.price * product.amount;
                        }
                        cartSlice.caseReducers.calculateTotals(state);

                        localStorage.setItem("cart", JSON.stringify(state));
                        toast.error("Item removed from cart");
                },
                clearCart(state) {
                        localStorage.setItem("cart", JSON.stringify(defaultState));
                        return defaultState;
                },
                editItem(state, action) {
                        const { cartID, amount } = action.payload;
                        const product = state.cartItems.find((item) => item.cartId === cartID);
                        if (product) {
                                state.numItemsInCart += amount - product.amount;
                                state.cartTotal += product.price * (amount - product.amount);
                                product.amount = amount;
                        }
                        cartSlice.caseReducers.calculateTotals(state);
                        localStorage.setItem("cart", JSON.stringify(state));
                        toast.success("Item amount updated");
                },
                calculateTotals(state) {
                        state.tax = 0.1 * state.cartTotal;
                        state.orderTotal = state.cartTotal + state.shipping + state.tax;
                },
        },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart, editItem } = cartSlice.actions;
