import React from "react";

import { useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart";
import { logoutUser } from "../features/user";

export default function Header() {
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const user = useSelector((state) => state.user.user);
        const queryClient = useQueryClient();

        const handleLogout = () => {
                dispatch(logoutUser());
                dispatch(clearCart());
                queryClient.removeQueries();
                navigate("/");
        };

        return (
                <header className="max-w-full bg-neutral">
                        <div className="flex justify-center sm:justify-end items-end gap-3 py-2 align-element text-gray-400">
                                {user ? (
                                        <div className="flex gap-x-2 sm:gap-x-8 items-center">
                                                <p className="text-xs sm:text-lg font-bold text-primary">
                                                        {user.username}
                                                </p>
                                                <button
                                                        className="btn btn-sm btn-outline btn-primary text-md font-bold"
                                                        onClick={handleLogout}
                                                >
                                                        Log Out
                                                </button>
                                        </div>
                                ) : (
                                        <>
                                                <Link
                                                        to="/login"
                                                        className="text-md hover:text-gray-200 hover:underline"
                                                >
                                                        Sign in/Guest
                                                </Link>
                                                <span className="text-gray-400 text-md">|</span>
                                                <Link
                                                        to="/register"
                                                        className="text-md hover:text-gray-400 hover:underline"
                                                >
                                                        Create Account
                                                </Link>
                                        </>
                                )}
                        </div>
                </header>
        );
}
