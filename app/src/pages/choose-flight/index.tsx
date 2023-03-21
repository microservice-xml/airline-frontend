import React from "react";
import { useEffect, useState } from "react";
import SearchResult from "../../components/SearchResult";
import SearchSort from "../../components/SearchSort";
import TicketCard from "../../components/TicketCard";
import "./index.scss"
import { useLocation } from "react-router-dom";

const ChooseFlight = () => {

    const location = useLocation();


    const data = location.state?.data;
    const dataSeats = location.state?.dataSeats;


    const renderTickets = () => {
        let result = [];
        console.log(data);

        if (!data || data.length === 0) {
            return <p style={{fontSize: '3rem'}}>There are no flights available for your input.</p>
        }

        for (let item of data) {
            result.push(<TicketCard key={item.arrivalCity + item.departureCity + item.arrival} arrivalCity={item.arrivalCity} departureCity={item.departureCity} arrival={item.arrival} departure={item.departure} ticketPrice={item.ticketPrice} dataSeats={dataSeats} />)
        }
        console.log(result);
        return result;
    }

    return (
        <div className="flights-container">
            <div>

            </div>
            <div className="flights-container__search-result">
                <SearchResult arrivalCity={'London'} departureCity={'Belgrade'} arrival={new Date('2023-01-23')} departure={new Date('2023-01-23')}></SearchResult>
            </div>
            <div className="flights-container__sort">
                <SearchSort></SearchSort>
                <SearchSort></SearchSort>
                <SearchSort></SearchSort>
            </div>
            <div className="flights-container__card">
                {renderTickets()}
            </div>
        </div>
    );
}

export default ChooseFlight;