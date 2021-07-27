import {Link, NavLink} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="brand" to="/">
                <h2>Restaurant Reviews</h2>
            </Link>
            <div className="links">
                <NavLink activeClassName="nav-active" to="/restaurants">Restaurants</NavLink>
                <NavLink activeClassName="nav-active" to="/login">Login</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;