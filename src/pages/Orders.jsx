import React from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { OrdersList, PaginationContainer, SectionTitle } from "../components";
import { customFetch } from "../utils";

export default function Orders() {
        const { meta } = useLoaderData();

        if (meta.pagination.total < 1) return <SectionTitle title="No orders yet" />;

        return (
                <>
                        <SectionTitle title=" Your Orders" />
                        <OrdersList />
                        <PaginationContainer />
                </>
        );
}

export const loader =
        (store) =>
        async ({ request }) => {
                const user = store.getState().user.user;

                if (!user) {
                        return redirect("/login?message=You%20must%20be%20logged%20in%20to%20view%20orders");
                }

                const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);

                try {
                        const response = await customFetch.get("/orders", {
                                params,
                                headers: {
                                        Authorization: `Bearer ${user.token}`,
                                },
                        });

                        return { orders: response.data.data, meta: response.data.meta };
                } catch (error) {
                        const errorMessage =
                                error?.response?.data?.error?.message || "There was an error fetching orders";
                        if (error.response.status === 401 || error.response.status === 403)
                                return redirect("/login?message=You%20must%20be%20logged%20in%20to%20view%20orders");
                        toast.error(errorMessage);
                        return null;
                }
        };
