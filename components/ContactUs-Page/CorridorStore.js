import React from "react";
import { Box } from "@mui/system";
import Link from "next/link";

const CorridorStore = () => {
    return ( 
        <Box className={"active-tv-font"} sx={styles.container} style={{fontSize:'8px',margin:'-50px 0 0 0'}}>
            <Box style={{color:'white'}} sx={styles.contentBox}>
            Our store purchases are handled by a third party, Merchline, for order support please contact
             <p style={{fontSize:'8px',color:'yellow'}}><Link className="link"  href="/"> support@merchline.com</Link></p>
              </Box>
        </Box>
     );
}
 
export default CorridorStore;

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
      height: "100px",
      padding: "30px 90px",
      flexDirection: "column",
      margin:'-600px 0 0 0'
    //   color:"white",
    },
  
  };