import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul className="navbar">
            <NavLink to="/profile">
                <li>Profile</li>
            </NavLink>
            <NavLink to="/friends">
                <li>Friends</li>
            </NavLink>
        </ul >
    )
}

export default Navbar;