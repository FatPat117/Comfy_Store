import React from "react";

export default function FormInput({ label, type, placeholder, name, defaultValue, onChange }) {
        return (
                <div className="form-control ">
                        <label className="label mb-2 ">
                                <span className="label-text capitalize text-lg text-primary">{label}</span>
                        </label>
                        <input
                                type={type}
                                name={name}
                                defaultValue={defaultValue}
                                placeholder={placeholder}
                                onChange={onChange}
                                className="block input input-bordered w-full h-12 text-md rounded-1xl text-lg"
                        />
                </div>
        );
}
