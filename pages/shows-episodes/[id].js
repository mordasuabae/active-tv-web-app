import React from "react";
import { useEffect, useState, useContext } from "react";
import { USER_CONTEXT } from "../../context/MainContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Box from "@mui/material/Box";
import TabsEpisode from "../../components/shows/TabsEpsiode";
import axios from "axios";
import { ShowsContext } from "../../context/ShowContext";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

const ShowsEpisodes = () => {
  // const {show} = useContext(ShowsContext)
  const router = useRouter();
  const title = router.query.id;
  console.log(router, { title });
  const {show,getShow} = useContext(ShowsContext)
  console.log({ show });

  useEffect(() => {
    Aos.init({ duration: 2000 });
    getShow(title)
  }, []);


  const { showsDetails, setShowsDetails } = useContext(USER_CONTEXT);

  
  return (
    <Box
      style={{ background: "#111", height: "100vh", flexDirection: "column" }}
    >
      <Box
        sx={{
          width: "100%",
          height: "70vh",
          backgroundImage: `url('${show?.showItem?.Item?.CoverArtLarge}')`,
          backgroundSize: "cover",
          backgroundPosition: "top-center",
          backgroundRepeat: "no-repeat",
          paddingTop: "100px",
        }}
      ></Box>
      <div>
        {show.showJson.episodes.length === 0 ? (
          <Box sx={{textAlign : 'center',padding : '24px 0px'}}>
            <Typography className="active-tv-font" color='#eee' variant="h3">
            This Show has no episdoes yet
          </Typography>
          </Box>
        ) : (
          <TabsEpisode
            show={show?.showItem?.Item}
            episodes={show.showJson.episodes}
          />
        )}
      </div>
    </Box>
  );
};

export default ShowsEpisodes;
