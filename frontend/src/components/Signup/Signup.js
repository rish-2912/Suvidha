import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@material-ui/core";
import "./Signup.css";
const Signup = () => {
  const paperStyle = { padding: "30px 20px", width: 500, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const roles = [
    {
      value: "NGO",
    },
    {
      value: "User",
    },
  ];

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField
            size="small"
            className="form-field"
            fullWidth
            variant="outlined"
            label="Name"
            placeholder="Enter your name"
          />
          <TextField
            size="small"
            className="form-field"
            fullWidth
            variant="outlined"
            label="Email"
            placeholder="Enter your email"
          />

          <TextField
            size="small"
            className="form-field"
            fullWidth
            variant="outlined"
            label="Password"
            placeholder="Enter your password"
          />
          <TextField
            size="small"
            className="form-field"
            fullWidth
            variant="outlined"
            label="Confirm Password"
            placeholder="Confirm your password"
          />
          <TextField
            className="form-field"
            fullWidth
            id="outlined-select-roles"
            select
            label="Select Role"
           
          >
            {roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
       
        
      />
      <label htmlFor="select-image">
        <Button className="form-field" variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>
      <br></br>





          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
