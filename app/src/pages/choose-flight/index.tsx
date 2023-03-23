import React from "react";
import { useEffect, useState } from "react";
import SearchResult from "../../components/SearchResult";
import SearchSort from "../../components/SearchSort";
import TicketCard from "../../components/TicketCard";
import "./index.scss"
import { useLocation } from "react-router-dom";
import { searchFlights } from "../../services/search/searchService";
import SearchItem from "../../model/search/SearchResult";

const ChooseFlight = () => {

    const location = useLocation();
    const [searchResults, setSearchResults] = useState<SearchItem[]>([]);

    const data = location.state?.data;
    let temp = true;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let response = await searchFlights(data)
        setSearchResults(response.data as SearchItem[])
    }

    const renderTickets = () => {
        let result = [];

        if (!searchResults || searchResults.length === 0) {
            temp = false;
            return (
                <div className="noFlights-container">
                    <div className="noFlights-container__text">
                        Sorry, there are no flights available for your input.
                    </div>
                    <div className="noFlights-container__image">
                    </div>
                </div>
            );
        }

        for (let item of searchResults) {
            result.push(<TicketCard key={item.arrivalCity + item.departureCity + item.arrival} arrivalCity={item.arrivalCity} departureCity={item.departureCity} arrival={item.arrival} departure={item.departure} ticketPrice={item.ticketPrice} dataSeats={item.desiredSeats} />)
        }
        return result;
    }

    if (temp === Boolean(true)) {
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

    } else {
        return (
            <div className="flights-container">
                <div>
                </div>
                <div className="flights-container__search-result">
                    <SearchResult arrivalCity={'London'} departureCity={'Belgrade'} arrival={new Date('2023-01-23')} departure={new Date('2023-01-23')}></SearchResult>
                </div>
            </div>
        );
    }
}

export default ChooseFlight;