import React from 'react'
import {Grid,Typography,}from '@mui/material'; // Grid version 1
import { CircularProgressbar } from 'react-circular-progressbar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import 'react-circular-progressbar/dist/styles.css';
import "./Event.css"
import Icon from './Icon';
import EventCard from './EventCard';

const DonateDetail = () => {
    const percentage = 66;
  return (

<div className='event-container'  >
    <Grid container spacing={2}>
  <Grid xs={8}>
  <img src="/images/event1.png" className="event-image"/>
    
  </Grid>
  <Grid xs={4}>
  <Typography variant="h5" component="h5">
  One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now
 
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
<CircularProgressbar value={66}  text={`${percentage}%`} />

</div>

</div>
<div style={{margin:'20px 20px 20px 0px'}}>
<Typography variant="h6" gutterBottom>
       Donor
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        66
      </Typography>
</div>

<div style={{margin:'20px'}}>
<Typography variant="h6" gutterBottom>
      4,42,327 
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
      Worth Products Raised
      </Typography>

</div>



  

</div>




<p>Donatekart Foundation is requesting all of you to come forward and help those affected by this disaster - a simple donation will go a long way. The products you donate will be sent to the Turkish Consulate in India and will then safely reach those in need. This is your chance to save lives and make a difference.</p>

    

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