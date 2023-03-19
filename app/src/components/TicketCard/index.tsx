import React from "react";
import "./index.scss";
import Moment from "react-moment";

type Props = {
    arrivalCity: string;
    departureCity: string;
    arrival: Date;
    departure: Date;
    ticketPrice: number;
    dataSeats: number;
}

const TicketCard = ({ arrivalCity, departureCity, arrival, departure, ticketPrice, dataSeats }: Props) => {

    return (
        <div className="card">
            <div className="card__top">
                <div className="card__top__icon">
                </div>
                <div className="card_top__field">
                    <div className="card__top__field__title">
                        Greener Choice
                    </div>
                    <div className="card__top__field__text">
                        This flight emits 27% less CO₂ than the average for your search
                    </div>
                </div>
            </div>
            <div className="card__bottom">
                <div className="card__bottom__left">
                    <div className="card__bottom__left__from">
                        {departureCity}
                        -
                        <Moment format="h:mm:ss a">{departure}</Moment>
                    </div>
                    <div className="card__bottom__left__icon">

                    </div>
                    <div className="card__bottom__left__to">
                        {arrivalCity}
                        -
                        <Moment format="h:mm:ss a">{arrival}</Moment>
                    </div>
                </div>
                <div className="card__bottom__right">
                    <div className="card__bottom__right__price">
                        ${ticketPrice}
                    </div>
                    <div className="card__bottom__right__total-price">
                        ${ticketPrice * dataSeats}
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