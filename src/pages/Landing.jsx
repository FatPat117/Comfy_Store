import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

export default function Landing() {
        return (
                <section>
                        <Hero />
                        <FeaturedProducts />
                </section>
        );
}

export const loader = (queryClient) => async () => {
        const response = await customFetch.get("/products?featured=true");

        return { products: response.data.data };
};
