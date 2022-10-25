import React from 'react'
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const container = {
    width: '100%',
    height:'64px',
    display:'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: '0 100px'
}

const text_container = {
    width: '58%',
    height:'100%',
    border: '1px solid red'
}

const Footer = () => {
  return (
    <Box sx={container}>
      <Box sx={text_container}>

      </Box>
    </Box>
  )
}

export default Footer
