import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { useState, useContext } from "react";
import { Grid } from "@mui/material";
import { USER_CONTEXT } from "../../context/MainContext";
import DeleteModal from './deleteModal'
import AvaterPicChanger from "../AvaterProfile.js/AvaterPicChanger";
import Link from 'next/link'


const AccountLoggedIn = () => {
  const [popup, setPopup] = useState(false);
  const handleClickOpen = () => {
    setPopup(!popup);
    setClose(false);
  };
  const closePopup = () => {
    setPopup(false);
    setClose(true);
  };
  const [close, setClose] = useState(true);

  const { AuthenticatedUser,displayName } = useContext(USER_CONTEXT); //pulling out the current authenticated user

  const [subscribed, setSubscribed] = useState(false);

 const [open, setOpen] = React.useState(false);

 const AvaterPack = {
  // paddingRight:"395px",
  display:"flex", 
  alignItems:"center",
  justifyContent:"center",
}

  return (
    <Box className={"active-tv-font"} sx={styles.container}>

     <DeleteModal open={open} setOpen={setOpen} />
      
      <Box sx={styles.contentBox}>
        {/* insert code here */}

      


        <Box
          style={{
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "18px",
            letterSpacing: "2px",
            // borderTop: "1px solid #F2F2F2",
            height: "85px",
          }}
        >
          <p>Account</p>
          
        </Box>
        
           <Box
          sx={{
            minHeight: "80px",
            borderTop: "1px solid #F2F2F2 ",
          }}
        >
          <Grid container>
            <Grid sx={styles.gridItem} item md={3.5}>
              <Typography className="active-tv-font" variant="h3" fontSize={10}>
                Profile photo
              </Typography>
               <Typography sx={{margin:'10px 0'}} color="#999"  className="active-tv-font" variant="h3" fontSize={9}>
                 change image
              </Typography>

            </Grid>
            <Grid sx={styles.gridItem} item md={5.5}></Grid>
            <Grid sx={{ ...styles.gridItem, ...styles.lastGrid }} item md={3}>
               <Box style={AvaterPack}>
                { 
                <Typography variant="h1" color="#fff" fontSize={30} style={{marginTop:"45px"}}>
                    <AvaterPicChanger/>
                </Typography>
              }
              </Box>

              <Typography
                sx={{
                  marginBottom: "4px",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={18}
                color={"#4d4df7"}
              >
                {/*<Link href="/"> image profile</Link>*/}
              </Typography>

              </Grid>
          </Grid>
        </Box>



        <Box
          sx={{
            minHeight: "80px",
            borderTop: "1px solid #F2F2F2 ",
          }}
        >

          <Grid container>
            <Grid sx={styles.gridItem} item md={3.5}>
            {/*  <Typography className="active-tv-font" variant="h3" fontSize={13}>
                profile
              </Typography>
*/}            <Typography className="active-tv-font" variant="h3" fontSize={10}>
                display name
              </Typography>
               <Typography sx={{margin:'10px 0'}} className="active-tv-font" variant="h3" fontSize={10}>
                email
              </Typography>

            </Grid>
            <Grid sx={styles.gridItem} item md={5.5}>
               <Typography  className="active-tv-font" variant="h3" fontSize={10}>
                {displayName}
              </Typography>
              <Typography sx={{margin:'10px 0'}} className="active-tv-font" variant="h3" fontSize={10}>
                {AuthenticatedUser.name}
              </Typography>
            </Grid>
            <Grid sx={{ ...styles.gridItem, ...styles.lastGrid }} item md={3}>
                <Typography
                sx={{
                  marginBottom: "4px",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={18}
                color={"#4d4df7"}
              >
                <Link href="/ResetNamePassWord">Change user details</Link>
              </Typography>
                 <Typography
                sx={{
                  marginBottom: "4px",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={18}
                color={"#4d4df7"}
              >
                <Link href="/changepassword">Change password</Link>
              </Typography>
              <Typography
                onClick={()=>setOpen(true)}
                sx={{
                  marginBottom: "10px",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={18}
                color={"#df522b"}
              >
                <Link  href="#">Delete account</Link> {/*//check here*/}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            minHeight: "80px",
            borderTop: "1px solid #F2F2F2 ",
          }} nknkm
        >
          <Grid container>
            <Grid sx={styles.gridItem} item md={3.5}>
              <Typography className="active-tv-font" variant="h3" fontSize={12}>
                Subscription details
              </Typography>
            </Grid>
            <Grid sx={styles.gridItem} item md={5.5}>
              <Typography
                sx={{ marginBottom: 1 }}
                className="active-tv-font"
                variant="h3"
                fontSize={10}
              >
                You {"don't"} seem to have a subscription!
              </Typography>
              <Typography className="active-tv-font" variant="h3" fontSize={10}>
                Have an active Patreon membership?
              </Typography>
            </Grid>
            <Grid sx={{ ...styles.gridItem,...styles.lastGrid }} item md={3}>
              <Typography
                sx={{
                  marginBottom: "4px",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={18}
                color={"#4d4df7"}
              >
                <Link href="/subscribepayment">Payment method</Link>
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={18}
                color={"#4d4df7"}
              >
                <Link href="/subscribepayment">subscribe now</Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            minHeight: "80px",
            borderTop: "1px solid #F2F2F2 ",
          }}
        >
          <Grid container>
            <Grid sx={styles.gridItem} item md={3.5}>
              <Typography className="active-tv-font" variant="h3" fontSize={12}>
                Producer Points
              </Typography>
            </Grid>
            <Grid sx={styles.gridItem} item md={5.5}>
              <Typography
                className="active-tv-font"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "4px",
                }}
                variant="h3"
                fontSize={10}
              >
                You have 0 Producer Points
                <img
                  style={{ margin: "0 5px" }}
                  src="coin.gif"
                  alt="coin"
                  width={18}
                  height={18}
                />
              </Typography>
              <Typography
                className="active-tv-font"
                sx={{ display: "flex", alignItems: "center" }}
                variant="h3"
                fontSize={10}
              >
                Since signing up {"you've"} earned 0 points
                <img
                  style={{ margin: "0 5px" }}
                  src="coin.gif"
                  alt="coin"
                  width={18}
                  height={18}
                />
              </Typography>
            </Grid>
            <Grid sx={{ ...styles.gridItem, ...styles.lastGrid }} item md={3}>
              <Typography
                sx={{
                  marginBottom: "4px",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={18}
                color={"#4d4df7"}
              >
                <Link href="/produce">Point History</Link>
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={18}
                color={"#4d4df7"}
              >
                {/*<Link href="/produce">test</Link>*/}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{
            minHeight: "80px",
            borderTop: "1px solid #F2F2F2 ",
          }}>
          <Grid container>
            <Grid sx={styles.gridItem} item md={3.5}>
              <Typography className="active-tv-font" variant="h3" fontSize={12}>
                Redeem Voucher
              </Typography>
            </Grid>
            <Grid sx={styles.gridItem} item md={5.5}></Grid>
            <Grid sx={{ ...styles.gridItem, ...styles.lastGrid }} item md={3}>
            {
                close? <Typography 
                onClick={handleClickOpen}
                sx={{
                  marginBottom: "4px",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={18}
                color={"#4d4df7"}
              > 
                Redeem Code
              </Typography> : null
              }
              
              {
                popup ?    <Box position="absolute" width="861px" backgroundColor="rgba(0,0,0,0.9)" border="1px solid yellow" bottom="150px">
                <Box className={styles.popup}>
                  <Box >
                    <Box>
                    <Box  sx={{display:"flex",justifyContent:'space-between',padding:"20px 30px 20px 15px"}} className={styles.popupheader}>
                    <Typography style={{height:"150px",width:"150px",padding:"0 10px",backgroundImage:`url("/ATV_logo.png")`,backgroundSIze:"contain",backgroundRepeat:"no-reapeat",margin:"-30px 0 0 0"}}></Typography>
                    <Box>
                    <Typography sx={{fontFamily:"ArcadeFont",margin:"0 0 0 -30px"}}>Redeem Code</Typography>
                      <Typography sx={{ fontSize: "10px",fontFamily:"ArcadeFont",margin:"0 0 0 -30px"}}>
                        alaricomanjate21@gmail.com
                      </Typography>
                    </Box>
                    <Typography  className="popupbutton" onClick={closePopup}>
                      x
                    </Typography>
                    </Box>
                      
                    
                    </Box>
                  </Box>
                  <Box
                  
                    sx={{
                      // display: "flex",
                      // justifyContent: "space-between",
                      padding: " 0 30px 20px 30px",
                      // border: "1px solid red",
                    }}
                  >
                    <>
                      <input
                        style={{
                          width: "100%",
                          border: "none",
                          borderBottom: "2px solid #2c3e50",
                          outline: "none",
                          padding: "5px 5px",
                          fontFamily:"ArcadeFont"
                        }}
                        type="placeholder"
                        placeholder="Enter gift card or promo code"
                      ></input>
                    </>
                    <Box sx={{ margin: "20px 0 0 0",}}>
                      <Typography sx={{ fontSize: "10px" ,fontFamily:"ArcadeFont"}}>
                        By clicking Redeem, you agree to the Gift Card & Promotional
                        Code{" "}
                        <Link href="/">
                          <span style={{ color: "#FFFA00" }}>
                            Terms and Conditions
                          </span>
                        </Link>
                        , as applicable.
                      </Typography>
                    </Box>
                    <Box
                      className="popupbutton"
                      style={{
                        display:'flex',
                        justifyContent: "flex-end",
                        margin: "20px 0 0 0",
                      }}
                    >
                      <button
                        className="popupbutton"
                        onClick={closePopup}
                        style={{
                          width: "100px",
                          height: "40px",
                          borderRadius: "8px",
                          border: "none",
                          marginRight: "10px",
                          color: "gray",
                          background: "white",
                          border: "0.1em solid gray",
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => alert("Your Voucher is Invalid!")}
                        className="popupbutton"
                        style={{
                          width: "100px",
                          height: "40px",
                          borderRadius: "8px",
                          border: "none",
                          color: "grey",
                          background: "#fff203",
                        }}
                      >
                        Redeem
                      </button>
                    </Box>
                  </Box>
                </Box>
              </Box> : null
              }
              
            </Grid>
          </Grid>
          </Box>
             <Box
          sx={{
            minHeight: "80px",
            borderTop: "1px solid #F2F2F2 ",
          }}
        >
          <Grid container>
            <Grid sx={styles.gridItem} item md={3.5}>
              <Typography className="active-tv-font" variant="h3" fontSize={12}>
                Need help?
              </Typography>
            </Grid>
            <Grid sx={styles.gridItem} item md={5.5}></Grid>
            <Grid sx={{ ...styles.gridItem, ...styles.lastGrid }} item md={3}>
              <Typography
                sx={{
                  marginBottom: "4px",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={18}
                color={"#4d4df7"}
              >
                <Link href="/">FAQ</Link>
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={18}
                color={"#4d4df7"}
              >
                <Link href="/contact-us">Contact support</Link>
              </Typography>
            </Grid>
          </Grid>

         
        </Box>
      </Box>
    </Box>
  );
};
export default AccountLoggedIn;

const styles = {
  container: {
    minHeight: "calc(100vh - 70px)",
    background: "url('active-tv-login-test1.png')",
    backgroundSize:'cover',
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  contentBox: {
    width: "75%",
    background: "rgba(0,0,0,0.7)",
    height: "90%",
    padding: "20px 50px",
    flexDirection: "column",
  },
  gridItem: {
    // border: "1px solid yellow",
    minHeight: "80px",
    display: "flex",
    flexDirection: "column",
    // gap:'5px',
    padding: "20px 0 0 0",
    color: "#fff",
  },
  lastGrid: {
    alignItems: "flex-end",
    flexDirection: "column",
  },
};
