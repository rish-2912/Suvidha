import { ERROR_CLEAR, REGISTER_FAIL,REGISTER_SUCCESS, SUCESS_MESSAGE_CLEAR, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from "../type/authType";
import tokenDecode from 'jwt-decode'

const authState={
    loading:true,
    authenticate:false,
    error:'',
    successMessage:'',
    myInfo:''


}



const tokenDecoded=(token)=>{
    const tokenDecoded=tokenDecode(token)
    const expTime=new Date(tokenDecoded.exp*1000)
    if(new Date()>expTime){
        return null
    }
    return tokenDecoded

}

const getToken=localStorage.getItem('authToken');
if(getToken){
    const getInfo=tokenDecoded(getToken)
    if(getInfo){
        authState.myInfo=getInfo;
        authState.authenticate=true;
        authState.loading=false;
    }
}



export const authReducer=(state=authState,action)=>{
    
    const {payload,type}=action;
    if(type===REGISTER_FAIL ||type===USER_LOGIN_FAIL){
        return {
            ...state,
            error:payload.error,
            authenticate:false,
            myInfo:'',
            loading:true
        }
    }

    if(type===REGISTER_SUCCESS||type===USER_LOGIN_SUCCESS){
        const myInfo=tokenDecoded(payload.token)
        return{
            ...state,
            myInfo,
            successMessage:payload.successMessage,
            error:'',
            authenticate:true,
            loading:false


        }

    }

    if(type==='LOGOUT'){
        return {
            ...state,
            state:payload.state
        }
    }
    if(type===SUCESS_MESSAGE_CLEAR){
        return {
            ...state,
            successMessage:''
        }
    }
    if(type===ERROR_CLEAR){
        return {
            ...state,
            error:''
        }
    }




    return state;
}