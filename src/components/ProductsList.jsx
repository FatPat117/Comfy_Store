import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

export default function ProductsList() {
        const { products } = useLoaderData();

        return (
                <div className="mt-12 grid gap-6">
                        {products.map((product) => {
                                console.log(product);
                                return (
                                        <Link
                                                to={`/products/${product.id}`}
                                                key={product.id}
                                                className="card grid md:grid-cols-[auto_1fr] w-full shadow-xl hover:shadow-gray-600 transition duration-300 group"
                                        >
                                                <figure className="py-4 px-4">
                                                        <img
                                                                src={product.attributes.image}
                                                                alt={product.attributes.title}
                                                                className="w-full h-48 md:w-48 md:h-48 object-cover rounded-lg justify-start items-start group-hover:scale-105 transition duration-300"
                                                        />
                                                </figure>
                                                <div className="card-body items-center text-center md:text-start md:flex-row md:justify-between md:items-start md:gap-x-10">
                                                        <div>
                                                                <h2 className="card-title capitalize text-2xl md:text-3xl group-hover:text-secondary transition duration-300">
                                                                        {product.attributes.title}
                                                                </h2>
                                                                <p className="text-md md:text-lg mt-2 font-medium">
                                                                        {product.attributes.company}
                                                                </p>
                                                                <p className="md:block hidden text-md md:text-lg mt-2 pr-2 text-justify font-light">
                                                                        {product.attributes.description.length > 150
                                                                                ? product.attributes.description.slice(
                                                                                          0,
                                                                                          150
                                                                                  ) + "..."
                                                                                : product.attributes.description}
                                                                </p>
                                                        </div>
                                                        <p className="text-secondary capitalize text-xl font-bold text-end">
                                                                {formatPrice(product.attributes.price)}
                                                        </p>
                                                </div>
                                        </Link>
                                );
                        })}
                </div>
        );
}
