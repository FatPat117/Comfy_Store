import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function Error() {
        const error = useRouteError();

        if (error.status === 404) {
                return (
                        <main className="grid min-h-[100vh] place-items-center">
                                <div className="text-center space-y-6">
                                        <p className="text-9xl font-bold text-rose-500 ">404</p>
                                        <h1 className="text-4xl font-bold mt-4 tracking-tight sm:text-5xl">
                                                Page Not Found
                                        </h1>
                                        <p className="text-2xl mt-6 leading-7">
                                                Sorry, we couldn't find the page you were looking for
                                        </p>
                                        <Link to="/" className="btn btn-primary">
                                                Back to Home
                                        </Link>
                                </div>
                        </main>
                );
        }
        return (
                <main className="grid min-h-[100vh] place-items-center">
                        <div className="text-center space-y-6">
                                <p className="text-4xl font-bold text-rose-500 ">There was an error...</p>
                        </div>
                </main>
        );
}
