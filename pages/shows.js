import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Palette } from "@universemc/react-palette";
import { useState, useEffect } from 'react';
import ShowsDisplay from '../components/shows/ShowsDisplay';

const Shows = () => {
  
  return (
    <Palette
      src={
        "top_banner_full.jpg"
      }
    >
      {({ data, loading, error }) => {
        console.log('palette-data' ,data, loading, error);
        return (
          <Box
            sx={{
              minHeight:'100vh',
              // background:data.darkVibrant,
              background:'#111',
               padding:'40px 40px'
            }}
          >  
         <ShowsDisplay/>
          </Box>
        ); 
      }} 
    </Palette>
  )
}

export default Shows