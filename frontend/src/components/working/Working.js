import { Box, Typography } from '@mui/material'
import React from 'react'

const Working = () => {
    return (
        <div style={{ maxWidth: '1140px', margin: 'auto', marginTop: '3rem' }}>
            <Box style={{ display: 'flex' }}>
                <span style={{ height: '24px', width: '4px', background: 'rgb(69, 165, 255)' }}></span>
                <Typography style={{ font: 'inherit', paddingLeft: '10px' }}>How it works?</Typography>
            </Box>
        </div>
    )
}

export default Working