import React from "react";

export default function SectionTitle({ title, style }) {
        return (
                <div className="border-b-[5px] border-base-300 pb-5 mt-5 px-5">
                        <h2 className={`text-4xl capitalize font-semibold tracking-wide ${style}`}>{title}</h2>
                </div>
        );
}
