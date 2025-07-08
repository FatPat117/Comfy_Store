import React from "react";
import { ProductsGrid, SectionTitle } from ".";
export default function FeaturedProducts() {
        return (
                <div className="pt-24">
                        <SectionTitle title="featured products" />
                        <ProductsGrid />
                </div>
        );
}
