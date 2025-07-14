import React from "react";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { FormInput, SubmitBtn } from ".";
import { clearCart } from "../features/cart";
import { customFetch, formatPrice } from "../utils";

export default function CheckoutForm() {
        return (
                <Form method="post" className="flex flex-col gap-y-5">
                        <h4 className="font-medium text-xl capitalize">Shipping Information</h4>
                        <FormInput label="Full Name" type="text" name="name" placeholder="Pitachiti" />
                        <FormInput label="Phone" type="tel" name="phone" placeholder="+1234567890" />
                        <FormInput label="Address" type="text" name="address" placeholder="123 Main St" />

                        <div className="mt-4">
                                <SubmitBtn text="Continue" />
                        </div>
                </Form>
        );
}

export const action =
        (store) =>
        async ({ request }) => {
                const formData = await request.formData();
                const data = Object.fromEntries(formData);
                const { name, address } = data;

                const user = store.getState().user.user;
                const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;

                const order = {
                        name,
                        address,
                        chargeTotal: orderTotal,
                        orderTotal: formatPrice(orderTotal),
                        cartItems,
                        numItemsInCart,
                };
                try {
                        const response = await customFetch.post(
                                "/orders",
                                { data: order },
                                {
                                        headers: {
                                                Authorization: `Bearer ${user.token}`,
                                        },
                                }
                        );
                        store.dispatch(clearCart());
                        toast.success("Order placed successfully");
                        return redirect("/orders");
                } catch (error) {
                        const errorMessage =
                                error?.response?.data?.error?.message || "There was an error placing your order";
                        toast.error(errorMessage);
                        return null;
                }
        };
