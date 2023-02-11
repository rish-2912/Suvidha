import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import styled from '@emotion/styled'
const Head = styled(Box)(({ theme }) => ({
    height: '108vh',
    display: 'flex;',
    justifyContent: 'center;',
    alignItems: 'center;',
    background: 'red'
}))
const Header = () => {
    return (
        <Head>Header</Head>
    )
}

export default Header