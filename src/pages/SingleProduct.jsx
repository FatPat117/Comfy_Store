import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";
import { addItem } from "../features/cart";
import { customFetch, formatPrice } from "../utils";
export default function SingleProduct() {
        const dispatch = useDispatch();
        const { product } = useLoaderData();
        const { image, title, price, description, colors, company } = product.attributes;

        const [productColor, setProductColor] = useState(colors[0]);
        const [productAmount, setProductAmount] = useState(1);

        const handleAmount = (e) => {
                const value = parseInt(e.target.value);
                setProductAmount(value);
        };

        const cartProduct = {
                cartId: product.id + productColor,
                productID: product.id,
                image,
                title,
                price,
                company,
                color: productColor,
                amount: productAmount,
                total: price * productAmount,
        };
        const handleAddToCart = () => {
                dispatch(addItem({ product: cartProduct }));
        };
        return (
                <section>
                        <div className="breadcrumbs -mt-9 text-md font-medium">
                                <ul>
                                        <li>
                                                <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                                <Link to="/products">Products</Link>
                                        </li>
                                </ul>
                        </div>
                        {/* Product Image */}
                        <div className="mt-8 grid gap-y-8 lg:gap-x-16 grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="relative">
                                        <img
                                                src={image}
                                                alt={title}
                                                className="w-96 h-96 lg:w-full lg:h-120 object-cover rounded-lg"
                                        />
                                </div>
                                <div>
                                        <h1 className="capitalize text-5xl font-bold tracking-wide">{title}</h1>
                                        <h3 className="text-xl text-neutral-content capitalize mt-5 font-semibold">
                                                From {company}
                                        </h3>
                                        <p className="mt-3 text-secondary text-xl font-bold">{formatPrice(price)}</p>
                                        <p className="mt-5 text-md lg:text-xl text-justify">{description}</p>
                                        {/* Colors */}
                                        <div className="mt-5 ">
                                                <h4 className="text-xl font-medium">Color: </h4>
                                                <div className="mt-2 flex gap-2">
                                                        {colors.map((color) => {
                                                                return (
                                                                        <button
                                                                                key={color}
                                                                                type="button"
                                                                                className={`${
                                                                                        color === productColor &&
                                                                                        "border-3  border-secondary shadow-xl"
                                                                                } badge w-7 h-7 rounded-full cursor-pointer`}
                                                                                onClick={() => setProductColor(color)}
                                                                                style={{ backgroundColor: color }}
                                                                        ></button>
                                                                );
                                                        })}
                                                </div>
                                        </div>
                                        {/* Amount */}
                                        <div className="mt-5 form-control w-full max-w-xs">
                                                <label
                                                        htmlFor="amount "
                                                        className="select text-[16px] flex items-center gap-2 font-bold border-3"
                                                >
                                                        <span className="label ">Amount</span>
                                                        <select
                                                                name="amount"
                                                                id="amount"
                                                                value={productAmount}
                                                                onChange={handleAmount}
                                                                className="select  select-secondary select-md"
                                                        >
                                                                {Array.from({ length: 10 }, (_, index) => (
                                                                        <option
                                                                                key={index}
                                                                                value={index + 1}
                                                                                className="text-[15px] font-bold"
                                                                        >
                                                                                {index + 1}
                                                                        </option>
                                                                ))}
                                                        </select>
                                                </label>
                                        </div>
                                        {/* Add to Cart */}
                                        <div className="mt-8">
                                                <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
                                                        Add to Cart
                                                </button>
                                        </div>
                                </div>
                        </div>
                </section>
        );
}

const singleProductQuery = (id) => {
        return { queryKey: ["singleProduct", id], queryFn: () => customFetch(`/products/${id}`) };
};

export const loader =
        (queryClient) =>
        async ({ params }) => {
                const { id } = params;
                const response = await queryClient.ensureQueryData(singleProductQuery(id));
                return { product: response.data.data };
        };
