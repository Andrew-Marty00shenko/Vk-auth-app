import React from 'react';
import './Header.css';

const Header = ({ userName, lastName }) => {
    return <div className="header">
        <h1>Vkontakte auhtorization</h1>
        <li>{userName} {lastName}</li>
    </div>
}

export default Header;