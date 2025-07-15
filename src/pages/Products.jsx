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

const allProductsQuery = (queryParams) => {
        const { search, category, company, sort, price, shipping, page } = queryParams;

        return {
                queryKey: [
                        "products",
                        search ?? "",
                        category ?? "all",
                        company ?? "all",
                        sort ?? "a-z",
                        price ?? 100000,
                        shipping ?? false,
                        page ?? 1,
                ],
                queryFn: () =>
                        customFetch("/products", {
                                params: queryParams,
                        }),
        };
};

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

                const response = await queryClient.ensureQueryData(allProductsQuery(query));
                const products = response.data.data;
                const meta = response.data.meta;

                return { products, meta, query };
        };
