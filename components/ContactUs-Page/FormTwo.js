import React from "react";
import { Box } from "@mui/system";

const FormTwo = () => {
    return (  
        <Box className={"active-tv-font"} sx={styles.container}>
        <Box style={{color:'white'}} sx={styles.contentBox}>
            <p style={{fontSize:'8px'}}>Email Address</p>
            <input style={{width:'100%',border:'1px white solid',backgroundColor:'black',height:'40px',color:'white',padding:'0 5px',fontStyle:"italic"}}  type="text" placeholder="Enter your email address"></input>
            <br/>
            <br/>
            <p style={{fontSize:'8px'}}>Name</p>
            <input style={{width:'100%',border:'1px white solid',backgroundColor:'black',height:'40px',color:'white',padding:'0 5px',fontStyle:"italic"}}  type="text" placeholder="Enter your full name"></input>
            <br/>
            <br/>
            <p style={{fontSize:'8px'}}>Subject</p>
            <input style={{width:'100%',border:'1px white solid',backgroundColor:'black',height:'40px',color:'white',padding:'0 5px',fontStyle:"italic"}}  type="text" placeholder="Subject"></input>
            <br/>
            <br/>
            <p style={{fontSize:'8px'}}>Urls of offending videos (1 per line)</p>
            <input style={{width:'100%',border:'1px white solid',backgroundColor:'white',height:'80px',color:'black',padding:'0 5px',fontStyle:"italic"}}  type="text" placeholder="Url's"></input>
            <br/>
            <br/>
            <button style={{backgroundColor:'yellow',width:'100%',height:"40px",border:'none'}}>Sumit</button>
        </Box>
    </Box>
    );
}
 
export default FormTwo;

const styles = {
    container: {
      minHeight: "calc(100vh - 70px)",
    //   background: "url('active-tv-login-test1.png')",
      // backgroundSize:'cover',
      display: "flex",
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
    },
    contentBox: {
      width: "700px",
      background: "black",
      opacity: 0.99,
      height: "550px",
      padding: "0 90px",
      flexDirection: "column",
      margin:'-65px 0 0 0'
    //   color:"white",
    },
  
  };