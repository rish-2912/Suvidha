import axios from 'axios';
import { REGISTER_FAIL,REGISTER_SUCCESS,USER_LOGIN_FAIL,USER_LOGIN_SUCCESS } from "../../store/type/authType";
 const BASE_URL="http://localhost:5000"
export const userRegister=(data)=>async(dispatch)=>{
  
   
   try{
    const response=await axios.post(BASE_URL+'/user/register',data)
     localStorage.setItem('authToken',response.data.token)

     dispatch({
      type:REGISTER_SUCCESS,
      payload:{
        successMessage:response.data.successMessage,
        token:response.data.token
      }
     })
     
   }catch(error){
    dispatch({
      type:REGISTER_FAIL,
      payload:{
        error:error.response.data.error.errorMessage
      }
    })

   }
   
}


export const userLogin=(data)=>async(dispatch)=>{
  
  console.log(data)
   
  try{

   const response=await axios.post(BASE_URL+'/user/login',data)
    localStorage.setItem('authToken',response.data.token)

    dispatch({
     type:USER_LOGIN_SUCCESS,
     payload:{
       successMessage:response?.data?.successMessage,
       token:response?.data?.token
     }
    })
    
  }catch(error){
   dispatch({
     type:USER_LOGIN_FAIL,
     payload:{
       error:error?.response?.data?.error?.errorMessage
     }
   })

  }
  
}