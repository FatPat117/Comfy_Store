import React from "react";

export default function FormInput({ label, type, placeholder, name, defaultValue, onChange }) {
        return (
                <div className="form-control w-full max-w-xs">
                        <label htmlFor={name} className="label">
                                <span className="label-text">{label}</span>
                        </label>
                        <input
                                type={type}
                                placeholder={placeholder}
                                className="input input-bordered w-full"
                                name={name}
                                defaultValue={defaultValue}
                                onChange={onChange}
                        />
                </div>
        );
}
