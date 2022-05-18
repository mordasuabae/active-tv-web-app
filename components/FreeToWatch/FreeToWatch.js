import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from "@mui/material/styles";
// import styles from "../styles/FreeToWatch.module.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";
import { border } from "@mui/system";
import { height } from "@mui/system";

export default function FreeToWatch() {
  return (
    <Box>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation]}
       
        className="freetowatchwiper"
        style={{height:"150px"}}
      >
        <SwiperSlide  style={{
        height:"150px", 
        width:"100%", 
        backgroundImage: "url('/pic1.webp')",
        backgroundSize:"cover",
        textAlign:"center",
        borderRadius:"20px",
        marginTop:"200px",
        
        }}>
        <div style={{flexDirectio:"colum"}}>

        <div style={{ color:"white", width:"60px", marginLeft:"240px", marginBottom:"20px", background:"grey"}}>22:21</div>
        <Box style={{display:"flex", height:"40px", marginBottom:"60px"}}>
        <Avatar alt="" src="yellocc.jpg" style={{width:"14%", marginTop:"50px"}}/>
        <p style={{color:"white", fontSize:"13px", fontWeight:"bolder", height:"40px", width:"300px",marginTop:"60px"}}>VFX Artist React To Bad & Good CGI...</p>
        </Box> 
        </div>
        </SwiperSlide>

<SwiperSlide style={{
        height:"150px",  
        width:"100%", 
        backgroundImage: "url('/pic2.webp')", 
        backgroundSize:"cover",
        textAlign:"center",
        borderRadius:"20px",
        marginTop:"200px",
        cursor:"pointer"
        }}>
        <div style={{flexDirectio:"colum"}}>
        <div style={{ color:"white", width:"60px", marginLeft:"240px", marginBottom:"20px", background:"grey"}}>22:21</div>
        <Box style={{display:"flex", height:"40px", marginBottom:"60px"}}>
        <Avatar alt="" src="yellocc.jpg" style={{width:"14%", marginTop:"50px"}}/>
        <p style={{color:"white", fontSize:"13px", fontWeight:"bolder", height:"40px", width:"300px",marginTop:"60px"}}>VFX Artist React To Bad & Good CGI...</p>
        </Box> 
        </div>
        </SwiperSlide>

<SwiperSlide style={{
        height:"150px", 
        width:"100%", 
        backgroundImage: "url('/pic3.webp')", 
        backgroundSize:"cover",
        textAlign:"center",
        borderRadius:"20px",
        marginTop:"200px",
        cursor:"pointer"
        }}>
            <div style={{flexDirectio:"colum"}}>
        <div style={{ color:"white", width:"60px", marginLeft:"240px", marginBottom:"20px", background:"grey"}}>22:21</div>
        <Box style={{display:"flex", height:"40px", marginBottom:"60px"}}>
        <Avatar alt="" src="yellocc.jpg" style={{width:"14%", marginTop:"50px"}}/>
        <p style={{color:"white", fontSize:"13px", fontWeight:"bolder", height:"40px", width:"300px",marginTop:"60px"}}>VFX Artist React To Bad & Good CGI...</p>
        </Box> 
        </div>    
        </SwiperSlide>

<SwiperSlide style={{
         height:"150px", 
        width:"100%", 
        backgroundImage: "url('/pic4.webp')", 
        backgroundSize:"cover",
        textAlign:"center",
        borderRadius:"20px",
        marginTop:"200px",
        cursor:"pointer"
        }}>
           <div style={{flexDirectio:"colum"}}>
        <div style={{ color:"white", width:"60px", marginLeft:"240px", marginBottom:"20px", background:"grey"}}>22:21</div>
        <Box style={{display:"flex", height:"40px", marginBottom:"60px"}}>
        <Avatar alt="" src="yellocc.jpg" style={{width:"14%", marginTop:"50px"}}/>
        <p style={{color:"white", fontSize:"13px", fontWeight:"bolder", height:"40px", width:"300px",marginTop:"60px"}}>VFX Artist React To Bad & Good CGI...</p>
        </Box> 
        </div>     
        </SwiperSlide>

