import React from 'react'
import Categories from '../categories/Categories'
import Events from '../events/Events'
import Items from '../items/Items'
import Search from '../items/Search'
import Working from '../working/Working'
import DonationModal from '../Modals/DonationModal'
import EventModal from '../Modals/EventModal'
import Header from './Header'
import Navbar from './Navbar'
import Footer from '../footer/Footer'
import Contact from '../contact/Contact'

const Landing = () => {


    return (
        <div>
            <Navbar />
          
       
            <div style={{
                marginTop: '46.5px'
            }}>
                <Header />
                <Items />
                {/* <div style={{ width: '768px', height: '45px', boxShadow: '0 5px 10px -5px', borderRadius: '12px', textAlign: 'center', margin: '2rem auto', position: 'relative', zIndex: '100', background: 'white', border: '1px solid blue' }}>
                    <Search style={{}} />
                </div> */}
                <Categories />
                <Events />
                {/* <Working /> */}
            </div>
            {/* <Contact /> */}
            <Footer />
        </div>
    )
}

export default Landing