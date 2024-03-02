import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Header from '../../Component/Header/Header'
import Feature from '../../Component/Feature/Feature'

import './Home.css'
import Perproties from '../../Component/Perproties/Perproties'
import FeatureProties from '../../Component/Featurproties/FeatureProties'
import Maillist from '../../Component/Maillist/Maillist'
import Footer from '../../Component/Footer/Footer'
const Home = () => {
  return (
    <div>
     <Navbar/>
     <Header/>
     <div className="homecontiner">
      <Feature/>
      <h1 className='homeTitle'>Browse by property type </h1>
      <Perproties/>
      <h1 className='homeTitle'>Homes guests love </h1>
      <FeatureProties/>
      <Maillist/>
      <Footer/>
     </div>
    </div>
  )
}

export default Home