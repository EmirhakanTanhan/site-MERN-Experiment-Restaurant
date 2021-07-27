import {useState, useEffect} from "react";
import RestaurantDataService from "../Services/Restaurant";
import {Link} from "react-router-dom";

const RestaurantsList = props => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [searchZip, setSearchZip] = useState("");
    const [searchCuisine, setSearchCuisine] = useState("");
    const [cuisines, setCuisines] = useState("All Cuisines");

    useEffect(() => {
        retrieveRestaurants();
        retrieveCuisines();
    }, []);

    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const onChangeZipName = e => {
        const searchZip = e.target.value;
        setSearchName(searchZip);
    };

    const onChangeCuisineName = e => {
        const searchCuisine = e.target.value;
        setSearchName(searchCuisine);
    };

    const retrieveRestaurants = () => {
        RestaurantDataService.getAll()
            .then(response => {
                console.log(response.data);
                setRestaurants(response.data.restaurants);
            })
            .catch(e => {
                console.log(e)
            });
    };

    const retrieveCuisines = () => {
        RestaurantDataService.getCuisines()
            .then(response => {
                console.log(response.data);
                setCuisines(["All Cuisines"].concat(response.data));
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveRestaurants();
    };

    return (
        <div className="App">
            Hello World
        </div>
    );
}

export default RestaurantsList;