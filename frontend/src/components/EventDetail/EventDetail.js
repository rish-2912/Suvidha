import React from "react";
import { Grid, Typography } from "@mui/material"; // Grid version 1
import { CircularProgressbar } from "react-circular-progressbar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "react-circular-progressbar/dist/styles.css";
import "../DonateDetail/Event.css";
import Icon from "../DonateDetail/Icon";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const DonateDetail = ({}) => {
  const percentage = 66;
  return (
    <div className="event-container">
      <Grid container spacing={2}>
        <Grid xs={8}>
          <img src="/images/event1.png" className="event-image" />
        </Grid>
        <Grid xs={4}>
          <Typography variant="h5" component="h5">
            One Of The Deadliest Earthquakes Of The Century Has Destroyed
            Turkey, Help Now
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
            <div></div>
          </div>

          <p>
            Donatekart Foundation is requesting all of you to come forward and
            help those affected by this disaster - a simple donation will go a
            long way. The products you donate will be sent to the Turkish
            Consulate in India and will then safely reach those in need. This is
            your chance to save lives and make a difference.
          </p>

          <Box
            style={{ display: "flex", marginBottom: "20px", marginTop: "20px" }}
          >
            <Button
              variant="contained"
              style={{
                fontFamily: "inherit",
                width: "100%",
                background:
                  "linear-gradient(to bottom right, #7C65D8, #20B9CC)",
              }}
            >
              Join Event
            </Button>
          </Box>
<div style={{ display:'flex'}}>
        

          <div style={{ margin: "20px" }}>
            <Typography variant="h6" gutterBottom>
              4,42,327
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

export default DonateDetail;
