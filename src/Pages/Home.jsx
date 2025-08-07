import React from 'react'
import Navbar from '../Components/Navbar'
import Head from '../Components/Head'
import Body from '../Components/Body'
import Portfolio from '../Components/Portfolio'
import Foot from '../Components/Foot'

const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Head/>
      <Body/>
      <Portfolio/>
      <Foot/>
    </div>
  )
}

export default Home
