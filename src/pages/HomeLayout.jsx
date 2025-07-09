import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, Navbar } from "../components";

export default function Home() {
        const navigation = useNavigation();

        const isLoading = navigation.state === "loading";

        return (
                <div>
                        <Header />
                        <Navbar />
                        <section className="align-element py-20">{isLoading ? <Loading /> : <Outlet />}</section>
                </div>
        );
}
