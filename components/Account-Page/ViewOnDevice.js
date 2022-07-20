import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'


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
  useEffect(() => {
    Aos.init({duration: 2000});
},[])


  return (
    <Box sx={{ flexGrow: 1 }} style={maindiv}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box style={{height:"500px", background:"transparent"}}>
            <img src="devices.png" style={{width:"100%"}} data-aos="fade-right"/>
          </Box>
        </Grid>

        <Grid item xs={4} style={{background:"transparent",border:"none"}}>
          <Item style={{ background:"transparent", color:"white", fontFamily:"Arcade Normal"}} sx={{ display: { xs: 'none', sm: 'none', md:'block' }, mr: 1 }}>
            <h1 data-aos="fade-left">VIEW ON ANY DEVICE</h1>
            <p data-aos="fade-left">Every episode ad-free, including new exclusive shows.</p>
            <p data-aos="fade-left">Higher quality than YouTube, and just as fast.</p>

            <Box style={box1}>
                <button style={Appbutton} data-aos="fade-left">
                    <Box>
                        <img src="playstore.png" alt="playstore" style={{width:"45px"}}/>
                    </Box>
                    <Box style={box2}>
                        <p style={{fontSize:"10px", opacity:"0.5"}}>GET IT ON</p>
                        <h3 style={{fontSize:"18px"}}>Google Play</h3>
                    </Box>
                </button>

                <button style={Appbutton} data-aos="fade-left">
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


        <Grid style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%"}}>
        <Grid item xs={4} sx={{ display: { xs: 'block', sm: 'block', md:'block' }, mr: 30 , pr: 29.3}}>
          <Box style={{
          // backgroundImage: "url('mobile.jpg')",
          width:"400px", 
          height:"400px", 
          backgroundSize:"cover",
          display:"flex",
          alignItems:"center",
          justfifyContent:"center",
          flexDirection:"column",
          // backgroundRepeat:"no-repeat",
          // border:"1px solid red",
          color:"white",
          paddingTop:"50px",
          lineHeight:"40px",
          fontFamily:"sans-serif",

          }}>
            <Box sx={{marginTop:"30px", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
            <h1 data-aos="fade-up">BE A PRODUCER</h1>
            <p data-aos="fade-up">Directly control what your subscription dollars are</p>
            <p style={{marginTop:"-20px"}} data-aos="fade-up">pent on by using your Producer Points</p>
            <button style={{
              border:"none",
              width:"250px",
              height:"50px",
              color:"#000",
              background:"#FFF203",
              fontWeight:"bold",
              cursor:"pointer",
              borderRadius:"25px",
            }}
            data-aos="fade-up"
            ><h3>SEE IT IN ACTION</h3></button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={8} sx={{ display: { xs: 'none', sm: 'none', md:'block' }, mr: 1 }}>
          <Box  sx={{ display: { xs: 'none', sm: 'none', md:'block' }, mr: 1 }} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img src="accountPic1.png" style={{width:"100%"}}/>

          </Box>
        </Grid>
        </Grid>

      </Grid>
    </Box>
  );
}
