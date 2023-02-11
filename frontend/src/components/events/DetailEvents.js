import React from 'react'
import Footer from '../footer/Footer'
import Search from '../items/Search'
import Event from './DetailCategory'
import FadeMenu from './DropEvent'
import Items from './Items'
import DetailItems from './DetailItems'
const DetailEvents = () => {
    return (
        <>
            <div style={{ width: '1140px', margin: 'auto', marginTop: '46.5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5rem', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <div style={{ width: '768px', height: '45px', boxShadow: '0 5px 10px -5px', borderRadius: '12px', textAlign: 'center', position: 'relative', zIndex: '100', background: 'white', border: '1px solid blue', margin: 'auto 1rem' }}>
                        <Search style={{}} />
                    </div>
                    <FadeMenu />
                </div>
                <div style={{ marginTop: '3rem' }}><Event /></div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '2rem' }}>
                    <DetailItems />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DetailEvents