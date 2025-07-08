import React from "react";
import { useLoaderData } from "react-router-dom";
import { ProductsList } from ".";

export default function ProductsContainer() {
        const { products } = useLoaderData();
        return (
                <>
                        <ProductsList />
                </>
        );
}
