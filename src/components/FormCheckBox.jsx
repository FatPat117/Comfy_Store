import React from "react";

export default function FormCheckBox({ label, name, size, defaultChecked }) {
        return (
                <div className="form-control item-center grid grid-cols-1 justify-items-center gap-y-2">
                        <label htmlFor={name} className="label cursor-pointer text-primary">
                                <span className="label-text">{label}</span>
                        </label>
                        <input
                                type="checkbox"
                                name={name}
                                id={name}
                                className={`checkbox checkbox-primary ${size}`}
                                defaultChecked={defaultChecked}
                        />
                </div>
        );
}
