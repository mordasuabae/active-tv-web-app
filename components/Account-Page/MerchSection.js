import React from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Link from 'next/link';
import { Box } from "@mui/system";
import { Typography } from '@mui/material';

const main = {
  backgroundImage: "url('merch-web.jpg')",
  backgroundSize: "cover",
  width: "100%",
  height: "600px",
  display: "flex",
  alignItems: "center",
  justfifyContent: "center",
  flexDirection: "column",
  color: "white",
  paddingTop: "150px",
  lineHeight: "30px",
  fontFamily: "Arcade Normal",
  fontSize: "12px"
}

function MerchSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <Box style={main}>
      <Typography variant='h3' fontSize={30} className='active-tv-font' align="center" data-aos="fade-up">ALL MERCH 15% OFF & FIRST DIBS</Typography>
      <Typography variant="p" fontSize={13} sx={{ mt: 2, mb: 2 }} className='active-tv-font' data-aos="fade-up">Site members get 15% off all product and the first</Typography>
      <Typography variant="p" fontSize={13} sx={{ mt: 2, mb: 2 }} className='active-tv-font' data-aos="fade-up">opportunity to buy new product before the general public.</Typography>
      <Link href="/merch" passHref={true}>
        <button style={{
          border: "none",
          width: "250px",
          height: "50px",
          color: "#000",
          background: "#FFF203",
          fontWeight: "bold",
          cursor: "pointer",
          borderRadius: "25px",
          fontFamily: "Arcade Normal",
          fontSize: "12px"
        }}
          data-aos="fade-up"
        >SEE IT IN ACTION</button>
      </Link>
    </Box>
  )
}

export default MerchSection