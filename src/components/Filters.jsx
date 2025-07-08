import React from "react";
import { Form, Link } from "react-router-dom";
import FormInput from "./FormInput";

export default function Filters() {
        return (
                <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
                        <FormInput type="search" name="search" placeholder="search" size="input-sm" />
                        {/* Search */}
                        <button type="submit" className="btn btn-primary w-full text-xl">
                                Search
                        </button>
                        <Link to="/products">
                                <button className="btn btn-accent w-full text-xl">Reset</button>
                        </Link>
                </Form>
        );
}
