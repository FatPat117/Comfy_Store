import React from "react";
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

export default function Register() {
        return (
                <section className="grid h-screen place-items-center">
                        <Form method="POST" className="card w-md bg-base-200 shadow-lg rounded-lg p-8 flex  gap-5">
                                <h4 className="text-4xl text-center font-bold mb-4">Register</h4>
                                <FormInput
                                        label="Username"
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        defaultValue={"test"}
                                />
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
                                        <SubmitBtn text="Register" />
                                </div>

                                <p className="text-center mt-5 text-lg">
                                        Already have an account?{" "}
                                        <Link to="/login" className="underline text-primary ">
                                                Login
                                        </Link>
                                </p>
                        </Form>
                </section>
        );
}
