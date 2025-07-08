import React from "react";
import { Link } from "react-router-dom";
import Hero1 from "../assets/hero1.webp";
import Hero2 from "../assets/hero2.webp";
import Hero3 from "../assets/hero3.webp";
import Hero4 from "../assets/hero4.webp";

const heroImages = [Hero1, Hero2, Hero3, Hero4];

export default function Hero() {
        return (
                <section className="hero">
                        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                                <div className="hidden h-[29rem] lg:carousel carousel-center bg-neutral rounded-box  space-x-4 p-4 w-full">
                                        {heroImages.map((heroImg) => {
                                                return (
                                                        <div className="carousel-item">
                                                                <img
                                                                        src={heroImg}
                                                                        alt="hero"
                                                                        className="rounded-box w-80 h-full object-cover"
                                                                />
                                                        </div>
                                                );
                                        })}
                                </div>
                                <div className="mr-10">
                                        <h1 className="text-5px sm:text-6xl font-bold leading-19">
                                                We are changing the way people shop!
                                        </h1>
                                        <p className="py-6 text-xl max-w-2xl leading-8 mt-3">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                                                repellat explicabo enim soluta temporibus asperiores aut obcaecati
                                                perferendis porro nobis.
                                        </p>
                                        <Link to="/products" className="btn btn-primary p-6 text-xl mb-4 mt-5">
                                                Our Products
                                        </Link>
                                </div>
                        </div>
                </section>
        );
}
