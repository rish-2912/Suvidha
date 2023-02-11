import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import styled from '@emotion/styled'
const Nav = styled(Box)(({ theme }) => ({
    display: 'flex',
    padding: '5px 20px'
}))
const NavButtons = styled(Button)(({ theme }) => ({
    color: 'black',
    fontFamily: 'Poppins'
}))
const Navbar = () => {
    return (
        <Box className='ok' style={{ boxShadow: '0 5px 10px -10px', position: 'fixed', width: '100%', zIndex: '1000', top: '0', background: 'white' }}>
            <Nav>
                <Typography style={{ fontSize: '1.5rem' }}>FundMe</Typography>
                <Box style={{ marginLeft: '10px' }}>
                    <NavButtons>Explore Campaigns</NavButtons>
                    <NavButtons>Request A Campaign</NavButtons>
                    <NavButtons>How it works</NavButtons>
                </Box>
                <NavButtons style={{ position: 'relative', right: '0', marginLeft: 'auto' }}>Join us/Login</NavButtons>
            </Nav>
        </Box>
    )
}

export default Navbar