import React, { useState } from "react";
import { formatPrice } from "../utils";

export default function FormRange({ label, name, size, price }) {
        const step = 1000;
        const maxPrice = 100000;
        const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

        return (
                <div className="form-control">
                        <label className="label mb-2" htmlFor={name}>
                                <span className="label-text capitalize text-lg text-primary">{label}</span>
                                <span>{formatPrice(selectedPrice)}</span>
                        </label>
                        <input
                                type="range"
                                name={name}
                                id={name}
                                min={0}
                                step={step}
                                max={maxPrice}
                                value={selectedPrice}
                                onChange={(e) => setSelectedPrice(e.target.value)}
                                className={`range range-primary w-full ${size}`}
                        />
                        <div className="mt-2 flex justify-between text-sm px-2 font-medium">
                                <span>Min: {formatPrice(0)}</span>
                                <span>Max: {formatPrice(maxPrice)}</span>
                        </div>
                </div>
        );
}
