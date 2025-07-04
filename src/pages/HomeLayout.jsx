import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

export default function Home() {
        return (
                <div>
                        <Header />
                        <Navbar />
                        <section className="align-element py-20">
                                <Outlet />
                        </section>
                </div>
        );
}
