import React ,{ useState , useEffect } from 'react'
import {Grid,Typography,}from '@mui/material'; // Grid version 1
import { CircularProgressbar } from 'react-circular-progressbar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import 'react-circular-progressbar/dist/styles.css';
import "./Event.css"
import Icon from './Icon';
import EventCard from './EventCard';
import { useParams } from 'react-router';
import { getAllDonations } from '../../functions/donationFunctions';

const DonateDetail = () => {
    const percentage = 66;

    const { id } = useParams()
    const [item, setitem] = useState([])

    const fetchdonations=async()=>{
        const x = await getAllDonations()
        if(x?.data?.success){
            console.log(x)
            
            setitem(x.data.data.find(x=>x._id===id))
        }
    }


    useEffect(() => {
        fetchdonations()
    }, [])

    return (

      <div className='event-container'  >
          <Grid container spacing={2}>
        <Grid xs={8}>
        <img src={"/images/"+item?.image} className="event-image"/>
          
        </Grid>
        <Grid xs={4}>
        <Typography variant="h5" component="h5">
        {item && item.name}
      
      </Typography>

      <div className='event-tags'>
      <Stack spacing={1} alignItems="start">
            <Stack direction="row" spacing={1}>
              <Chip label="Tax benifit" color="success" />
              <Chip label="Assured" color="success" />
              <Chip label="children" color="success" />
            </Stack>
            </Stack>
      </div>
      <div className='event container' style={{  display:'flex', margin:'20px 0px 0px'  }}>

      <div >
      <div style={{ width: 70, height: 70 ,margin:'20px 20px 20px 0px' , display:'inline-block'}}>
      <CircularProgressbar value={66}  text={`${item && (item.donatedAmount/item.targetAmount)*100}%`} />

      </div>

      </div>
      <div style={{margin:'20px 20px 20px 0px'}}>
      <Typography variant="h6" gutterBottom>
            Donor
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {item && item.donors?.length}
            </Typography>
      </div>

      <div style={{margin:'20px'}}>
      <Typography variant="h6" gutterBottom>
            {item && item.donatedAmount}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            Worth Products Raised
            </Typography>

      </div>



        

      </div>




      <p>{item && item.description}</p>
          

      <Icon/>
          
        </Grid>
        
      </Grid>
      <div className='container-card'>
      <Grid container spacing={2}>
        <Grid xs={8}>
        <Grid container spacing={2}>
        <Grid xs={6}>
        <EventCard/>
        </Grid>
        <Grid xs={6}>
        <EventCard/>
        </Grid>
        <Grid xs={6}>
        <EventCard/>
        </Grid>
          
        </Grid>
        
        
        
        
        </Grid>
        <Grid xs={4}>
        
        </Grid>

      </Grid>
      </div>


      </div>
    
  )
}

export default DonateDetail