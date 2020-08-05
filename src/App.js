import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Route, useHistory } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';

const App = () => {
    const [userName, setUserName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [friends, setFriends] = useState([]);
    const [loader, setLoader] = useState(false);
    const history = useHistory();

    useEffect(() => {
        //eslint-disable-next-line no-undef
        VK.Auth.getLoginStatus(res => {
            if (res.status === 'connected') {
                if (typeof (res.session.user) == 'undefined') {
                    //eslint-disable-next-line no-undef
                    VK.Api.call(
                        'users.get',
                        { uid: res.session.mid, v: '5.80' },
                        r => {
                            setUserName(r.response[0].first_name);
                            setLastName(r.response[0].last_name);
                            setIsLoggedIn(true);
                            loadFriends();
                            history.push("/profile");
                        }
                    )
                }
            }

        })
    }, [history]);

    const handleClick = useCallback(() => {
        //eslint-disable-next-line no-undef
        return VK.Auth.login(res => {
            if (res.session) {
                const username = res.session.user.first_name;
                const lastname = res.session.user.last_name;
                // localStorage.setItem("token");
                setUserName(username);
                setLastName(lastname);
                setIsLoggedIn(true);
                loadFriends();
                history.push("/profile");
            }
        }, 3);
    }, [history]);

    const loadFriends = () => {
        setLoader(true);
        //eslint-disable-next-line no-undef
        VK.Api.call(
            'friends.search',
            { count: 5, fields: " photo_100", v: '5.80' },
            res => {
                setFriends(res.response.items);
                setLoader(false);
            }
        )
    }

    return (
        <div className="app">
            <Header
                userName={userName}
                lastName={lastName}
            />
            <div className="app-wrapper">
                <Navbar />
                <Route path="/" render={() => <Login
                    handleClick={handleClick}
                    isLoggedIn={isLoggedIn}
                />} />
                <Route path="/profile" render={() => <Profile
                    isLoggedIn={isLoggedIn}
                    userName={userName}
                    lastName={lastName}
                />} />
                <Route path="/friends" render={() => <Friends
                    friends={friends}
                    loader={loader}
                    isLoggedIn={isLoggedIn}
                />} />
            </div>
        </div>
    )
}

export default App;