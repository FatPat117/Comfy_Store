import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import FormCheckBox from "./FormCheckBox";
import FormInput from "./FormInput";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";

export default function Filters() {
        const { query, meta } = useLoaderData();
        const { search, category, company, sort, price, shipping } = query;

        return (
                <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
                        {/* Search */}
                        <FormInput
                                label="Search Product"
                                type="search"
                                name="search"
                                placeholder="search"
                                size="input-sm"
                                defaultValue={search}
                        />
                        {/* Category */}
                        <FormSelect
                                label="Select Category"
                                name="category"
                                options={meta.categories}
                                defaultValue={category}
                        />

                        {/* Company */}
                        <FormSelect
                                label="Select Company"
                                name="company"
                                options={meta.companies}
                                defaultValue={company}
                        />

                        {/* Order */}
                        <FormSelect
                                label="Sort by"
                                name="order"
                                options={["a-z ", "z-a", "high", "low"]}
                                defaultValue={sort}
                        />

                        {/* Price */}
                        <FormRange label="Price" name="price" size="range-sm" defaultValue={price} price={price} />
                        {/* Shipping */}
                        <FormCheckBox
                                label="Free Shipping"
                                name="shipping"
                                size="checkbox-sm"
                                defaultChecked={shipping}
                        />

                        {/* Button  */}
                        <button type="submit" className="btn btn-primary w-full text-xl">
                                Search
                        </button>

                        <Link to="/products">
                                <button className="btn btn-accent w-full text-xl">Reset</button>
                        </Link>
                </Form>
        );
}
