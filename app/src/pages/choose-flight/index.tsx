import React from "react";
import SearchResult from "../../components/SearchResult";
import SearchSort from "../../components/SearchSort";
import TicketCard from "../../components/TicketCard";
import "./index.scss"
import { useLocation } from "react-router-dom";

const ChooseFlight = () => {

    const location = useLocation();

    const data = location.state?.data;

    console.log(data);
    console.log((data as any)[0].route.arrivalCity);

    const arrivalCity = (data as any)[0].route.arrivalCity;
    const departureCity = (data as any)[0].route.departureCity;
    const arrival = (data as any)[0].route.arrival;
    const departure = (data as any)[0].route.departure;


    return (
        <div className="flights-container">
            <div>

            </div>
            <div className="flights-container__search-result">
                <SearchResult arrivalCity={arrivalCity} departureCity={departureCity} arrival={arrival} departure={departure}></SearchResult>
            </div>
            <div className="flights-container__sort">
                <SearchSort></SearchSort>
                <SearchSort></SearchSort>
                <SearchSort></SearchSort>
            </div>
            <div className="flights-container__card">
                <TicketCard></TicketCard>
                <TicketCard></TicketCard>
                <TicketCard></TicketCard>
            </div>
        </div>
    );
}

export default ChooseFlight;