import React from 'react'
import { useNavigate } from 'react-router-dom'
import { InitiateChat } from './chatFunctions'

const ChatMain = () => {

    const navigate = useNavigate()
    
    if(!localStorage.getItem("chat_username")){
        InitiateChat()
    }
    navigate("/Chat")
    // else{
    // }
}

export default ChatMain