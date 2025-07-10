import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItemList, CartTotal, SectionTitle } from "../components";

export default function Cart() {
        const user = null;
        const numsItemInCart = useSelector((state) => state.cart.numsItemInCart);

        if (numsItemInCart === 0) return <SectionTitle title="Your cart is empty" />;
        return (
                <>
                        <SectionTitle title="Your Shopping Cart" />
                        <div className="mt-8 grid gap-8 lg:grid-cols-12">
                                <div className="lg:col-span-8">
                                        <CartItemList />
                                </div>
                                <div className="lg:col-span-4 lg:pl-4">
                                        <CartTotal />
                                        {user ? (
                                                <Link to="/checkout" className="btn btn-primary btn-block mt-8 text">
                                                        Proceed to checkout
                                                </Link>
                                        ) : (
                                                <Link
                                                        to="/login"
                                                        className="btn btn-primary btn-block mt-8  text-lg font-bold btn-lg"
                                                >
                                                        Login
                                                </Link>
                                        )}
                                </div>
                        </div>
                </>
        );
}
