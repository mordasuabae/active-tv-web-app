import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (

    <Box className="active-tv-font" sx={{ width: '100%', minHeight: '100vh', backgroundImage: `url('hero-bg.jpg')`, backgroundSize: 'cover', }}>
      <Box
        style={{
          // border: '1px solid white',
          color: 'white',
          margin: '-8px 0 0 0',
          height: '600px',
          padding: '180px 70px',
          fontFamily: "Arcade Normal",
          fontSize: "11px"
        }}
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <Typography variant="h3" className="active-tv-font" fontSize={35}>
          JOIN THE CREW
        </Typography>
        <ul>
          <li style={{ color: '#fff203', margin: '10px 0 0 0' }}>
            <Typography style={{ color: 'white' }}>Watch exclusive content ad-free</Typography>
          </li>
          <li style={{ color: '#fff203', margin: '10px 0 0 0' }}>
            <Typography style={{ color: 'white' }}>YOU decide what shows get made</Typography>
          </li>
          <li style={{ color: '#fff203', margin: '10px 0 0 0' }}>
            <Typography style={{ color: 'white' }}>15% off on ALL merch</Typography>
          </li>
          <li style={{ color: '#fff203', margin: '10px 0 0 0' }}>
            <Typography style={{ color: 'white' }}>Watch on ANY device</Typography>
          </li>
        </ul>
        <a href="/signup">
          <button className='card'
            style={{
              backgroundColor: '#fff203',
              width: '423px',
              height: '50px',
              borderRadius: '5px',
              border: 'none',
              margin: '35px 0 0 2px',
              fontFamily: "Arcade Normal",
              fontSize: "12px"
            }}
          >
            START WITH A FREE TRAIL!
          </button>
        </a>
        <Typography style={{ margin: '20px 0 0 40px' }}>
          Join in minutes. Cancel any time.
        </Typography>

      </Box>
    </Box>
  );
};

export default Banner;
