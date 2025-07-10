import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

export default function CartTotal() {
        const cart = useSelector((state) => state.cart);
        const { cartTotal, shipping, tax, orderTotal } = cart;

        return (
                <div className="card bg-base-200">
                        <div className="card-body">
                                {/* SUBTOTAL*/}
                                <p className="font-medium flex justify-between text-xs md:text-md lg:text-[16px] border-b border-base-400 p-3 ">
                                        <span>Subtotal</span>
                                        <span>{formatPrice(cartTotal)}</span>
                                </p>
                                {/* Shipping   */}
                                <p className=" font-medium flex justify-between text-xs md:text-md lg:text-[16px] border-b border-base-400 p-3 mt-2">
                                        <span>Shipping</span>
                                        <span>{formatPrice(shipping)}</span>
                                </p>
                                {/* Tax    */}
                                <p className=" font-medium flex justify-between text-xs md:text-md lg:text-[16px] border-b border-base-400 p-3 mt-2">
                                        <span>Tax</span>
                                        <span>{formatPrice(tax)}</span>
                                </p>
                                {/* Order Total */}
                                <p className="flex justify-between text-xs md:text-md lg:text-lg border-base-400 p-3 font-bold">
                                        <span>Order Total</span>
                                        <span>{formatPrice(orderTotal)}</span>
                                </p>
                        </div>
                </div>
        );
}
