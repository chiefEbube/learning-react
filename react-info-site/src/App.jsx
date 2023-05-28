import React from 'react'
import NavBar from "./components/NavBar";
import MainContent from './components/MainContent';


export default function App() {
  return (
    <div className='container'>
      <NavBar />
      <MainContent />
    </div>
  )
}