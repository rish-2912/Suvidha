import React, { useState,useEffect } from "react";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userLogin } from "../../store/action/authAction";
import { ERROR_CLEAR, SUCESS_MESSAGE_CLEAR } from "../../store/type/authType";
import './Login.css'
import { useAlert } from "react-alert";

const Login=()=>{

   
    const dispatch= useDispatch()
 const {loading,authenticate,error,successMessage,myInfo}=useSelector(state=>state.auth) 
 
 const navigate=useNavigate() 
 const [state,setState]=useState({
  email:'',
  password:''
 })

 const handleChange=(e)=>{
  setState({...state,
    [e.target.name]:e.target.value
  })
 }

 const login=(e)=>{
  e.preventDefault()
  dispatch(userLogin(state))

 }

 useEffect(()=>{
    if(authenticate){
      navigate('/')
    }
    if(successMessage){
     
      dispatch({type:SUCESS_MESSAGE_CLEAR})
    }
    if(error){
     
      dispatch({type:ERROR_CLEAR})
    }
  // eslint-disable-next-line
  },[successMessage,error]) 

    const paperStyle={padding :20,height:'70vh',width:500, margin:"100px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={login}>
                <TextField name="email" onChange={handleChange} className="form-field form-username" variant='outlined' label='Email' placeholder='Enter email' fullWidth required/>
                <TextField name="password" onChange={handleChange} className="form-field" variant='outlined' label='Password' placeholder='Enter password' type='password' fullWidth required/>
          
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Login</Button>
                </form>
                <Typography > Do you have an account ?
                    <Link href="/signup" >
                        Sign Up 
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login