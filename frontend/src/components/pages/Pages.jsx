import React from "react"
import Header from "../common/header/Header"
import {

  Routes,
  Route,

} from 'react-router-dom';
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"

import Blog from "../blog/Blog"

import Contact from "../contact/Contact"
import Login from "../Login/Login"
import Signup from "../Signup/Signup"
import Landing from "../Landing/Landing";

import Navbar from "../Landing/Navbar";
import DetailCategories from "../categories/DetailCategories";
import DetailEvents from "../events/DetailEvents";
import DonateDetail from "../DonateDetail/DonateDetails";
import EventDetail from "../EventDetail/EventDetail";

const Pages = () => {





  return (
    <>
      <Navbar />
      <Routes>
        {/* <Header /> */}

        <Route exact path='/' element={<Landing />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/Signup' element={<Signup />} />
        <Route exact path='/eventdetail' element={<EventDetail />} />
        <Route exact path='/morecategory' element={<DetailCategories />} />
        <Route exact path='/moreevent' element={<DetailEvents />} />

        <Route exact path='/donatedetail/:id' element={<DonateDetail/>}/>
          <Route exact path='/eventdetail/:id' element={<EventDetail/>}/>
        {/* <Route exact path='/about' component={About} />
       
          <Route exact path='/' element={<Landing/>} />
          
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/Signup' element={<Signup/>} />
          <Route exact path='/donatedetail/:id' element={<DonateDetail/>}/>
          <Route exact path='/eventdetail/:id' element={<EventDetail/>}/>




          {/* <Route exact path='/about' component={About} />
          
          <Route exact path='/blog' component={Blog} />
          
          <Route exact path='/contact' component={Contact} /> */}

      </Routes >
    </>
  )
}

export default Pages
