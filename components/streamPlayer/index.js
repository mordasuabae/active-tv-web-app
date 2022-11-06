import React from 'react'
// import ReactHlsPlayer from 'react-hls-player';



const HslPlayer = () => {

  return (
    <div style={{height:'100vh', display:"flex", alignItems:'center', justifyContent:'center'}}>

  <ReactHlsPlayer
    src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    autoPlay={false}
    controls={true}
    width="50%"
    height="50%"
  /> 


    </div>
  )
}

export default HslPlayer