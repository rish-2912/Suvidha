import { BASE_URL } from "."
import axios from "axios"

// const headers={
//     "Content-type":"application/json"
// }

export const getAllDonations=async()=>{
    try {
        
        const response = await axios.get(BASE_URL+"/donation/AllDonations")

        return response

    } catch (error) {
        
        console.log(error)

    }
}

export const getMyDonations=async(id)=>{
    //_id of user pass as id
    try {
        
        const response = axios.get(BASE_URL + "/donation/MyDonations" + id)

        return response
        
    } catch (error) {

        console.log(error)

    }
}

export const CreateDonation =async(body)=>{
    // pass arguments
    // name,
    // description,
    // targetAmount,
    // user,
    // EventId,
    // hasEvent
    
    try {
        
        const response = axios.post(BASE_URL + "/donation/CreateDonation",body)

        return response

    } catch (error) {

        console.log(error)

    }
}

export const AddDonation =async(body)=>{
    // pass arguments
    // Amount,
    // _id of donation
    const {myid}=body
    console.log(myid)
    console.log(body)
    
    try {
        
        const response = axios.post(BASE_URL + `/donation/AddDonation/${myid}` ,body)

        return response

    } catch (error) {

        console.log(error)

    }
}

export const UpdateDonation =async(body)=>{
    // pass any argument in body to change
    try {
        
        const response = axios.post(BASE_URL + "/donation/UpdateDonation",body)

        return response

    } catch (error) {

        console.log(error)

    }
}