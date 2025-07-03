import React from "react";
import { Outlet } from "react-router-dom";

export default function Home() {
        console.log(something);
        return (
                <div>
                        <h1>Home Layout </h1>
                        <Outlet />
                </div>
        );
}
