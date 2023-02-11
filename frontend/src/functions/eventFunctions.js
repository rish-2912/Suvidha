import { BASE_URL } from "."
import axios from "axios"

// const headers={
//     "Content-type":"application/json"
// }

export const getAllEvents=async()=>{
    try {
        
        const response = await axios.get(BASE_URL+"/event/AllEvents")

        return response

    } catch (error) {
        
        console.log(error)

    }
}

export const getMyEvents=async(id)=>{
    
    try {
        
        const response = axios.get(BASE_URL + "/event/MyEvents" + id)

        return response
        
    } catch (error) {

        console.log(error)

    }
}

export const CreateEvent =async(body)=>{
    // pass arguments
    // name,
    // description,
    // address,
    // user,
    // Link,
    // StartDate,
    // EndDate
    
    try {
        
        const response = axios.post(BASE_URL + "/event/CreateEvent",body)

        return response

    } catch (error) {

        console.log(error)

    }
}

export const AttendEvent =async(idofevent,body)=>{
    // pass arguments
    // _id of event 
    
    try {
        
        const response = axios.post(BASE_URL + "/event/AttendEvent" + idofevent ,body)

        return response

    } catch (error) {

        console.log(error)

    }
}

export const UpdateEvent =async(body)=>{
    // pass any argument in body to change
    try {
        
        const response = axios.post(BASE_URL + "/event/UpdateEvent",body)

        return response

    } catch (error) {

        console.log(error)

    }
}