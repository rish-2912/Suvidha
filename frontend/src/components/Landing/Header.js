import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import styled from '@emotion/styled'
import jumbo from '../../assets/header3.png'
const Head = styled(Box)(({ theme }) => ({
    height: '108vh',
    display: 'flex;',
    justifyContent: 'center',
    alignItems: 'center',
    // background: 'red',
    cursor: "default"
}))

const Header = () => {
    return (
        <Head>
            <img src={jumbo} style={{ cursor: "default" }}></img>
        </Head>
    )
}

export default Header