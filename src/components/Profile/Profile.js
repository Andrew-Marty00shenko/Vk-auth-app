import React from 'react';
import './Profile.css';
import { Redirect } from 'react-router-dom';

const Profile = ({ userName, lastName, isLoggedIn }) => {

    if (!isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <div className="profile">
            <span>Full name:</span>    {userName} {lastName}
        </div>
    )
}

export default Profile;