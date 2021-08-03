import React from 'react';
import {Link} from "react-router-dom";
import "./Card.css";

const Card = ({data}) => {
    const address = `${data.address.building} ${data.address.street}, ${data.address.zipcode}`;
    return (
        <div className="card">
            <div className="title">
                {data.name}
            </div>
            <div className="details">
                <div className="cuisine" title={data.cuisine}><strong>Cuisine: </strong> {data.cuisine}</div>
                <div className="address" title={address}><strong>Address: </strong>{address}</div>
            </div>
            <div className="buttons">
                    <Link to={"/restaurants/"+data._id}>View Reviews</Link>
                    <a target="_blank" href={"https://www.google.com/maps/place/" + address}>View Map</a>
            </div>
        </div>
    );
};

export default Card;