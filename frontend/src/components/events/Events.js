import ArrowForward from '@mui/icons-material/ArrowForward'
import Search from '@mui/icons-material/Search'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import BasicTabs from './Event'
import Items from './Items'
import { useNavigate } from 'react-router-dom'
const Events = () => {
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate('/moreevent')
        window.scrollTo(0, 0);
    }
    return (
        <div style={{ marginTop: '50px' }}>
            <Box style={{ maxWidth: '1140px', margin: 'auto' }}>
                <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box style={{ display: 'flex' }}>
                        <span style={{ height: '24px', width: '4px', background: 'rgb(69, 165, 255)' }}></span>
                        <Typography style={{ font: 'inherit', paddingLeft: '10px' }}>Events</Typography>
                    </Box>
                    <Box style={{ display: 'flex' }}>
                        <Button style={{ font: 'inherit', fontWeight: '600', color: 'rgb(69, 165, 255)', fontSize: '15px' }}>View All Events<ArrowForward style={{ margin: 'auto', color: 'rgb(69, 165, 255)', fontSize: '18px' }} /></Button>

                    </Box>
                </Box>
                <Box>
                    <BasicTabs />
                </Box>

            </Box>
            <div style={{ background: '#eafaff', padding: '16px 0' }}>
                <Box style={{ maxWidth: '1140px', margin: 'auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <Items />
                </Box>
                <Box style={{ maxWidth: '1140px', margin: 'auto', textAlign: 'center' }}>
                    <Button variant='outlined' style={{ color: 'linear-gradient(45deg,orange,red)' }} onClick={clickHandler}>View More</Button>
                </Box>
            </div>

        </div>
    )
}

export default Events