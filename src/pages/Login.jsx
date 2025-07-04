import React from "react";
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

export default function Login() {
        return (
                <section className="grid h-screen place-items-center">
                        <Form method="POST" className="card w-md bg-base-200 shadow-lg rounded-lg p-8 flex  gap-5">
                                <h4 className="text-4xl text-center font-bold mb-4">Login</h4>
                                <FormInput
                                        label="Email"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        defaultValue={"test@test.com"}
                                />
                                <FormInput
                                        label="Password"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        defaultValue="secret"
                                />
                                <div className="flex flex-col gap-2 mt-5">
                                        <SubmitBtn text="Login" />
                                </div>

                                <button className="btn btn-secondary text-lg rounded-lg h-14 mt-1">Guest User</button>
                                <p className="text-center mt-5 text-lg">
                                        Don't have an account?{" "}
                                        <Link to="/register" className="underline text-primary ">
                                                Register
                                        </Link>
                                </p>
                        </Form>
                </section>
        );
}
