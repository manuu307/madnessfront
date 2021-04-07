import React, {useState} from 'react'
import { Promos, Blog, Banner, OnlineWkout } from '../components'

const Home = () => {


  return (
    <>
      <Banner  title="Entrena con las mejores" text="Entrenamiento femenino en su máxima expresión!"/>
      <Promos/>
      <OnlineWkout />
      <Blog />
    </>
  )
}

export default Home;