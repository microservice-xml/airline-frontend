import React from "react";
import "./index.scss";

const TicketCard = () => {
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
                        16:00h
                    </div>
                    <div className="card__bottom__left__icon">

                    </div>
                    <div className="card__bottom__left__to">
                        20:00h
                    </div>
                </div>
                <div className="card__bottom__right">
                    <div className="card__bottom__right__price">
                        $72
                    </div>
                    <div className="card__bottom__right__total-price">
                        $144
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