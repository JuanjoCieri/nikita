import React from "react";

export default function Paginated ({
    ProductsPerPage,
    productState,
    nextPag,
    prevPag,
    CurrentPag,
    firstPag,
    lastPag,
}) {
    return (
        <nav className="flex w-96">
            <button className="w-full px-4 border-t border-b border-l text-base rounded-l-xl font-semibold text-white bg-fuchsia-500" onClick={firstPag}>First Page</button>
            <button className="w-full px-4 py-2 border-t border-b text-base text-white font-semibold bg-fuchsia-500" disabled={CurrentPag === 1} onClick={prevPag}>Prev</button>
            <button className="w-full px-4 py-2 border-t border-b text-base text-white font-semibold bg-fuchsia-500">{CurrentPag}</button>
            <button className="w-full px-4 py-2 border-t border-b text-base text-white font-semibold bg-fuchsia-500" disabled={CurrentPag === Math.ceil(productState / ProductsPerPage)} onClick={nextPag}>Next</button>
            <button className="w-full px-4 border-t border-b border-r text-base font-semibold rounded-r-xl text-white bg-fuchsia-500" onClick={lastPag}>Last Page</button>
        </nav>
    )
}