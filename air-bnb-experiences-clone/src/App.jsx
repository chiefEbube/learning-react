import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import HeroSection from './components/HeroSection'
import Card from './components/Card'
import katieZaferes from './assets/images/katie-zaferes.png'

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Card
        img={katieZaferes}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136} />
    </>
  )
}

export default App
