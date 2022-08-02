import React from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Link from 'next/link';


const main = {
    backgroundImage: "url('merch-web.jpg')",
    backgroundSize:"cover",
    width:"1359px",
    height:"600px",
    display:"flex",
    alignItems:"center",
    justfifyContent:"center",
    flexDirection:"column",
    color:"white",
    paddingTop:"150px",
    lineHeight:"30px",
    fontFamily:"Arcade Normal",
    fontSize:"12px"
}

function MerchSection() {
    useEffect(() => {
        Aos.init({duration: 2000});
    },[])
    
  return (
    <div style={main}>
        <h1 sx={{ display: { md:'block' }, mr:50 }} data-aos="fade-up">ALL MERCH 15% OFF & FIRST DIBS</h1>
        <p data-aos="fade-up">Site members get 15% off all product and the first</p>
        <p data-aos="fade-up">opportunity to buy new product before the general public.</p>
        <Link href="/signup">
        <button style={{
              border:"none",
              width:"250px",
              height:"50px",
              color:"#000",
              background:"#FFF203",
              fontWeight:"bold",
              cursor:"pointer",
              borderRadius:"25px",
            }}
            data-aos="fade-up"
            ><h3>SEE IT IN ACTION</h3></button>
            </Link>
    </div>
  )
}

export default MerchSection