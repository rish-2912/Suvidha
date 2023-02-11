import { InputBase } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
const InputSearchBase = styled(InputBase)`
    width:100%;
    font-family:inherit;


`
const SearchIconWrapper = styled(Box)`
    color:black;
    
`
const Search = ({handleChange}) => {
    return (
        <Box style={{ display: 'flex', marginTop: '6px' }}>
            <InputSearchBase placeholder='Search for Events, Donations' style={{ marginLeft: '2%' }} onChange={handleChange}/>
            <SearchIconWrapper>
                <SearchIcon style={{ paddingTop: '4.5px' }} />
            </SearchIconWrapper>
        </Box>
    )
}

export default Search