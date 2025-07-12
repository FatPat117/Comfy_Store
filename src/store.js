import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart";
import userReducer from "./features/user";

export const store = configureStore({
        reducer: {
                cart: cartReducer,
                user: userReducer,
        },
});
