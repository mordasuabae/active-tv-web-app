import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === '' ? '' : '',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const maindiv = {
    width:"100%",
    // height:"100vh",
    background:"#141300",
}

const Appbutton = {
    width:"175px",
    height:"65px",
    borderRadius:"10px",
    border:"1px solid whitesmoke",
    background:"#000",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    justifyContent:"space-between",
    color:"white"
}

const box1 = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    justifyContent:"space-evenly",
}
const box2 = {
    // display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    lineHeight:"5px",
}


export default function ViewOnDevice() {
  return (
    <Box sx={{ flexGrow: 1 }} style={maindiv}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box style={{height:"500px", background:"transparent"}}>
            <img src="devices.png" style={{width:"100%"}}  />
          </Box>
        </Grid>

        <Grid item xs={4} style={{background:"transparent",border:"none"}}>
          <Item style={{ background:"transparent", color:"white"}} sx={{ display: { xs: 'none', sm: 'none', md:'block' }, mr: 1 }}>
            <h1>VIEW ON ANY DEVICE</h1>
            <p>Every episode ad-free, including new exclusive shows.</p>
            <p>Higher quality than YouTube, and just as fast.</p>

            <Box style={box1}>
                <button style={Appbutton}>
                    <Box>
                        <img src="playstore.png" alt="playstore" style={{width:"45px"}}/>
                    </Box>
                    <Box style={box2}>
                        <p style={{fontSize:"10px", opacity:"0.5"}}>GET IT ON</p>
                        <h3 style={{fontSize:"18px"}}>Google Play</h3>
                    </Box>
                </button>

                <button style={Appbutton}>
                    <Box>
                            <img src="apple.png" alt="Apple store" style={{width:"45px"}}/>
                        </Box>
                        <Box style={box2}>
                            <p style={{fontSize:"10px", opacity:"0.5"}}>DOWNLOAD ON THE</p>
                            <h3 style={{fontSize:"20px"}}>App Store</h3>
                        </Box>
                </button>
            </Box>
          </Item>
        </Grid>
5

        <Grid item xs={4}>
          <Box style={{backgroundImage: "url('mobile.jpg')",
          width:"90", 
          height:"100vh", 
          backgroundSize:"cover",
          display:"flex",
          alignItems:"center",
          justfifyContent:"center",
          flexDirection:"column"
          }}>
            {/* <p>wassup</p>
            <p>hello</p> */}
          </Box>
        </Grid>

        {/* <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}

      </Grid>
    </Box>
  );
}
