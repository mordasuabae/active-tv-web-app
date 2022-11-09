import React from "react";
import { useEffect, useState, useContext } from "react";
import { USER_CONTEXT } from "../../context/MainContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Box from '@mui/material/Box';
import TabsEpisode from "../../components/shows/TabsEpsiode";


const ShowsEpisodes = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { showsDetails, setShowsDetails } = useContext(USER_CONTEXT);

  return (
    <Box style={{ background: "#111", height: "100vh", flexDirection: "column" }}>
    
      <Box
        sx={{
          width: "100%",
          height: "70vh",
          backgroundImage: `url('${showsDetails.img}')`,
          backgroundSize:'cover',
          backgroundPosition:'top-center',
          backgroundRepeat: "no-repeat",
          paddingTop:"100px",
        }}
      >
      </Box>
      <div>
      <TabsEpisode/>
      </div>
    </Box>
  );
};

export default ShowsEpisodes;
