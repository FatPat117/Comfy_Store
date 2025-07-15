import React from "react";
import { useLoaderData, useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function ComplexPagination() {
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

        const addPageButton = ({ pageNumber, active }) => {
                return (
                        <button
                                key={pageNumber}
                                className={`join-item btn btn-xs sm:btn-md ${
                                        active ? "btn-active bg-base-300 border-gray-300 rounded-md" : ""
                                }`}
                                onClick={() => handlePageChange(pageNumber)}
                        >
                                {pageNumber}
                        </button>
                );
        };

        const renderBaseButtons = () => {
                const pageButtons = [];

                //first buttons
                pageButtons.push(addPageButton({ pageNumber: 1, active: currentPage === 1 }));

                // dots
                if (currentPage > 2)
                        pageButtons.push(
                                <button key="dot-1" className={`join-item btn btn-xs sm:btn-md`}>
                                        ...
                                </button>
                        );

                // middle buttons
                if (currentPage !== 1 && currentPage !== pageCount)
                        pageButtons.push(addPageButton({ pageNumber: currentPage, active: true }));

                // dots
                if (currentPage < pageCount - 1) {
                        pageButtons.push(
                                <button key="dot-1" className={`join-item btn btn-xs sm:btn-md`}>
                                        ...
                                </button>
                        );
                }
                // last button
                pageButtons.push(addPageButton({ pageNumber: pageCount, active: currentPage === pageCount }));

                return pageButtons;
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
                                        {renderBaseButtons()}
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
