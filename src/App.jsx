import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

//loader
import { loader as CheckoutLoader } from "./pages/Checkout";
import { loader as LandingLoader } from "./pages/Landing";
import { loader as OrdersLoader } from "./pages/Orders";
import { loader as ProductsLoader } from "./pages/Products";
import { loader as SingleProductLoader } from "./pages/SingleProduct";

//action
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { action as CheckoutAction } from "./components/CheckoutForm";
import { action as LoginAction } from "./pages/Login";
import { action as RegisterAction } from "./pages/Register";
import { store } from "./store";

const queryClient = new QueryClient({
        defaultOptions: {
                queries: {
                        staleTime: 1000 * 60 * 5,
                },
        },
});

const router = createBrowserRouter([
        {
                path: "/",
                element: <HomeLayout />,
                errorElement: <Error />,
                children: [
                        {
                                index: true,
                                element: <Landing />,
                                loader: LandingLoader(queryClient),
                                errorElement: <ErrorElement />,
                        },
                        {
                                path: "/about",
                                element: <About />,
                        },
                        {
                                path: "/products",
                                element: <Products />,
                                loader: ProductsLoader(queryClient),
                                errorElement: <ErrorElement />,
                        },
                        {
                                path: "/products/:id",
                                element: <SingleProduct />,
                                loader: SingleProductLoader(queryClient),
                                errorElement: <ErrorElement />,
                        },
                        {
                                path: "/cart",
                                element: <Cart />,
                        },
                        {
                                path: "/checkout",
                                element: <Checkout />,
                                loader: CheckoutLoader(store, queryClient),
                                action: CheckoutAction(store, queryClient),
                        },
                        {
                                path: "/orders",
                                element: <Orders />,
                                loader: OrdersLoader(store, queryClient),
                        },
                ],
        },
        {
                path: "/login",
                element: <Login />,
                errorElement: <Error />,
                action: LoginAction(store),
        },
        {
                path: "/register",
                element: <Register />,
                errorElement: <Error />,
                action: RegisterAction,
        },
]);
export default function App() {
        return (
                <QueryClientProvider client={queryClient}>
                        <RouterProvider router={router} />
                        <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
        );
}