<SwiperSlide style={{
        height:"150px",  
        width:"100%", 
        backgroundImage: "url('/pic5.jpg')", 
        backgroundSize:"cover",
        textAlign:"center",
        borderRadius:"20px",
        marginTop:"200px",
        cursor:"pointer"
        }}>
          <div style={{flexDirectio:"colum"}}>
        <div style={{ color:"white", width:"60px", marginLeft:"240px", marginBottom:"20px", background:"grey"}}>22:21</div>
        <Box style={{display:"flex", height:"40px", marginBottom:"60px"}}>
        <Avatar alt="" src="yellocc.jpg" style={{width:"14%", marginTop:"50px"}}/>
        <p style={{color:"white", fontSize:"13px", fontWeight:"bolder", height:"40px", width:"300px",marginTop:"60px"}}>VFX Artist React To Bad & Good CGI...</p>
        </Box> 
        </div>      
        </SwiperSlide>

<SwiperSlide style={{
        height:"150px", 
        width:"100%", 
        backgroundImage: "url('/pic6.webp')", 
        backgroundSize:"cover",
        textAlign:"center",
        borderRadius:"20px",
        marginTop:"200px",
        cursor:"pointer"
        }}>
          <div style={{flexDirectio:"colum"}}>
        <div style={{ color:"white", width:"60px", marginLeft:"240px", marginBottom:"20px", background:"grey"}}>22:21</div>
        <Box style={{display:"flex", height:"40px", marginBottom:"60px"}}>
        <Avatar alt="" src="yellocc.jpg" style={{width:"14%", marginTop:"50px"}}/>
        <p style={{color:"white", fontSize:"13px", fontWeight:"bolder", height:"40px", width:"300px",marginTop:"60px"}}>VFX Artist React To Bad & Good CGI...</p>
        </Box> 
        </div>      
        </SwiperSlide>

<SwiperSlide style={{
        height:"150px",  
        width:"100%", 
        backgroundImage: "url('/pic7.webp')", 
        backgroundSize:"cover",
        textAlign:"center",
        borderRadius:"20px",
        marginTop:"200px",
        cursor:"pointer"
        }}>
          <div style={{flexDirectio:"colum"}}>
        <div style={{ color:"white", width:"60px", marginLeft:"240px", marginBottom:"20px", background:"grey"}}>22:21</div>
        <Box style={{display:"flex", height:"40px", marginBottom:"60px"}}>
        <Avatar alt="" src="yellocc.jpg" style={{width:"14%", marginTop:"50px"}}/>
        <p style={{color:"white", fontSize:"13px", fontWeight:"bolder", height:"40px", width:"300px",marginTop:"60px"}}>VFX Artist React To Bad & Good CGI...</p>
        </Box> 
        </div>      
        </SwiperSlide>

<SwiperSlide style={{
        height:"150px",  
        width:"100%", 
        backgroundImage: "url('/pic8.webp')", 
        backgroundSize:"cover", 
        textAlign:"center",
        borderRadius:"20px",
        marginTop:"200px",
        cursor:"pointer"
        }}>
          <div style={{flexDirectio:"colum"}}>
        <div style={{ color:"white", width:"60px", marginLeft:"240px", marginBottom:"20px", background:"grey"}}>22:21</div>
        <Box style={{display:"flex", height:"40px", marginBottom:"60px"}}>
        <Avatar alt="" src="yellocc.jpg" style={{width:"14%", marginTop:"50px"}}/>
        <p style={{color:"white", fontSize:"13px", fontWeight:"bolder", height:"40px", width:"300px",marginTop:"60px"}}>VFX Artist React To Bad & Good CGI...</p>
        </Box> 
        </div>      
        </SwiperSlide>

<SwiperSlide style={{
         height:"150px",  
        width:"100%", 
        backgroundImage: "url('/pic9.webp')", 
        backgroundSize:"cover",
        textAlign:"center",
        borderRadius:"20px",
        marginTop:"200px",
        cursor:"pointer"
        }}>
          <div style={{flexDirectio:"colum"}}>
        <div style={{ color:"white", width:"60px", marginLeft:"240px", marginBottom:"20px", background:"grey"}}>22:21</div>
        <Box style={{display:"flex", height:"40px", marginBottom:"60px"}}>
        <Avatar alt="" src="yellocc.jpg" style={{width:"14%", marginTop:"50px"}}/>
        <p style={{color:"white", fontSize:"13px", fontWeight:"bolder", height:"40px", width:"300px",marginTop:"60px"}}>VFX Artist React To Bad & Good CGI...</p>
        </Box> 
        </div>      
        </SwiperSlide>

         <SwiperSlide style={{
        height:"150px", 
        width:"100%", 
        backgroundImage: "url('/pic10.webp')", 
        backgroundSize:"cover",
        textAlign:"center",
        borderRadius:"20px",
        marginTop:"200px",
        cursor:"pointer"
        }}>
          <div style={{flexDirectio:"colum"}}>
        <div style={{ color:"white", width:"60px", marginLeft:"240px", marginBottom:"20px", background:"grey"}}>22:21</div>
        <Box style={{display:"flex", height:"40px", marginBottom:"60px"}}>
        <Avatar alt="" src="yellocc.jpg" style={{width:"14%", marginTop:"50px"}}/>
        <p style={{color:"white", fontSize:"13px", fontWeight:"bolder", height:"40px", width:"300px",marginTop:"60px"}}>VFX Artist React To Bad & Good CGI...</p>
        </Box> 
        </div>      
        </SwiperSlide>

