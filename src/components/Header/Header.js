import React from 'react';
import './Header.css';
import Auth from '../Auth/Auth';

const Header = () => {
    return (
        <div className="header" >
            <h1>Vk authorization</h1>
            <Auth />
        </div>
    )
}

export default Header;