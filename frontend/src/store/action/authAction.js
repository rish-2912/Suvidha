import axios from 'axios';
import { REGISTER_FAIL,REGISTER_SUCCESS,USER_LOGIN_FAIL,USER_LOGIN_SUCCESS } from '../type/authType';
export const userRegister=(data)=>async(dispatch)=>{
  
   
   try{
    const response=await axios.post('/api/messenger/user-register',data)
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
  
   
  try{

   const response=await axios.post('/api/messenger/user-login',data)
    localStorage.setItem('authToken',response.data.token)

    dispatch({
     type:USER_LOGIN_SUCCESS,
     payload:{
       successMessage:response.data.successMessage,
       token:response.data.token
     }
    })
    
  }catch(error){
   dispatch({
     type:USER_LOGIN_FAIL,
     payload:{
       error:error.response.data.error.errorMessage
     }
   })

  }
  
}