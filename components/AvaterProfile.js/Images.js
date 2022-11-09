import React, { useEffect, useState } from 'react'


export default function Images() {

  const [avaters, setAvaters] = useState([]);

  useEffect(() => {
 async function getAvters () {
  const response = await fetch("https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-profile-pictures", {
    method: 'GET',
      headers: {
      accept: 'application/json',
    },
  });
  const data = await response.json();
  setAvaters(data.profilePictureUrls);
  } 
  getAvters();
  },[])

  console.log(avaters)

  return (
    <div style={container}>
      {
        avaters.map(profile=> (
          <div key={profile} style={avaterWrapper}>
              <img src={profile} alt="avaterImage"  width={70} height={70} style={images} />
          </div>
        ))
      }

    </div>
  )
}

const container = {
  display:"flex",
  overflowY:"auto"
}

const images = {
  borderRadius:"10px"
}

const avaterWrapper = {
  padding:"10px"
}