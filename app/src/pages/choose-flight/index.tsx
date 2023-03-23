import React from "react";
import { useEffect, useState } from "react";
import SearchResult from "../../components/SearchResult";
import TicketCard from "../../components/TicketCard";
import "./index.scss"
import { useLocation } from "react-router-dom";
import { searchFlights } from "../../services/search/searchService";
import SearchItem from "../../model/search/SearchResult";

const ChooseFlight = () => {

    const location = useLocation();
    const [searchResults, setSearchResults] = useState<SearchItem[]>([]);

    const data = location.state?.data;


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
            result.push(<TicketCard key={item.id} arrivalCity={item.route.arrivalCity.name} departureCity={item.route.departureCity.name} arrival={item.route.arrival} departure={item.route.departure} ticketPrice={item.ticketPrice} dataSeats={data.desiredSeats} />)
        }
        return result;
    }

    return (
        <div className="flights-container">
            <div>
            </div>
            <div className="flights-container__search-result">
                <SearchResult arrivalCity={data.arrivalCity} departureCity={data.departureCity} arrival={data.arrival} departure={data.departure}></SearchResult>
            </div>
            <div className="flights-container__card">
                {renderTickets()}
            </div>
        </div>
    );

}

export default ChooseFlight;