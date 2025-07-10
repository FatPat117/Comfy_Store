import React from "react";
import { useLoaderData } from "react-router-dom";

export default function PaginationContainer() {
        const { meta } = useLoaderData();
        const { pageCount, page: currentPage } = meta.pagination;
        const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

        if (pageCount < 2) return null;

        const handlePageChange = (page) => {
                console.log(page);
        };

        return (
                <div>
                        <div className="mt-12 flex items-center justify-end">
                                <div className="join">
                                        <button
                                                className="btn btn-xs md:btn-md join-item"
                                                onClick={() => handlePageChange(currentPage - 1)}
                                        >
                                                Prev
                                        </button>
                                        {pages.map((pageNumber) => (
                                                <button
                                                        key={pageNumber}
                                                        className={`join-item btn btn-xs sm:btn-md ${
                                                                pageNumber === currentPage
                                                                        ? "btn-active bg-base-300 border-gray-300 rounded-md"
                                                                        : ""
                                                        }`}
                                                        onClick={() => handlePageChange(pageNumber)}
                                                >
                                                        {pageNumber}
                                                </button>
                                        ))}
                                        <button
                                                className="btn btn-xs md:btn-md join-item"
                                                onClick={() => handlePageChange(currentPage + 1)}
                                        >
                                                Next
                                        </button>
                                </div>
                        </div>
                </div>
        );
}
