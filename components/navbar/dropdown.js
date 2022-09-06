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
import { useState } from 'react'


export default function PositionedPopper({ user }) {
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
      Router.push('/login')
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }



  return (
    <Box sx={{ width: 100, zIndex: 1000 }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{
              background: '#222',
              minHeight: '150px',
              minWidth: "140px",
              padding: '5px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-end'
            }}>
              <Button variant="text" sx={{ width: 'auto' }} onClick={() => {
                Router.push('/account')
              }}>
                <Typography variant="p" color="#fff" fontSize={14}>
                  account
                </Typography>
              </Button>
              <Button variant="text" sx={{ width: 'auto' }} onClick={() => {
                Router.push('/')
              }}>
                <Typography variant="p" color="#fff" fontSize={14}>
                  Settings
                </Typography>
              </Button>
              <Button variant="text" sx={{ width: 'auto' }} onClick={() => {
                signOut()
              }}>
                <Typography variant="p" color="#fff" fontSize={14}>
                  Sign out
                </Typography>
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

