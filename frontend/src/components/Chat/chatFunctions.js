import { CHAT_SECRET } from "../../App";
import axios from "axios"

export const AddUser=async(body)=>{
    try {
        
        // let data = {
        //     "username": "bob_baker",
        //     "secret": "secret-123-jBj02",
        //     "email": "b_baker@mail.com",
        //     "first_name": "Bob",
        //     "last_name": "Baker",
        // }
    
          
        let headers={
            'PRIVATE-KEY': 'dd3b28a1-d9df-458b-a29f-d024f092137d'
        }
    
        const response = await axios.post("https://api.chatengine.io/users/", body,{headers})

        return response;

    } catch (error) {
        
        console.log(error)
    
    }
}

export const CreateChat=async(body,headers)=>{
    try {
        
        // const body={
        //     "title": "Surprise Party",
        //     "is_direct_chat": false
        // }
        
        // const authObject = { 
        //     'Project-ID': '24aa43c0-8d60-4618-af47-b82fbe6a820f', 
        //     'User-Name': username, 
        //     'User-Secret': password,
        // };
    
        const response = await axios.post("https://api.chatengine.io/chats/", body,{headers})

        console.log("created chat",response)
        
        return response;

    } catch (error) {
        
        console.log(error)
    
    }
}

export const GetLatestChat=async(headers)=>{
    try {
        
        // const body={
        //     "title": "Surprise Party",
        //     "is_direct_chat": false
        // }
        
        // const authObject = { 
        //     'Project-ID': '24aa43c0-8d60-4618-af47-b82fbe6a820f', 
        //     'User-Name': username, 
        //     'User-Secret': password,
        // };
    
        const response = await axios.get("https://api.chatengine.io/chats/latest/1/",{headers})

        console.log("latest chat",response)

        return response;

    } catch (error) {
        
        console.log(error)
    
    }
}

export const InitiateChat = async (username) => {
    

    const authObject = { 
      'Project-ID': '24aa43c0-8d60-4618-af47-b82fbe6a820f', 
      'User-Name': username, 
      'User-Secret': CHAT_SECRET,
    };

    try {
      
      const chats = await axios.get('https://api.chatengine.io/chats', { headers: authObject });
      console.log(chats)

      localStorage.setItem('chat_username', username);
      localStorage.setItem('chat_password', CHAT_SECRET);

      window.location.reload();
    } catch (err) {
      console.log(err)
    }
};



