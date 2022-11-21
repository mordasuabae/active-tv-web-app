import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios'


export default function Images() {

  const [avaters, setAvaters] = useState([]);

  const handleImage = async (url) => {
    console.log("you have clicked me")
    const response = await fetch(
      "https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/store-users",
      {
        method: "POST",
        body:JSON.stringify ({imageProfile:url, email:"kisibugrady3980@gmail.com"}) 
      }

      );
      console.log(await response.json())

  }

async function getAvters() {
  const response = await fetch(
    "https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-profile-pictures",
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );

  const data = await response.json();
  const parseData = data;
  const removedData = parseData.profilePictureUrls.shift();

  console.log(parseData, "what is in the array");
  setAvaters(parseData.profilePictureUrls);
}

useEffect(() => {
  getAvters();
  console.log(avaters, "official data");
}, []);



  return (
    <Box style={container}>
        {
          avaters.map(profile => {
           return <div>
            <img src={profile} alt="avaterImage"  width={70} height={70} style={images} onClick={()=>handleImage(profile)}/>
            </div>
          })
        }
    </Box>
  )
}

const container = {
  display:"flex",
  overflowY:"auto"
}

const images = {
  borderRadius:"10px",
  cursor:"pointer"
}
