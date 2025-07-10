import React from "react";
import { useLoaderData, useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function PaginationContainer() {
        const { meta } = useLoaderData();
        const { pageCount, page: currentPage } = meta.pagination;
        const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

        const { search, pathname } = useLocation();

        const navigate = useNavigate();

        const [searchParams, setSearchParams] = useSearchParams();

        if (pageCount < 2) return null;

        const handlePageChange = (page) => {
                const searchParams = new URLSearchParams(search);
                searchParams.set("page", page);
                navigate(`${pathname}?${searchParams.toString()}`);
        };

        return (
                <div>
                        <div className="mt-12 flex items-center justify-end">
                                <div className="join">
                                        <button
                                                className="btn btn-xs md:btn-md join-item"
                                                onClick={() => {
                                                        let prevPage = currentPage - 1;
                                                        if (prevPage < 1) prevPage = pageCount;
                                                        handlePageChange(prevPage);
                                                }}
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
                                                onClick={() => {
                                                        let nextPage = currentPage + 1;
                                                        if (nextPage > pageCount) nextPage = 1;
                                                        handlePageChange(nextPage);
                                                }}
                                        >
                                                Next
                                        </button>
                                </div>
                        </div>
                </div>
        );
}
