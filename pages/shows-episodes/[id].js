import React from "react";
import { useEffect, useState, useContext } from "react";
import { USER_CONTEXT } from "../../context/MainContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Box from '@mui/material/Box';
import TabsEpisode from "../../components/shows/TabsEpsiode";
import axios from 'axios'

export async function getStaticPaths(){
  
  const endpoint  = 'https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-shows'
  const response = await axios.get(endpoint);

  const paths = response.data.map(show =>({
    params : {id : show.Title}  
  }))
  return {paths,fallback : false}
}

export async function getStaticProps({params}){
  const endpoint  = `https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-show/${params.id}`

  const response = await axios.get(endpoint);
  console.log('response',response.data)
  return {
    props : {
      show : response.data
    }
  }
} 

const ShowsEpisodes = ({show}) => {
  console.log({show})
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
          backgroundImage: `url('${show.showItem.Item.CoverArtLarge}')`,
          backgroundSize:'cover',
          backgroundPosition:'top-center',
          backgroundRepeat: "no-repeat",
          paddingTop:"100px",
        }}
      >
      </Box>
      <div>
     {/* <TabsEpisode show = {show.showItem} episodes = {show.showJson.episodes}/> */}
      </div>
    </Box>
  );
};

export default ShowsEpisodes;
