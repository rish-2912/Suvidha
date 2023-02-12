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
        window.location.reload()
    }
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate('/news')
    }
    const { loading, authenticate, error, successMessage, myInfo } = useSelector(state => state.auth)

    return (
        <Box className='ok' style={{ boxShadow: '0 5px 10px -10px', position: 'fixed', width: '100%', zIndex: '1000', top: '0', background: 'white' }}>
            <Nav>
                <Typography style={{ fontSize: '1.5rem', marginTop:'5px' }}>
                    <img src="/images/Suvidhaa_logo.png" alt="" style={{width:"100px"}} />
                    {/* SUVIDHA */}
                </Typography>
                <Box style={{ marginLeft: '10px' }}>
                    {myInfo.role === 'ngo' ? <>
                    <div style={{marginLeft: "340px", marginRight: "297px",marginTop:"8px"}}>

                        <NavButtons><Link to='/'>     <Button style={{ color: 'black',fontWeight: 500}} >Home</Button></Link></NavButtons>
                        <NavButtons ><EventModal /></NavButtons>
                        <NavButtons><DonationModal /></NavButtons>

                       
                        <NavButtons><Link to='/news'><Button style={{ color: 'black',fontWeight: 500}} >News</Button></Link></NavButtons>
                        </div>
                       




                    </> : <>
                    <div style={{marginLeft:'400px',marginRight:'300px',marginTop:"8px"}}>
                        <NavButtons><Link to='/'><Button  style={{ color: 'black',fontWeight: 500}}>
            Home
          </Button></Link></NavButtons>
                        <NavButtons><Link to='/moreevent'><Button  style={{ color: 'black',fontWeight: 500}}>
            Event and Donation
          </Button></Link></NavButtons>
                        

                        <NavButtons ><Link to='/news'><Button  style={{ color: 'black',fontWeight: 500}}>
            News
          </Button></Link></NavButtons>
         
                        </div>
                       


                    </>
                    }



                </Box>
                {!authenticate && <NavButtons><Link to='/login'><Button  variant="contained" color="primary">
            Login/Signup
          </Button></Link></NavButtons>}
               
                {authenticate && <><NavButtons onClick={handleClick}><Button  variant="contained" color="primary">
            Logout
          </Button></NavButtons> </>}
               

            </Nav>
        </Box>
    )
}

export default Navbar