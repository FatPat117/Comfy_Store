import React from "react";
import { useLoaderData } from "react-router-dom";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

export default function Products() {
        const { products, meta } = useLoaderData();

        return (
                <>
                        <Filters />
                        <ProductsContainer />
                        <PaginationContainer />
                </>
        );
}

export const loader =
        (queryClient) =>
        async ({ request }) => {
                const params = new URL(request.url).searchParams;
                const query = Object.fromEntries(params.entries());

                // const search = params.get("search") || "";
                // const category = params.get("category") || "";
                // const shipping = params.get("shipping") || "";
                // const price = params.get("price") || "";
                // const sort = params.get("sort") || "";
                // const page = params.get("page") || 1;

                const response = await customFetch.get("/products", { params: query });
                const products = response.data.data;
                const meta = response.data.meta;

                return { products, meta, query };
        };
