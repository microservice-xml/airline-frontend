import React from "react";
import SearchResult from "../../components/SearchResult";
import SearchSort from "../../components/SearchSort";
import TicketCard from "../../components/TicketCard";
import "./index.scss"

const ChooseFlight = () => {
    return (
        <div className="flights-container">
            <div className="flights-container__search-result">
                <SearchResult></SearchResult>
            </div>
            <div className="flights-container__sort">
                <SearchSort></SearchSort>
                <SearchSort></SearchSort>
                <SearchSort></SearchSort>
            </div>
            <div className="flights-container__card">
                <TicketCard></TicketCard>
            </div>
        </div>
    );
}

export default ChooseFlight;