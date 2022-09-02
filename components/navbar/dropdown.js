import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Avatar from "@mui/material/Avatar";
import { Auth } from 'aws-amplify';
import Router from 'next/router';
import {useState} from 'react'


export default function PositionedPopper({user}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };


  async function signOut() {
    try {
        await Auth.signOut();
        Router.push('/signup')
    } catch (error) {
        console.log('error signing out: ', error);
    }
}



  return (
    <Box sx={{ width: 100, zIndex:1000 }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{background:'#222'}}>
              <Typography sx={{ p: 2 , color:'#fff'}}>The content of the Popper.</Typography>
              <Typography sx={{ p: 2 , color:'#fff'}}>The content of the Popper.</Typography>
              <Typography sx={{ p: 2 , color:'#fff'}}></Typography>
               <Button onClick={()=>{
                  signOut()
               }}>
                  sign out
               </Button>
            </Paper>
          </Fade>
        )}
      </Popper>

      <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={handleClick('bottom-end')}>
          <Avatar sx={{ bgcolor: 'red' }}>
               {user}
             </Avatar>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

