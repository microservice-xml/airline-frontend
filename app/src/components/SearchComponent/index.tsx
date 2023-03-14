import React from "react";
import "./index.scss"

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
                    <input type="text" className="search__container-inputs--textbox input-rounded-left grow"></input>
                    <input type="text" className="search__container-inputs--textbox"></input>
                    <input type="text" className="search__container-inputs--textbox" onClick={handleClickDate}></input>
                    <input type="text" className="search__container-inputs--textbox"></input>
                    <input type="text" className="search__container-inputs--textbox input-rounded-right"></input>
                </div>
                <button className="search__container-button">Search</button>
            </div>
        </div>
        </div>
    );
}

export default SearchComponent;