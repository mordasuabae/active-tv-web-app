import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Palette } from "@universemc/react-palette";
import { useState, useEffect } from 'react';
import ShowsDisplay from '../components/shows/ShowsDisplay';
import axios from 'axios'

// export async function getStaticProps() {
//   const endpoint = 'https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-shows'
//   const response = await axios.get(endpoint)
//   console.log('SHOWS', response.data)
//   return {
//     props: {
//       shows: response.data
//     }
//   }
// };


const Shows = () => {

  //console.log({shows} ,'teesting to see whta this is ')

const [shows, setShows] = useState([])
  // const endpoint = 'https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-shows'
 // const endpoint = "test"


// const getShows = async(endpoint)=>{

//   try{
//        const response = await axios.get(endpoint);
//        const removeItem =  response.data;
//        const newArr =  removeItem.pop()
//        setShows(newArr)
//        console.log(shows ,'last test')

//   }catch(err){
//     console.log('error after fetching shows' , err.message)
//   }
  
// }


useEffect(()=>{
    
  // getShows(endpoint)

},[])


  return (
    <Palette
      src={
        "top_banner_full.jpg"
      }
    >
      {({ data, loading, error }) => {
        console.log('palette-data', data, loading, error);
        return (
          <Box
            sx={{
              minHeight: '100vh',
              // background:data.darkVibrant,
              background: '#111',
              padding: '40px 40px'
            }}
          >
            {/*<ShowsDisplay shows={shows} />*/}
          </Box>
        );
      }}
    </Palette>
  )
}

export default Shows