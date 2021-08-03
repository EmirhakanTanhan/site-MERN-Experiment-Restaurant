import React from 'react';
import "./DropdownSearchBar.css";

const DropdownSearchBar = ({optionValue, onChange, onClick}) => {
    return (
        <div className="dropdown-search-bar">
            <select className="input-form" onChange={onChange}>
                {optionValue.map((value) => (
                    <option value={value}> {value.substr(0, 20)} </option>
                ))}
            </select>
            <div className="input-button">
                <button className="green-button-outline" type="button" onClick={onClick}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default DropdownSearchBar;