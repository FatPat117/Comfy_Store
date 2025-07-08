import React from "react";
import { useLoaderData } from "react-router-dom";
import { Filters, PaginationContainer, ProductContainer } from "../components";
import { customFetch } from "../utils";

export default function Products() {
        const { products, meta } = useLoaderData();

        return (
                <>
                        <Filters />
                        <ProductContainer />
                        <PaginationContainer />
                </>
        );
}

export const loader = async ({ request }) => {
        const response = await customFetch("/products");
        const products = response.data.data;
        const meta = response.data.meta;
        return { products, meta };
};
