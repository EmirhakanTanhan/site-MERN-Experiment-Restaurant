import {useState, useEffect} from "react";
import "./RestaurantsList.css"
import RestaurantDataService from "../Services/Restaurant";
import Card from "./BasicComponents/Card";
import SearchBar from "./BasicComponents/SearchBar";
import DropdownSearchBar from "./BasicComponents/DropdownSearchBar";

const RestaurantsList = props => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [searchZip, setSearchZip] = useState("");
    const [searchCuisine, setSearchCuisine] = useState("");
    const [cuisines, setCuisines] = useState(["All Cuisines"]);

    useEffect(() => {
        retrieveRestaurants();
        retrieveCuisines();
    }, []);

    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const onChangeSearchZip = e => {
        const searchZip = e.target.value;
        setSearchZip(searchZip);
    };

    const onChangeSearchCuisine = e => {
        const searchCuisine = e.target.value;
        setSearchCuisine(searchCuisine);
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

    const find = (query, by) => {
        RestaurantDataService.find(query, by)
            .then(response => {
                console.log(response.data);
                setRestaurants(response.data.restaurants);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByName = () => {
        find(searchName, "name");
    };

    const findByZip = () => {
        find(searchZip, "zipcode");
    };

    const findByCuisine = () => {
        if (searchCuisine === "All Cuisines") {
            refreshList();
        } else {
            find(searchCuisine, "cuisine");
        }
    };


    return (
        <div className="restaurants-list">
            <div className="search-area">
                <SearchBar placeHolder={"Search by name"} inputValue={searchName} onChange={onChangeSearchName} onClick={findByName}/>
                <SearchBar placeHolder={"Search by zip"} inputValue={searchZip} onChange={onChangeSearchZip} onClick={findByZip}/>
                <DropdownSearchBar optionValue={cuisines} onChange={onChangeSearchCuisine} onClick={findByCuisine}/>
            </div>
            <div className="card-area">
                <div className="cards">
                    {restaurants.map((restaurant) => (
                        <Card data={restaurant}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RestaurantsList;