import React from 'react'
import Home from './Pages/index'
import OnlineService from './Pages/Onlineservice'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/onlineservice' component={OnlineService} exact/>
      </Switch>
    </Router>
  )
}

export default App

