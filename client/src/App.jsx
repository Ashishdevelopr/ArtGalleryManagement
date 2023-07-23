import React from 'react'
import './App.css'
import Form from './components/Form'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
      <div className="layout">
        <Form />
      </div>
      <footer className='footer'><a href='https://github.com/Ashishdevelopr' className='footer-link' target='_blank'>Crafted with passion by  <span className='footer-span'><i className="fa-brands fa-github"></i></span> Ashish Developer</a></footer>
    </>
  )
}

export default App
