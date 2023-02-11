import React, { useState,useEffect } from 'react'

import { Box, Button, Typography } from '@mui/material'
import { getAllEvents } from '../../functions/eventFunctions'

import { Link } from 'react-router-dom'
import demo from '../../assets/demo.png'

const items = [
    {
        "id": '1',
        "img": '',
        "title": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "name": 'Rishabh Foundation',
        "participant": '46',
        "category": 'animal'
    },
    {
        "id": '1',
        "img": '',
        "title": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "name": 'Rishabh Foundation',
        "participant": '46',
        "category": 'animal'
    },
    {
        "id": '1',
        "img": '',
        "title": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "name": 'Rishabh Foundation',
        "participant": '46',
        "category": 'animal'
    },
    {
        "id": '1',
        "img": '',
        "title": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "name": 'Rishabh Foundation',
        "participant": '46',
        "category": 'animal'
    },
    {
        "id": '1',
        "img": '',
        "title": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "name": 'Rishabh Foundation',
        "participant": '46',
        "category": 'animal'
    },
    {
        "id": '1',
        "img": '',
        "title": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "name": 'Rishabh Foundation',
        "participant": '46',
        "category": 'animal'
    },
]







const DetailItems = ({ item }) => {

    
    


    return (
        <>
            {  item && item.map((item) => {
                const percentage = `${((Number(item.raised)) / Number((+item.needed))) * 100}%`
                console.log(percentage)
                return (
                    <Box style={{ width: '31%', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '8px', boxShadow: '0px 5px 10px -5px', marginBottom: '16px' }}>
                        <img src={"/images/"+ item.image} style={{ height: '200px' }} />
                        <Box style={{ padding: '20px',width:"100%" }}>
                            <Box >
                                <Typography style={{ fontFamily: 'inherit', fontWeight: '600' }}>{item.name}</Typography>
                                <Typography style={{ fontFamily: 'inherit', fontSize: '14px', color: 'rgba(0,0,0,.3)', marginTop: '12px' }}>{item.CreatedBy?.userName}</Typography>
                            </Box>
                            <Box style={{ marginTop: '12px' }}>
                                <Typography style={{ fontFamily: 'inherit', textAlign: 'center', fontWeight: 'bold', fontSize: '15px' }}>{item.Attendees.length} Attendees</Typography>
                            </Box>
                            <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
                                <Button variant='outlined' style={{ fontFamily: 'inherit', width: '49%' }}>Share</Button>
                                <Link to={"eventdetail/"+item._id}> <Button variant='contained' style={{ fontFamily: 'inherit', width: '49%', background: 'linear-gradient(to bottom right, #7C65D8, #20B9CC)' }}>Join</Button></Link>
                            </Box>
                        </Box>
                    </Box>
                )
            })}
        </>
    )
}

export default DetailItems