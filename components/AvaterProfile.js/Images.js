import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';



export default function Images() {

  const [avaters, setAvaters] = useState([]);



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
  console.log(removedData, "item that has been removed");

  setAvaters(parseData);
  //  const data = await response.json();
}

useEffect(() => {
  getAvters();
  console.log(avaters, "official data");
}, []);

  console.log(avaters)

  return (
    <Box style={container}>
        <img src={avaters.profilePictureUrls} alt="avaterImage"  width={70} height={70} style={images} />
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

const avaterWrapper = {
  padding:"10px"
}