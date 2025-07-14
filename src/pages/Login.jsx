import React from "react";
import { useDispatch } from "react-redux";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormInput, SubmitBtn } from "../components";
import { loginUser } from "../features/user";
import { customFetch } from "../utils";
export default function Login() {
        const dispatch = useDispatch();
        const navigate = useNavigate();

        const loginAsGuestUser = async () => {
                try {
                        const response = await customFetch.post("/auth/local", {
                                identifier: "test@test.com",
                                password: "secret",
                        });
                        dispatch(loginUser(response.data));
                        toast.success("Welcome guest user");
                        navigate("/");
                } catch (error) {
                        toast.error("Failed to login as guest user");
                }
        };

        return (
                <section className="grid h-screen place-items-center">
                        <Form method="POST" className="card w-md bg-base-200 shadow-lg rounded-lg p-8 flex  gap-5">
                                <h4 className="text-4xl text-center font-bold mb-4">Login</h4>
                                <FormInput
                                        label="Email"
                                        type="email"
                                        placeholder="Email"
                                        name="identifier"
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

                                <button
                                        className="btn btn-secondary text-lg rounded-lg h-14 mt-1"
                                        onClick={loginAsGuestUser}
                                >
                                        Guest User
                                </button>
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

export const action =
        (store) =>
        async ({ request }) => {
                const formData = await request.formData();
                const data = Object.fromEntries(formData);
                try {
                        const response = await customFetch.post("/auth/local", data);
                        toast.success("Login successful");
                        store.dispatch(loginUser(response.data));
                        return redirect("/");
                } catch (error) {
                        const errorMessage = error?.response?.data?.error?.message || "Invalid email or password";
                        toast.error(errorMessage);
                        return null;
                }
        };
