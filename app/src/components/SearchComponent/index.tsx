import React from "react";
import cities from "../../constants/Cities";
import "./index.scss"
import CustomAutocomplete from "../FormComponents/CustomAutocomplete";
import CustomDateRangePicker from "../FormComponents/CustomDateRangePicker";

const SearchComponent = () => {

    const handleClickDate = () => {

    }

    

    return (
        <div className="search-container">
        <div className="search">
            <div className="search__title">
                <h1> Quickly scan all your favourite travel sites </h1>
            </div>
            <div className="search__container">
                <div className="search__container-inputs">
                    <CustomAutocomplete cities={cities} label={'From'} customClass={"search__container-inputs--textbox input-rounded-left grow"}/>
                    <CustomAutocomplete cities={cities} label={'To'} customClass={"search__container-inputs--textbox grow"}/>
                    <CustomDateRangePicker label={'Depart'} helperText={'DD/MM/YYYY'}/>
                    <CustomDateRangePicker label={'Return'} helperText={'DD/MM/YYYY'}/>
                    <input type="text" className="search__container-inputs--textbox input-rounded-right"></input>
                </div>
                <button className="search__container-button">Search</button>
            </div>
        </div>
        </div>
    );
}

export default SearchComponent;