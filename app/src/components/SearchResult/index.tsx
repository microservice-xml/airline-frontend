import React from "react";
import "./index.scss"

const SearchResult = () => {
    return (
        <div className="search-result">
            <div className="search-result__icon">

            </div>
            <div className="search-result__destination">
                <label>Belgrade</label>
                <label>-</label>
                <label>London</label>
            </div>
            <div className="search-result__dateFrom">
                <label>Mon, 20 Mar</label>
            </div>
            <div className="search-result__dateTo">
                <label>Mon, 27 Mar</label>
            </div>
        </div >
    );
}

export default SearchResult;