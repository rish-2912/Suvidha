import React from 'react'
import Items from '../items/Items'
import Search from '../items/Search'
import DonationModal from '../Modals/DonationModal'
import EventModal from '../Modals/EventModal'
import Header from './Header'
import Navbar from './Navbar'

const Landing = () => {
    

    return (
        <div>
            <Navbar />
            <div >
                Donate
            </div>
            <DonationModal />
            <EventModal />
            <div style={{
                marginTop: '46.5px'
            }}>
                <Header />
                <Items />
                <div style={{ width: '768px', height: '45px', boxShadow: '0 5px 10px -5px', borderRadius: '12px', textAlign: 'center', margin: '2rem auto', position: 'relative', zIndex: '100', background: 'white', border: '1px solid green' }}>
                    <Search style={{}} />
                </div>
            </div>
        </div>
    )
}

export default Landing