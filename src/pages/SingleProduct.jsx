import React from "react";
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";

export default function SingleProduct() {
        const { product } = useLoaderData();
        console.log(product);
        const { image, title, price, description, colors, company, category } = product.attributes;
        return <h1>Single Product </h1>;
}
export const loader = async ({ params }) => {
        const { id } = params;
        const response = await customFetch(`/products/${id}`);
        return { product: response.data.data };
};
