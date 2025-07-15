import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function CartItemList() {
        const cartItems = useSelector((state) => state.cart.cartItems);

        return (
                <>
                        {cartItems.map((item) => {
                                return <CartItem key={item.cartId} cartItem={item} />;
                        })}
                </>
        );
}
