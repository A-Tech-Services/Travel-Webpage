import "./NavBarStyle.css";
import React, { useState} from "react";
import {Link} from "react-router-dom";


const NavBar = () =>{
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }

    return(
        <div className="NavBarItems">
            <Link to="/"><h1 className="navbar-logo">Trippy</h1></Link>

            <div className="menuMobile-icon" onClick={handleClick}>
                {
                    clicked? (<i className="fas fa-times"/>) : (<i className="fas fa-bars"/>)
                }
            </div>

            <ul className={clicked? "navbar-menu active" : "navbar-menu"}>
                <li><Link className="navbar-link" to="/">
                    <i class="fa-solid fa-house-user"></i> Home
                </Link></li>

                <li><Link className="navbar-link" to="/about">
                    <i class="fa-solid fa-circle-info"></i> About
                </Link></li>

                <li><Link className="navbar-link" to="/service">
                    <i class="fa-solid fa-briefcase"></i> Service
                </Link></li>

                <li><Link className="navbar-link" to="/contact">
                    <i class="fa-solid fa-address-book"></i> Contact
                </Link></li>

                <Link className="signupbtn" to="/signup">
                    <button><i class="fa-solid fa-user-plus"></i> Sign Up</button>
                </Link>
            </ul>
        </div>
    )
}

export default NavBar;