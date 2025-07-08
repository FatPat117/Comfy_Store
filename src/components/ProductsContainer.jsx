import React, { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import { ProductsGrid, ProductsList } from ".";

export default function ProductsContainer() {
        const { meta } = useLoaderData();
        const totalProducts = meta.pagination.total;

        const [layout, setLayout] = useState("grid");

        const setActiveLayout = (pattern) => {
                return `text-xl btn btn-circle btn-sm ${
                        layout === pattern
                                ? "btn-active btn-primary text-primary-content"
                                : "btn-ghost text-base-content"
                }`;
        };

        return (
                <>
                        {/* Header */}
                        <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
                                <h4 className="font-medium text-lg capitalize">
                                        {totalProducts} product{totalProducts > 1 ? "s" : ""} found
                                </h4>
                                <div className="flex items-center gap-x-2">
                                        <button className={setActiveLayout("grid")} onClick={() => setLayout("grid")}>
                                                <BsFillGridFill />
                                        </button>
                                        <button className={setActiveLayout("list")} onClick={() => setLayout("list")}>
                                                <BsList />
                                        </button>
                                </div>
                        </div>
                        {/* Products */}
                        <div>
                                {totalProducts === 0 ? (
                                        <h5 className="text-2xl mt-16">Sorry, no products matched your search</h5>
                                ) : layout === "grid" ? (
                                        <ProductsGrid />
                                ) : (
                                        <ProductsList />
                                )}
                        </div>
                </>
        );
}
