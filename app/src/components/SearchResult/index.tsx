import React from "react";
import "./index.scss"

type Props = {
    arrivalCity: string;
    departureCity: string;
    arrival: Date;
    departure: Date;
}

const SearchResult = ({ arrivalCity, departureCity, arrival, departure }: Props) => {
    console.log(departure);
    return (

        <div className="search-result">
            <div className="search-result__icon">

            </div>
            <div className="search-result__destination">
                {departureCity}
                -
                {arrivalCity}
            </div>
            <div className="search-result__dateFrom">
                Fri, 20 Mar
            </div>
            <div className="search-result__dateTo">
                Mon, 27 Mar
            </div>
        </div >
    );
}

export default SearchResult;