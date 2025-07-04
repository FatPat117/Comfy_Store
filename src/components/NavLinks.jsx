import React from "react";
import { NavLink } from "react-router-dom";
export default function NavLinks() {
        return (
                <div className=" menu menu-vertical lg:menu-horizontal flex gap-3 text-xl text-center">
                        <NavLink
                                to="/"
                                className={({ isActive }) =>
                                        `p-3 rounded-md transition-colors duration-300 ${
                                                isActive
                                                        ? "bg-primary text-primary-content"
                                                        : "text-base-content hover:bg-stone-100/20"
                                        }`
                                }
                        >
                                Home
                        </NavLink>
                        <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                        `p-3 rounded-md transition-colors duration-300 ${
                                                isActive
                                                        ? "bg-primary text-primary-content"
                                                        : "text-base-content hover:bg-stone-100/20"
                                        }`
                                }
                        >
                                About
                        </NavLink>
                        <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                        `p-3 rounded-md transition-colors duration-300 ${
                                                isActive
                                                        ? "bg-primary text-primary-content"
                                                        : "text-base-content hover:bg-stone-100/20"
                                        }`
                                }
                        >
                                Products
                        </NavLink>
                        <NavLink
                                to="/cart"
                                className={({ isActive }) =>
                                        `p-3 rounded-md transition-colors duration-300 ${
                                                isActive
                                                        ? "bg-primary text-primary-content"
                                                        : "text-base-content hover:bg-stone-100/20"
                                        }`
                                }
                        >
                                Cart
                        </NavLink>
                        <NavLink
                                to="/checkout"
                                className={({ isActive }) =>
                                        `p-3 rounded-md transition-colors duration-300 ${
                                                isActive
                                                        ? "bg-primary text-primary-content"
                                                        : "text-base-content hover:bg-stone-100/20"
                                        }`
                                }
                        >
                                Checkout
                        </NavLink>
                        <NavLink
                                to="/orders"
                                className={({ isActive }) =>
                                        `p-3 rounded-md transition-colors duration-300 ${
                                                isActive
                                                        ? "bg-primary text-primary-content"
                                                        : "text-base-content hover:bg-stone-100/20"
                                        }`
                                }
                        >
                                Orders
                        </NavLink>
                </div>
        );
}
