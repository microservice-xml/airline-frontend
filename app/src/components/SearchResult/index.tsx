import React from "react";
import "./index.scss"
import Moment from 'react-moment';


type Props = {
    arrivalCity: string;
    departureCity: string;
    arrival: Date;
    departure: Date;
}

const SearchResult = ({ arrivalCity, departureCity, arrival, departure }: Props) => {

    const dateToFormat = '1976-04-19T12:59-0500';

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
                <Moment format="MMM Do YY">{departure}</Moment>
            </div>
            <div className="search-result__dateTo">
                <Moment format="MMM Do YY">{arrival}</Moment>
            </div>
        </div >
    );
}

export default SearchResult;