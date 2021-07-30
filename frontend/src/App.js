import React from "react";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Doc/Navbar";
import AddReview from "./Components/AddReview";
import Restaurants from "./Components/Restaurants";
import RestaurantsList from "./Components/RestaurantsList";
import Login from "./Components/Login";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <RestaurantsList/>
            </div>
        </Router>

    );
}

export default App;
