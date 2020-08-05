import React from 'react';
import './Login.css';

const Login = ({ handleClick, isLoggedIn }) => {

    return (
        <>{
            isLoggedIn
                ?
                null
                :
                <button onClick={handleClick}>authorize</button>
        }
        </>
    )
}

export default Login;