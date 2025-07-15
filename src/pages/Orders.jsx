import React from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { ComplexPagination, OrdersList, SectionTitle } from "../components";
import { customFetch } from "../utils";

export default function Orders() {
        const { meta } = useLoaderData();

        if (meta.pagination.total < 1) return <SectionTitle title="No orders yet" />;

        return (
                <>
                        <SectionTitle title=" Your Orders" />
                        <OrdersList />
                        <ComplexPagination />
                </>
        );
}

const ordersQuery = (params, user) => {
        return {
                queryKey: ["orders", user.username, params.page ? parseInt(params.page) : 1],
                queryFn: () =>
                        customFetch("/orders", {
                                params,
                                headers: {
                                        Authorization: `Bearer ${user.token}`,
                                },
                        }),
        };
};

export const loader =
        (store, queryClient) =>
        async ({ request }) => {
                const user = store.getState().user.user;

                if (!user) {
                        return redirect("/login?message=You%20must%20be%20logged%20in%20to%20view%20orders");
                }

                const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);

                try {
                        const response = await queryClient.ensureQueryData(ordersQuery(params, user));

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
