import React from "react"
import Header from "../common/header/Header"
import {

  Routes,
  Route,

} from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"


import Contact from "../contact/Contact"
import Login from "../Login/Login"
import Signup from "../Signup/Signup"
import Landing from "../Landing/Landing";

import Navbar from "../Landing/Navbar";
import DetailCategories from "../categories/DetailCategories";
import DetailEvents from "../events/DetailEvents";
import DonateDetail from "../DonateDetail/DonateDetails";
import EventDetail from "../EventDetail/EventDetail";
import News from "../news/News";
import NewsCard from "../news/NewsCard";
import ChatFeed from "../Chat/ChatFeed";
import { useSelector } from "react-redux";
import { CHAT_SECRET } from "../../App";

const Pages = () => {


  const { myInfo } = useSelector(state => state.auth)



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
        <Route exact path='/news' element={<News />} />
        <Route exact path='/news/:category' element={<NewsCard />} />

        <Route exact path='/donatedetail/:id' element={<DonateDetail />} />
        <Route exact path='/eventdetail/:id' element={<EventDetail />} />
        {/* <Route exact path='/about' component={About} />
       
       <Route exact path='/' element={<Landing/>} />
       
       <Route exact path='/login' element={<Login/>} />
       <Route exact path='/Signup' element={<Signup/>} />
       <Route exact path='/donatedetail/:id' element={<DonateDetail/>}/>
       <Route exact path='/eventdetail/:id' element={<EventDetail/>}/>
       
       
       
       
       {/* <Route exact path='/about' component={About} />
       
       <Route exact path='/blog' component={Blog} />
       
      <Route exact path='/contact' component={Contact} /> */}
        <Route exact path='/Chat' element={
          <div style={{ paddingTop: "58.5px" }}>
            <ChatEngine
              height="100vh"
              projectID="24aa43c0-8d60-4618-af47-b82fbe6a820f"
              userName={myInfo.userName}
              userSecret={CHAT_SECRET}
              renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
              onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            />
          </div>
        } />

      </Routes >
    </>
  )
}

export default Pages
