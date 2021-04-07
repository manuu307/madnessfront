import React,{useState} from 'react'
import Home from './Pages/index'
import OnlineService from './Pages/Onlineservice'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar} from './components/index'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
      setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/onlineservice' component={OnlineService} exact/>
      </Switch>
    </Router>
  )
}

export default App

