import React from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { NavLinks } from "../components";
import { toggleTheme } from "../features/user";

export default function Navbar() {
        const cart = useSelector((state) => state.cart);
        const { numItemsInCart } = cart;

        const dispatch = useDispatch();
        const ToggleTheme = () => {
                dispatch(toggleTheme());
        };

        return (
                <nav className="bg-base-200 max-w-full">
                        <div className="navbar align-element">
                                <div className="navbar-start w-[35%]">
                                        <NavLink
                                                className="hidden lg:inline-flex btn btn-primary text-3xl items-center active py-6 font-bold"
                                                href="/"
                                        >
                                                C
                                        </NavLink>
                                        <div className="dropdown">
                                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                                        <FaBarsStaggered className="h-6 w-6 h" />
                                                </label>
                                                <ul
                                                        tabIndex={0}
                                                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
                                                >
                                                        <NavLinks />
                                                </ul>
                                        </div>
                                </div>

                                <div className="navbar-center hidden lg:flex">
                                        <NavLinks />
                                </div>
                                <div className="navbar-end">
                                        <div>
                                                <label className="btn btn-circle swap swap-rotate">
                                                        {/* this hidden checkbox controls the state */}
                                                        <input type="checkbox" onChange={ToggleTheme} />

                                                        {/* sun icon */}
                                                        <BsSunFill className="swap-on h-4 w-4" />

                                                        {/* moon icon */}
                                                        <BsMoonFill className="swap-off h-4 w-4" />
                                                </label>
                                        </div>
                                        <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
                                                <div className="indicator">
                                                        <FaShoppingCart className="h-6 w-6" />
                                                        <span className=" p-2 badge badge-xs badge-primary indicator-item text-[14px]">
                                                                {numItemsInCart}
                                                        </span>
                                                </div>
                                        </NavLink>
                                </div>
                        </div>
                </nav>
        );
}
