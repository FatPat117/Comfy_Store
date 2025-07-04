import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

export default function Home() {
        return (
                <div>
                        <Header />
                        <section className="align-element py-20">
                                <Outlet />
                        </section>
                </div>
        );
}
