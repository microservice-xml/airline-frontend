import React from "react";
import "./index.scss";
import Moment from "react-moment";
import City from "../../model/City";


type Props = {
    arrivalCity: City;
    departureCity: City;
    arrival: Date;
    departure: Date;
    ticketPrice: number;
    dataSeats: number;
}

const TicketCard = ({ arrivalCity, departureCity, arrival, departure, ticketPrice, dataSeats }: Props) => {

    const getRandomNumber = () => {
        const i = Math.random() * 10;
        return i >= 1 && i <= 4;
    }

    const getRandomValue = () => {
        return Math.round(Math.random() * 100 * 0.5)
    }

    return (
        <div className="card">
            {getRandomNumber() && <div className="card__top">
                <div className="card__top__icon">
                </div>
                <div className="card_top__field">
                    <div className="card__top__field__title">
                        Greener Choice
                    </div>
                    <div className="card__top__field__text">
                        This flight emits {getRandomValue()}% less CO₂ than the average for your search
                    </div>
                </div>
            </div>}
            <div className="card__bottom">
                <div className="card__bottom__left">
                    <div className="card__bottom__left__from">
                        <div className="city">
                            <div className="city__name">
                                {departureCity.name}
                            </div>
                            <div className="city__airport">
                                {departureCity.airport} ({departureCity.iata_code})
                            </div>
                        </div>
                        <span className="time"><Moment format="hh:mm a" className="time">{departure}</Moment></span>
                    </div>
                    <div className="card__bottom__left__icon">
                        <div className="card__bottom__left__icon--icon"></div>
                    </div>
                    <div className="card__bottom__left__to">
                        <div className="city">
                            <div className="city__name">
                                {arrivalCity.name}
                            </div>
                            <div className="city__airport">
                                {arrivalCity.airport} ({arrivalCity.iata_code})
                            </div>
                        </div>
                        <span className="time"><Moment format="hh:mm a" className="time" style={{ color: '#444444', fontWeight: '550' }}>{arrival}</Moment></span>
                    </div>
                </div>
                <div className="card__bottom__right">
                    <div className="card__bottom__right__price">
                        ${ticketPrice * dataSeats}
                    </div>
                    <div className="card__bottom__right__total-price">
                        ${ticketPrice} per person
                    </div>
                    <div className="card__bottom__right__button-position">
                        <button className="card__bottom__right__button-style">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicketCard;