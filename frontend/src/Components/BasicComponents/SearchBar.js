import React from 'react';
import "./SearchBar.css";

const SearchBar = ({placeHolder, inputValue, onChange, onClick}) => {
    return (
        <div className="search-bar">
            <input type="text" className="input-form" placeholder={placeHolder} value={inputValue} onChange={onChange}/>
            <div className="input-button">
                <button className="green-button-outline" type="button" onClick={onClick}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;