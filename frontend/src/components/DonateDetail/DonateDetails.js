import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Button } from "@mui/material"; // Grid version 1
import { CircularProgressbar } from "react-circular-progressbar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "react-circular-progressbar/dist/styles.css";
import "./Event.css";
import Icon from "./Icon";
import EventCard from "./EventCard";
import { useParams } from "react-router";
import { getAllDonations } from "../../functions/donationFunctions";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Checkout from "./Checkout";
import Footer from "../footer/Footer";

import item1 from '../../assets/item1.png'
import item2 from '../../assets/item2.png'
import item3 from '../../assets/item3.png'
import item4 from '../../assets/item4.png'
import item5 from '../../assets/item5.png'
import item6 from '../../assets/item6.png'

const DonateDetail = () => {


   const donateItems = [
    {
      "img": `${item1}`,
      "title": "Ghee 1L",
      "price": 540
    },
    {
      "img": `${item2}`,
      "title": "Rajma 2kg",
      "price": 280
    },
    {
      "img": `${item3}`,
      "title": "Kabuli Chana 3kg",
      "price": 345
    },
    
    
  
  ]

  const EducationItems=[
    {
      "img": `${item4}`,
      "title": "Books",
      "price": 200
    },
    {
      "img": `${item5}`,
      "title": "Bag",
      "price": 300
    },
  ]






  const { id } = useParams();
  const [item, setitem] = useState([]);
  const [total, setTotal] = useState(0);
  console.log(total)
  const fetchdonations = async () => {
    const x = await getAllDonations();
    if (x?.data?.success) {
      console.log(x);

      setitem(x.data.data.find((x) => x._id === id));
    }
  };

  useEffect(() => {
    fetchdonations();
  }, []);

  return (
    <div className="event-container">
      <Grid container spacing={2}>
        <Grid xs={8}>
          <img src={"/images/" + item?.image} className="event-image" />
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
            <div>
              <div
                style={{
                  width: 70,
                  height: 70,
                  margin: "20px 20px 20px 0px",
                  display: "inline-block",
                }}
              >
                <CircularProgressbar
                  value={`${
                    item && (item.donatedAmount / item.targetAmount) * 100
                  }%`}
                  text={`${
                    item && (item.donatedAmount / item.targetAmount) * 100
                  }%`}
                />
              </div>
            </div>
            <div style={{ margin: "20px 20px 20px 0px" }}>
              <Typography variant="h6" gutterBottom>
                Donor
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {item && item.donors?.length}
              </Typography>
            </div>

            <div style={{ margin: "20px" }}>
              <Typography variant="h6" gutterBottom>
                {item && item.donatedAmount}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Worth Products Raised
              </Typography>
            </div>
          </div>

          <p>{item && item.description}</p>

          <Icon />
        </Grid>
      </Grid>
      <div className="container-card">
      
        <Grid container spacing={4}>
        {item.category==='Children'&&<>
        <Grid xs={8}>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <EventCard style={{margin:'20px'}} image='item4' name={EducationItems[0].title} cost={EducationItems[0].price} setTotal={setTotal} total={total}/>
              </Grid>
              <Grid xs={6}>
                <EventCard style={{margin:'20px'}} image='item5' name={EducationItems[1].title} cost={EducationItems[1].price}setTotal={setTotal} total={total} />
              </Grid>
             
            </Grid>
          </Grid>
        </>}
        {item.category==='Hunger'&&<>
        <Grid xs={8}>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <EventCard style={{margin:'20px'}} image='item1' name={donateItems[0].title} cost={donateItems[0].price} setTotal={setTotal} total={total}/>
              </Grid>
              <Grid xs={6}>
                <EventCard style={{margin:'20px'}} image='item2' name={donateItems[1].title} cost={donateItems[1].price} setTotal={setTotal} total={total} />
              </Grid>
              <Grid xs={6}>
                <EventCard style={{margin:'20px'}} image='item3' name={donateItems[2].title} cost={donateItems[2].price} setTotal={setTotal} total={total} />
              </Grid>
            </Grid>
          </Grid>
        </>}
        {item.category==='Elderly'&&<>
        <Grid xs={8}>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <EventCard style={{margin:'20px'}} image='event-card' name='Clothes' cost={100} setTotal={setTotal} total={total}/>
              </Grid>
              <Grid xs={6}>
                <EventCard style={{margin:'20px'}} image='event-card1' name='Bedsheet' cost= {100} setTotal={setTotal} total={total} />
              </Grid>
              <Grid xs={6}>
                <EventCard style={{margin:'20px'}} image='event-card2' name='Rice 10 kgs' cost={300} setTotal={setTotal} total={total} />
              </Grid>
            </Grid>
          </Grid>
        </>}
    
          <Grid xs={4}>
            <Box style={{ marginLeft: "50px", padding: "20px" }}>
              <Paper elevation={10}>
                <div style={{ padding: "20px" }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Amount
                  </InputLabel>
                  <OutlinedInput
                  value={total}
                  onChange={(e)=>(setTotal(e.target.value))}
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">₹</InputAdornment>
                    }
                    label="Amount"
                  />
                </div>
                <Checkout totalcost={100 * total} id={id} />
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </div>
      
    </div>
  );
};

export default DonateDetail;
