import React from "react";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { CartTotal, CheckoutForm, SectionTitle } from "../components";

export default function Checkout() {
        const cartTotal = useSelector((state) => state.cart.cartTotal);

        if (cartTotal === 0) return <SectionTitle title="Your Cart is empty" style="text-center" />;
        return (
                <>
                        <SectionTitle title="place your order">=</SectionTitle>
                        <div className="mt-8 grid md:grid-cols-2 items-start">
                                <CheckoutForm />
                                <CartTotal />
                        </div>
                </>
        );
}

export const loader = (store) => async () => {
        const user = store.getState().user.user;
        if (!user) {
                return redirect("/login?message=You%20must%20be%20logged%20in%20to%20checkout");
        }
        return null;
};
