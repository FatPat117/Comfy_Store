import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

export default function Filters() {
        const { meta } = useLoaderData();
        console.log(meta);
        return (
                <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
                        {/* Search */}
                        <FormInput
                                label="Search Product"
                                type="search"
                                name="search"
                                placeholder="search"
                                size="input-sm"
                        />
                        {/* Category */}
                        <FormSelect
                                label="Select Category"
                                name="category"
                                options={meta.categories}
                                defaultValue="all"
                        />

                        {/* Company */}
                        <FormSelect label="Select Company" name="company" options={meta.companies} defaultValue="all" />

                        {/* Order */}
                        <FormSelect
                                label="Sort by"
                                name="order"
                                options={["a-z ", "z-a", "high", "low"]}
                                defaultValue="a-z"
                        />

                        <button type="submit" className="btn btn-primary w-full text-xl">
                                Search
                        </button>
                        <Link to="/products">
                                <button className="btn btn-accent w-full text-xl">Reset</button>
                        </Link>
                </Form>
        );
}
