import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Work from './components/Work'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Map from './components/Map'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div id='home'>
          <Home/>
        </div>
        <div id='services'>
          <Services/>
        </div>
        <div id='work'>
          <Work/>
        </div>
        <div id='skills'>
          <Skills/>
        </div>
        <div id='testimonials'>
          <Testimonials/>
        </div>
        <div id='map'>
          <Map/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App

