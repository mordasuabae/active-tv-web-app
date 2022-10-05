import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useState, useContext } from "react";
import { Grid } from "@mui/material";
import { USER_CONTEXT } from "../../context/MainContext";


const AccountLoggedIn = () => {


const {AuthenticatedUser} = useContext(USER_CONTEXT) //pulling out the current authenticated user
  
  const [subscribed, setSubscribed] = useState(false);

  return (
    <Box className={"active-tv-font"} sx={styles.container}>
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
              <Typography className="active-tv-font" variant="h3" fontSize={13}>
                profile
              </Typography>
            </Grid>
            <Grid sx={styles.gridItem} item md={5.5}>
              <Typography className="active-tv-font" variant="h3" fontSize={10}>
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
                <a href="/changepassword">Change password</a>
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
                <a href=""></a>
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  "&:hover": { textDecoration: "underline" },
                }}
                variant="h5"
                fontSize={18}
                color={"#df522b"}
              >
                <a href="">delete account</a>
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
                You don't seem to have a subscription!
              </Typography>
              <Typography className="active-tv-font" variant="h3" fontSize={10}>
                Have an active Patreon membership?
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
                <a href="">Payment method</a>
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
                <a href="">subscribe now</a>
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
                className="active-tv-font" sx={{display:'flex', alignItems:'center',marginBottom:'4px'}}
                variant="h3"
                fontSize={10}
              >
                You have 0 Producer Points

               <img style={{margin:'0 5px'}} src="coin.gif" alt="coin" width={18} height={18} />
              </Typography>
              <Typography className="active-tv-font" sx={{display:'flex', alignItems:'center'}} variant="h3" fontSize={10}>
                Since signing up you've earned 0 points
              <img style={{margin:'0 5px'}} src="coin.gif" alt="coin" width={18} height={18} />
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
                <a href="">Point History</a>
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
                <a href="">test</a>
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
                Settings
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
                <a href="">Video Quality</a>
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
                <a href="">FAQ</a>
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
                <a href="">Contact support</a>
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
    // backgroundSize:'cover',
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
