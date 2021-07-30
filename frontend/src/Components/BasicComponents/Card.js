import React from 'react';
import {Link} from "react-router-dom";
import "./Card.css";

const Card = (prop) => {
    /*const address = `${prop.address.building} ${prop.address.street}, ${prop.address.zipcode}`;*/
    return (
        <div className="card">
            <div className="title">
                {prop.name}
            </div>
            <div className="details">
                <div className="cuisine"><strong>Cuisine: </strong> {prop.cuisine}</div>
                <div className="address"><strong>Address: </strong>{prop.address}</div>
            </div>
            <div className="buttons">
                    <Link to={"/restaurants/"+prop._id}>View Reviews</Link>
                    <a target="_blank" href={"https://www.google.com/maps/place/" + prop.address}>View Map</a>
            </div>
        </div>
    );
};

export default Card;