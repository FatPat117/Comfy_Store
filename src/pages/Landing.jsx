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

const featuredProductsQuery = {
        queryKey: ["featuredProducts"],
        queryFn: () => customFetch("/products?featured=true"),
};

export const loader = (queryClient) => async () => {
        const response = await queryClient.ensureQueryData(featuredProductsQuery);
        const products = response.data.data;
        return { products };
};
