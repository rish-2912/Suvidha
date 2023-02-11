import ArrowForward from '@mui/icons-material/ArrowForward'
import Search from '@mui/icons-material/Search'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BasicTabs from './Category'
import Items from './Items'

const Categories = () => {
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate('/morecategory')
        window.scrollTo(0, 0);
    }
    return (
        <div style={{ marginTop: '50px' }}>
            <Box style={{ maxWidth: '1140px', margin: 'auto' }}>
                <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Box style={{ display: 'flex' }}>
                        <span style={{ height: '24px', width: '4px', background: 'rgb(69, 165, 255)' }}></span>
                        <Typography style={{ font: 'inherit', paddingLeft: '10px' }}>Categories</Typography>
                    </Box>
                    <Box style={{ display: 'flex' }}>
                        <Button style={{ font: 'inherit', fontWeight: '600', color: 'rgb(69, 165, 255)', fontSize: '15px' }}>View All Campaigns<ArrowForward style={{ margin: 'auto', color: 'rgb(69, 165, 255)', fontSize: '18px' }} /></Button>

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

export default Categories