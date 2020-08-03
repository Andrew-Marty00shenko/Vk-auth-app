import React, { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Route, useParams, useLocation } from 'react-router-dom'
import Profile from './components/Profile/Profile'
import Axios from 'axios'

const App = () => {
  let location = useLocation();

  console.log(location.hash.slice(14, 99))

  useEffect(() => {
    Axios.get(`https://api.vk.com/method/friends.search?access_token=${location.hash.slice(14, 99)}&v=5.52`)
      .then(res => {
        console.log(res)
      })
  }
    , [])

  return (
    <div className="app">
      <Header />
      <Route path="/profile" component={Profile} />
    </div>
  )
}

export default App;