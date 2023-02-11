import { Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import animal from '../../assets/animal.png'
import crowd from '../../assets/crowd.png'
import environment from '../../assets/environment.png'
import industry from '../../assets/industry.png'
import mental from '../../assets/mental.png'
import people from '../../assets/people.png'
import ngo from '../../assets/ngo.png'
import woman from '../../assets/woman.png'
import social from '../../assets/social.png'
import Footer from '../footer/Footer'
const categories = [
    {
        "url": `${animal}`,
        "name": 'Animals'
    },
    {
        "url": `${crowd}`,
        "name": 'Crowdfunding'
    },
    {
        "url": `${environment}`,
        "name": 'Environment'
    },
    {
        "url": `${industry}`,
        "name": 'Industry'
    },
    {
        "url": `${mental}`,
        "name": 'Mental Health'
    },
    {
        "url": `${people}`,
        "name": 'People'
    },
    {
        "url": `${ngo}`,
        "name": 'NGO stories'
    },
    {
        "url": `${woman}`,
        "name": 'Women'
    },
    {
        "url": `${social}`,
        "name": 'Social Good'
    },
]
const News = () => {
    const navigate = useNavigate()
    const clickHandler = (name) => {
        navigate(`/news/${name}`)
    }
    return (
        <>
            <div style={{ width: '800px', margin: '0 auto' }}>
                <div style={{ marginTop: '3rem', }}>
                    <Typography style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBotton: '15px' }}>Categories</Typography>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {
                        categories.map(category => {
                            return (
                                <div style={{ height: '205px', borderRadius: '12px', border: '1px solid black', width: '32%', marginBottom: '15px', cursor: 'pointer', backgroundImage: `url(${category.url})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} onClick={() => clickHandler(category.name)}>
                                    <Typography style={{ margin: '150px auto 0 auto', width: 'fit-content', fontSize: '1.5rem', color: 'black', fontFamily: 'Poppins', fontWeight: '600' }}>{category.name}</Typography>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default News