import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
;

import './Login.css'
const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:500, margin:"30px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField className="form-field form-username" variant='outlined' label='Username' placeholder='Enter username' fullWidth required/>
                <TextField  className="form-field" variant='outlined' label='Password' placeholder='Enter password' type='password' fullWidth required/>
          
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login