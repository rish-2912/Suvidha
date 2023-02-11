import React,{useState,useEffect} from 'react'
import { Grid, Typography } from "@mui/material"; // Grid version 1
import { CircularProgressbar } from "react-circular-progressbar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "react-circular-progressbar/dist/styles.css";
import "../DonateDetail/Event.css";
import Icon from "../DonateDetail/Icon";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate, useParams } from 'react-router';
import { getAllEvents } from '../../functions/eventFunctions'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChatMain from '../Chat/ChatMain';
import { InitiateChat } from '../Chat/chatFunctions';
import "../../App.css"
import { useSelector } from 'react-redux';
import { CHAT_SECRET } from '../../App';
import axios from "axios"


const EventDetail = () => {
    const { id } = useParams()
    const [item, setitem] = useState([])

    const navigate = useNavigate()

    const { myInfo } = useSelector(state=>state.auth)

    const fetchEvent=async()=>{
        const x = await getAllEvents()
        if(x?.data?.success){
            console.log(x)
            
            setitem(x.data.data.find(x=>x._id===id))
        }
    }

    useEffect(() => {
        fetchEvent()
    }, [])

    const AddMemberToChat=async ()=>{
      const headers={
        'Project-ID': '24aa43c0-8d60-4618-af47-b82fbe6a820f', 
        'User-Name': item.CreatedBy.userName, 
        'User-Secret': CHAT_SECRET,
      }
      const body ={
        "username": myInfo.userName
      }
      const response = await axios.post(`https://api.chatengine.io/chats/${item.Link}/people/`,body,{headers})
      
      console.log(response)

    }

    const handleChat = () =>{
      if( myInfo.id !== item.CreatedBy ){
        AddMemberToChat()
      }
      // if(!localStorage.getItem("chat_username")){
      InitiateChat()
      // }
      navigate("/Chat")
    }

console.log(item)

  return (
    <div className="event-container">
      <Grid container spacing={2}>
        <Grid xs={8}>
        <img src={"/images/"+item?.image} className="event-image"/>
        </Grid>
        <Grid xs={4}>
        <Typography variant="h5" component="h5">
        {item && item.name}
 
        </Typography>

          <div className="event-tags">
            <Stack spacing={1} alignItems="start">
              <Stack direction="row" spacing={1}>
                <Chip label="Tax benifit" color="success" />
                <Chip label="Assured" color="success" />
                <Chip label={item.category} color="success" />
              </Stack>
            </Stack>
          </div>
          <div
            className="event container"
            style={{ display: "flex", margin: "20px 0px 0px" }}
          >
            <div></div>
          </div>

          <p>
      {item.description}
          </p>

          <Box
            style={{ display: "flex", marginBottom: "20px", marginTop: "20px" }}
          >
            <Button
              fullWidth
              variant="contained"
              style={{
                fontFamily: "inherit",
                width: "100%",
                background:
                  "linear-gradient(to bottom right, #7C65D8, #20B9CC)",
              }}
              onClick={()=>handleChat()}
            >
              Join Event
            </Button>
           

            <Button
            fullWidth
              variant="contained"
              style={{
                marginLeft:'30px',
                fontFamily: "inherit",
                width: "100%",
                background:
                  "linear-gradient(to bottom right, #7C65D8, #20B9CC)",
              }}
              href="https://meet.google.com/rbu-vdfi-puw"
            >
              Join Webinar
            </Button>
          </Box>
<div style={{ display:'flex'}}>
        

          <div style={{ margin: "20px" }}>
            <Typography variant="h6" gutterBottom>
             {item && item.Attendees?.length}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Have already joined to volunteer
            </Typography>
          </div>
          </div>
          <Icon />
        </Grid>
      </Grid>
      <div className="container-card"></div>
    </div>
  );
};

export default EventDetail;
