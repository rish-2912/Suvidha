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

const DonateDetail = () => {
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
                <Chip label="children" color="success" />
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
          <Grid xs={8}>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <EventCard image='event-card' name='Clothes' cost={100} setTotal={setTotal} total={total}/>
              </Grid>
              <Grid xs={6}>
                <EventCard image='event-card1' name='Bedsheet' cost= {100} setTotal={setTotal} total={total} />
              </Grid>
              <Grid xs={6}>
                <EventCard image='event-card2' name='Rice 10 kgs' cost={300} setTotal={setTotal} total={total} />
              </Grid>
            </Grid>
          </Grid>
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
      <Box></Box>
    </div>
  );
};

export default DonateDetail;
