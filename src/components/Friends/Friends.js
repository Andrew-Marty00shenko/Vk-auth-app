import React from 'react';
import './Friends.css';
import { Redirect } from 'react-router-dom';

const Friends = ({ friends, loader, isLoggedIn }) => {

    if (!isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <>
            {loader ? <div>Loading...</div> : null}
            <ul className="friends-list">
                {friends ? friends.map(f => {
                    return <li key={f.id}>
                        <img src={f.photo_100} alt="ava" />
                        <span> {f.first_name} {f.last_name}</span>
                    </li>
                }) : null}
            </ul>

        </>
    )
}

export default Friends;