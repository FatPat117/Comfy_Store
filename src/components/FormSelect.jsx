import React from "react";

export default function FormSelect({ label, name, options, defaultValue, onChange, size }) {
        return (
                <div className="form-control">
                        <label className="label mb-2" htmlFor={name}>
                                <span className="label-text capitalize text-lg text-primary">{label}</span>
                        </label>
                        <select
                                name={name}
                                id={name}
                                defaultValue={defaultValue}
                                onChange={onChange}
                                className={`select select-bordered w-full h-12 text-md rounded-1xl text-lg ${size}`}
                        >
                                {options.map((option) => {
                                        return (
                                                <option key={option} value={option}>
                                                        {option}
                                                </option>
                                        );
                                })}
                        </select>
                </div>
        );
}
