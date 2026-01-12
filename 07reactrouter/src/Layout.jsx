import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
 
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>

    
    
  )
}

export default Layout