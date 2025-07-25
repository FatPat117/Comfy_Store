import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
export default function ProductsGrid() {
        const { products } = useLoaderData();

        return (
                <div className="pt-12 gap-6 grid md:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => {
                                return (
                                        <Link
                                                to={`/products/${product.id}`}
                                                key={product.id}
                                                className="card w-full shadow-2xl hover:shadow-gray-700 transition duration-300"
                                        >
                                                <figure className="px-4 pt-4">
                                                        <img
                                                                src={product.attributes.image}
                                                                alt={product.attributes.title}
                                                                className="w-full h-48 md:h-64 object-cover rounded-lg"
                                                        />
                                                </figure>
                                                <div className="card-body items-center text-center">
                                                        <h2 className="card-title capitalize text-2xl">
                                                                {product.attributes.title}
                                                        </h2>
                                                        {/* <p className="text-sm text-gray-500">
                                                                {product.attributes.description}
                                                        </p> */}
                                                        <p className="text-secondary capitalize text-xl font-bold">
                                                                {formatPrice(product.attributes.price)}
                                                        </p>
                                                </div>
                                        </Link>
                                );
                        })}
                </div>
        );
}
