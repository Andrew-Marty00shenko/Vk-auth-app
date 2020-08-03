import React from 'react';
import './Auth.css';

//ID приложения	7555300
// Защищённый ключ	
// Nuzb5iE7QhIkaJXA9Ery

// Сервисный ключ доступа	
// f9596ee5f9596ee5f9596ee553f92a2601ff959f9596ee5a67df92a2c7ceb68fcae8b17


const Auth = () => {

    return (
        <>
            <a href="https://oauth.vk.com/authorize?client_id=7557636&display=page&redirect_uri=http://localhost:3000&scope=friends&response_type=token&v=5.52">Авторизоваться</a>
            {/* https://oauth.vk.com/blank.html#access_token=aa58790e18d5d3aacf848a9c657184a2173c002a71665903d8075ad8d4529e6201e883f60fdc9389abd87&expires_in=86400&user_id=139033082 */}
        </>
    )
}

export default Auth;