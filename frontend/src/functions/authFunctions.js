import { BASE_URL } from "."


const headers={
    "Content-type":"application/json"
}


export const userRegister =async(body)=>{
    // pass arguments
    // userName, email, password, confirmPassword
    
    try {
        
        const response = axios.post(BASE_URL + "/user/register",body,{headers})

        return response

    } catch (error) {

        console.log(error)

    }
}

export const userLogin =async(body)=>{
    // pass arguments
    // email,password
    try {
        
        const response = axios.post(BASE_URL + "/user/login" ,body,{headers})

        return response

    } catch (error) {

        console.log(error)

    }
}

