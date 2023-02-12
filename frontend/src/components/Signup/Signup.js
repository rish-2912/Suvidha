import React, { useState,useEffect} from "react";

import { Link,useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import { userRegister } from "../../store/action/authAction";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@material-ui/core";
import "./Signup.css";
import { useAlert } from "react-alert";

import { ERROR_CLEAR, SUCESS_MESSAGE_CLEAR } from "../../store/type/authType";
import { AddUser } from "../Chat/chatFunctions";
import { CHAT_SECRET } from "../../App";
const Signup = () => {


    const navigate=useNavigate()
// eslint-disable-next-line

 


  const dispatch=useDispatch()
  const {loading,authenticate,error,successMessage,myInfo}=useSelector(state=>state.auth) 

  const [state,setState]=useState({
    userName:'',
    email:'',
    password:'',
    confirmPassword:'',
    role:'',
    image:'',
   
  })
  
const [loadImage,setLoadImage]=useState('')

  const handleChange=(e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value

    })
   
  }

  const fileHandle=(e)=>{
    if(e.target.files.length!==0){
      setState({
        ...state,
        [e.target.name]:e.target.files[0]
      })
    }
    const reader=new FileReader();
    reader.onload=()=>{
      setLoadImage(reader.result)
    }
    reader.readAsDataURL(e.target.files[0]);
   

  }

  const register= (e)=>{
    const {userName,email,password,confirmPassword,image,role}=state
    e.preventDefault();
    const formData=new FormData();
    formData.append('userName',userName);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('confirmPassword',confirmPassword);
    formData.append('role',role)
    formData.append('image',image);

    dispatch(userRegister(formData));

    const body={
      "username":userName,
      "email":email,
      "secret":CHAT_SECRET
    }

    AddUser(body)
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





  const paperStyle = { padding: "30px 20px", width: 500, margin: "100px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const roles = [
    {
      value: "NGO",
    },
    {
      value: "User",
    },
  ];

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={register}>
          <TextField 
          name="userName"
            size="small"
            className="form-field"
            fullWidth
            variant="outlined"
            label="Name"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          <TextField
          name="email"
            size="small"
            className="form-field"
            fullWidth
            variant="outlined"
            label="Email"
            placeholder="Enter your email"
            onChange={handleChange}
          />

          <TextField
          name="password"
            size="small"
            type="password"
            className="form-field"
            fullWidth
            variant="outlined"
            label="Password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <TextField
          name="confirmPassword"
          type="password"
            size="small"
            className="form-field"
            fullWidth
            variant="outlined"
            label="Confirm Password"
            placeholder="Confirm your password"
            onChange={handleChange}
          />
          {/* <TextField
          
            className="form-field"
            fullWidth
            id="outlined-select-roles"
            select
            label="Select Role"
            onChange={handleChange}
           
          >
            {roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField> */}

          <TextField
          name="role"
            size="small"
            className="form-field"
            fullWidth
            variant="outlined"
            label="role"
            placeholder="Enter your role"
            onChange={handleChange}
          />





          <input
          name="image"
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        onChange={fileHandle}
        
        
      />
      <label htmlFor="select-image">
        <Button style={{display:'flex',justifyContent:"center"}}  className="form-field" variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>
      <br></br>





          <Button style={{display:'flex',justifyContent:"center" ,width:'100%'}} type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
