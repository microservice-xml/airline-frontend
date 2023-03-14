import React from "react";
import "./index.scss"

const SearchComponent = () => {

    const handleClickDate = () => {

    }

    return (
        <div className="search">
            <div className="search__title">
                <h1> Quickly scan all your favourite travel sites </h1>
            </div>
            <div className="search__container">
                <input type="text" className="search__container-textbox"></input>
                <input type="text" className="search__container-textbox"></input>
                <input type="text" className="search__container-textbox" onClick={handleClickDate}></input>
                <input type="text" className="search__container-textbox"></input>
                <input type="text" className="search__container-textbox"></input>
                <button className="search__container-button">Search</button>
            </div>
        </div>
    );
}

export default SearchComponent;