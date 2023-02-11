import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import styled from '@emotion/styled'
const Head = styled(Box)(({ theme }) => ({
    position: 'relative;',
    top: '46.5px;',
    height: 'calc(100vh - 46.5px)',
    display: 'flex;',
    justifyContent: 'center;',
    alignItems: 'center;',
}))
const Header = () => {
    return (
        <Head>Header</Head>
    )
}

export default Header