import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar';
import EventModal from '../Modals/EventModal';
import DonationModal from '../Modals/DonationModal';

const Nav = styled(Box)(({ theme }) => ({
    display: 'flex',
    padding: '5px 20px'
}))
const NavButtons = styled(Button)(({ theme }) => ({
    color: 'black',
    fontFamily: 'Poppins'
}))





const Navbar = () => {

    const dispatch = useDispatch()
    const state = {
        loading: true,
        authenticate: false,
        error: '',
        successMessage: '',
        myInfo: ''
    }

    const handleClick = (e) => {
        e.preventDefault()
        localStorage.clear()
        dispatch({ type: 'LOGOUT', payload: state })
    }
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate('/news')
    }
    const { loading, authenticate, error, successMessage, myInfo } = useSelector(state => state.auth)

    return (
        <Box className='ok' style={{ boxShadow: '0 5px 10px -10px', position: 'fixed', width: '100%', zIndex: '1000', top: '0', background: 'white' }}>
            <Nav>
                <Typography style={{ fontSize: '1.5rem' }}>FundMe</Typography>
                <Box style={{ marginLeft: '10px' }}>
                    {myInfo.role === 'ngo' ? <>

                        <NavButtons><Link to='/'>Home</Link></NavButtons>
                        <NavButtons ><EventModal /></NavButtons>
                        <NavButtons><DonationModal /></NavButtons>

                        <NavButtons><Link to='/myevent'>My Event</Link></NavButtons>
                        <NavButtons><Link to='/news'>News</Link></NavButtons>
                        {!authenticate && <NavButtons><Link to='/login'>Login/Signup</Link></NavButtons>}




                    </> : <>
                        <NavButtons><Link to='/'>Home</Link></NavButtons>
                        <NavButtons><Link to='/eventPage'>Event and Donation</Link></NavButtons>
                        <NavButtons><Link to='/contact-Us'>Contact us</Link></NavButtons>

                        <NavButtons><Link to='/news'>News</Link></NavButtons>
                        {!authenticate && <NavButtons><Link to='/login'>Login/Signup</Link></NavButtons>}


                    </>
                    }



                </Box>
                {authenticate && <><Avatar alt="Remy Sharp" src={`/images/${myInfo.image}`} /><p style={{ display: 'flex', alignItems: "center" }}>{myInfo.userName}</p> </>}
                {authenticate && <><NavButtons onClick={handleClick}>Logout</NavButtons> </>}

            </Nav>
        </Box>
    )
}

export default Navbar