<SwiperSlide style={{
         height:"150px",  
        width:"100%", 
        backgroundImage: "url('/pic11.webp')", 
        backgroundSize:"cover", 
        textAlign:"center",
        borderRadius:"20px",
        marginTop:"200px",
        cursor:"pointer"
        }}>
          <div style={{flexDirectio:"colum"}}>
        <div style={{ color:"white", width:"60px", marginLeft:"240px", marginBottom:"20px", background:"grey"}}>22:21</div>
        <Box style={{display:"flex", height:"40px", marginBottom:"60px"}}>
        <Avatar alt="" src="yellocc.jpg" style={{width:"14%", marginTop:"50px"}}/>
        <p style={{color:"white", fontSize:"13px", fontWeight:"bolder", height:"40px", width:"300px",marginTop:"60px"}}>VFX Artist React To Bad & Good CGI...</p>
        </Box> 
        </div>      
        </SwiperSlide>

<SwiperSlide style={{
        height:"150px",  
        width:"100%", 
        backgroundImage: "url('/pic12.webp')", 
        backgroundSize:"cover",
        textAlign:"center",
        borderRadius:"20px",
        marginTop:"200px",
        cursor:"pointer"
        }}>
          <div style={{flexDirectio:"colum"}}>
        <div style={{ color:"white", width:"60px", marginLeft:"240px", marginBottom:"20px", background:"grey"}}>22:21</div>
        <Box style={{display:"flex", height:"40px", marginBottom:"60px"}}>
        <Avatar alt="" src="yellocc.jpg" style={{width:"14%", marginTop:"50px"}}/>
        <p style={{color:"white", fontSize:"13px", fontWeight:"bolder", height:"40px", width:"300px",marginTop:"60px"}}>VFX Artist React To Bad & Good CGI...</p>
        </Box> 
        </div>      
        </SwiperSlide>

<SwiperSlide style={{
        height:"150px",  
        width:"100%", 
        backgroundImage: "url('/pic13.webp')", 
        backgroundSize:"cover",
        textAlign:"center",
        borderRadius:"20px",
        marginTop:"200px",
        cursor:"pointer"
        }}>
          <div style={{flexDirectio:"colum"}}>
        <div style={{ color:"white", width:"60px", marginLeft:"240px", marginBottom:"20px", background:"grey"}}>22:21</div>
        <Box style={{display:"flex", height:"40px", marginBottom:"60px"}}>
        <Avatar alt="" src="yellocc.jpg" style={{width:"14%", marginTop:"50px"}}/>
        <p style={{color:"white", fontSize:"13px", fontWeight:"bolder", height:"40px", width:"300px",marginTop:"60px"}}>VFX Artist React To Bad & Good CGI...</p>
        </Box> 
        </div>      
        </SwiperSlide>

<SwiperSlide style={{
        height:"150px",  
        width:"100%", 
        backgroundImage: "url('/pic14.webp')", 
        backgroundSize:"cover",
        textAlign:"center",
        borderRadius:"20px",
        marginTop:"200px",
        cursor:"pointer"
        }}>
          <div style={{flexDirectio:"colum"}}>
        <div style={{ color:"white", width:"60px", marginLeft:"240px", marginBottom:"20px", background:"grey"}}>22:21</div>
        <Box style={{display:"flex", height:"40px", marginBottom:"60px"}}>
        <Avatar alt="" src="yellocc.jpg" style={{width:"14%", marginTop:"50px"}}/>
        <p style={{color:"white", fontSize:"13px", fontWeight:"bolder", height:"40px", width:"300px",marginTop:"60px"}}>VFX Artist React To Bad & Good CGI...</p>
        </Box> 
        </div>      
        </SwiperSlide>


      </Swiper>

      
    </Box>
  );
}