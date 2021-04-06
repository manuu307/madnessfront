import React, {useState} from 'react'
import { Navbar, Sidebar, Promos, Blog, Banner, OnlineWkout } from '../components'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <Banner  title="Entrena con las mejores" text="Entrenamiento femenino en su máxima expresión!"/>
        <Promos/>
        <OnlineWkout />
        <Blog />
      </>
    </>
  )
}

export default Home;