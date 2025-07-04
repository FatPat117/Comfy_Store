import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
        return (
                <header className="max-w-full bg-neutral">
                        <div className="flex justify-center sm:justify-end items-end gap-3 py-2 align-element text-gray-400">
                                <Link to="/login" className="text-md hover:text-gray-200 hover:underline">
                                        Sign in/Guest
                                </Link>
                                <span className="text-gray-400 text-md">|</span>
                                <Link to="/register" className="text-md hover:text-gray-400 hover:underline">
                                        Create Account
                                </Link>
                        </div>
                </header>
        );
}
