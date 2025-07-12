import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorElement } from "./components";

import {
        About,
        Cart,
        Checkout,
        Error,
        HomeLayout,
        Landing,
        Login,
        Orders,
        Products,
        Register,
        SingleProduct,
} from "./pages";
import { loader as LandingLoader } from "./pages/Landing";
import { loader as ProductsLoader } from "./pages/Products";
import { action as RegisterAction } from "./pages/Register";
import { loader as SingleProductLoader } from "./pages/SingleProduct";

const router = createBrowserRouter([
        {
                path: "/",
                element: <HomeLayout />,
                errorElement: <Error />,
                children: [
                        {
                                index: true,
                                element: <Landing />,
                                loader: LandingLoader,
                                errorElement: <ErrorElement />,
                        },
                        {
                                path: "/about",
                                element: <About />,
                        },
                        {
                                path: "/products",
                                element: <Products />,
                                loader: ProductsLoader,
                                errorElement: <ErrorElement />,
                        },
                        {
                                path: "/products/:id",
                                element: <SingleProduct />,
                                loader: SingleProductLoader,
                                errorElement: <ErrorElement />,
                        },
                        {
                                path: "/cart",
                                element: <Cart />,
                        },
                        {
                                path: "/checkout",
                                element: <Checkout />,
                        },
                        {
                                path: "/orders",
                                element: <Orders />,
                        },
                ],
        },
        {
                path: "/login",
                element: <Login />,
                errorElement: <Error />,
        },
        {
                path: "/register",
                element: <Register />,
                errorElement: <Error />,
                action: RegisterAction,
        },
]);
export default function App() {
        return <RouterProvider router={router} />;
}
