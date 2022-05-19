import React from "react";
// import * as React from 'react';
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "red",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <>
      <h1 style={{ marginLeft: "40px" }}>Popular Now</h1>
      <Box sx={{ width: "90%", height: "200px", marginLeft: "50px" }}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundImage: "url('./row2pic1.webp')",
                backgroundSize: "cover",
                width: "100%",
                height: "200px",
                borderRadius: "25px",
                "&:hover": {
                  backgroundImage: "url('./avater.gif')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPostion: "center bottom",
                  transitionDuration: "1s",
                  cursor: "pointer",
                },
              }}
            >
              <Box
                style={{
                  background: "grey",
                  width: "40px",
                  float: "right",
                  color: "white",
                  opacity: "0,5",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                22:21
              </Box>
              <Box
                style={{
                  display: "flex",
                  paddingTop: "140px",
                  paddingLeft: "30px",
                }}
              >
                <Stack direction="row">
                  <Avatar alt="" src="yellocc.jpg" style={{ width: "60%" }} />
                </Stack>
                <p
                  style={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: "bolder",
                  }}
                >
                  VFX Artist React To Bad & Good CGI...
                </p>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundImage: "url('./row2pic2.webp')",
                backgroundSize: "cover",
                width: "100%",
                height: "200px",
                borderRadius: "25px",
                "&:hover": {
                  backgroundImage: "url('./bowling.gif')",

                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPostion: "center bottom",
                  transitionDuration: "1s",
                  cursor: "pointer",
                },
              }}
            >
              <Box
                style={{
                  background: "grey",
                  width: "40px",
                  float: "right",
                  color: "white",
                  opacity: "0,5",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                17:24
              </Box>
              <Box
                style={{
                  display: "flex",
                  paddingTop: "140px",
                  paddingLeft: "30px",
                }}
              >
                <Stack direction="row">
                  <Avatar alt="" src="yellocc.jpg" style={{ width: "60%" }} />
                </Stack>
                <p
                  style={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: "bolder",
                  }}
                >
                  We Made MORE Slightly Offensive B...
                </p>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundImage: "url('./row2pic3.webp')",
                backgroundSize: "cover",
                width: "100%",
                height: "200px",
                borderRadius: "25px",
                "&:hover": {
                  backgroundImage: "url('./apes.gif')",

                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPostion: "center bottom",
                  transitionDuration: "1s",
                  cursor: "pointer",
                },
              }}
            >
              <Box
                style={{
                  background: "grey",
                  width: "40px",
                  float: "right",
                  color: "white",
                  opacity: "0,5",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                26:27
              </Box>
              <Box
                style={{
                  display: "flex",
                  paddingTop: "140px",
                  paddingLeft: "30px",
                }}
              >
                <Stack direction="row">
                  <Avatar alt="" src="yellocc.jpg" style={{ width: "60%" }} />
                </Stack>
                <p
                  style={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: "bolder",
                  }}
                >
                  VFX Artist React To Bad & Good CGI...
                </p>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} columns={12} sx={{ mt: 5 }}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundImage: "url('./row2pic4.webp')",
                backgroundSize: "cover",
                width: "100%",
                height: "200px",
                borderRadius: "25px",
                "&:hover": {
                  backgroundImage: "url('./arcane.gif')",

                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPostion: "center bottom",
                  transitionDuration: "1s",
                  cursor: "pointer",
                },
              }}
            >
              <Box
                style={{
                  background: "grey",
                  width: "40px",
                  float: "right",
                  color: "white",
                  opacity: "0,5",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                20:36
              </Box>
              <Box
                style={{
                  display: "flex",
                  paddingTop: "140px",
                  paddingLeft: "30px",
                }}
              >
                <Stack direction="row">
                  <Avatar alt="" src="yellocc.jpg" style={{ width: "60%" }} />
                </Stack>
                <p
                  style={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: "bolder",
                  }}
                >
                  Animators React To & Great Cart...
                </p>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundImage: "url('./row2pic5.webp')",
                backgroundSize: "cover",
                width: "100%",
                height: "200px",
                borderRadius: "25px",
                "&:hover": {
                  backgroundImage: "url('./Bone.gif')",

                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPostion: "center bottom",
                  transitionDuration: "1s",
                  cursor: "pointer",
                },
              }}
            >
              <Box
                style={{
                  background: "grey",
                  width: "40px",
                  float: "right",
                  color: "white",
                  opacity: "0,5",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                19:50
              </Box>
              <Box
                style={{
                  display: "flex",
                  paddingTop: "140px",
                  paddingLeft: "30px",
                }}
              >
                <Stack direction="row">
                  <Avatar alt="" src="yellocc.jpg" style={{ width: "60%" }} />
                </Stack>
                <p
                  style={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: "bolder",
                  }}
                >
                  Not Again...
                </p>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundImage: "url('./row2pic6.webp')",
                backgroundSize: "cover",
                width: "100%",
                height: "200px",
                borderRadius: "25px",
                "&:hover": {
                  backgroundImage: "url('./Batman.gif')",

                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPostion: "center bottom",
                  transitionDuration: "1s",
                  cursor: "pointer",
                },
              }}
            >
              <Box
                style={{
                  background: "grey",
                  width: "40px",
                  float: "right",
                  color: "white",
                  opacity: "0,5",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                4:40
              </Box>
              <Box
                style={{
                  display: "flex",
                  paddingTop: "140px",
                  paddingLeft: "30px",
                }}
              >
                <Stack direction="row">
                  <Avatar alt="" src="yellocc.jpg" style={{ width: "60%" }} />
                </Stack>
                <p
                  style={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: "bolder",
                  }}
                >
                  We put the OLDEST Batman into the...
                </p>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
// import styles from '../../styles/Popularshows.module.css'

// const PopularNow = () => {
//   return (
//     <div style={{ color: "white", alignItems: "center", justifyContent: "center" }}>

//     <h1 style={{ marginLeft: "50px" }}>Popular Shows</h1>

//     <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//       <div className={styles.background}
//         style={{
//           background: "red",
//           width: "380px",

//           borderRadius: "25px",
//           backgroundImage: "url('/row2pic1.webp')",
//           backgroundSize: "cover",
//           cursor: "pointer",
//         }}
//       ></div>
//       <div
//         style={{
//           background: "red",
//           width: "380px",
//           height: "200px",
//           borderRadius: "25px",
//           backgroundImage: "url('/row2pic2.webp')",
//           backgroundSize: "cover",
//           cursor: "pointer",
//         }}
//       ></div>
//       <div
//         style={{
//           background: "red",
//           width: "380px",
//           height: "200px",
//           borderRadius: "25px",
//           backgroundImage: "url('/row2pic3.webp')",
//           backgroundSize: "cover",
//           cursor: "pointer",
//         }}
//       ></div>
//     </div>

//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-evenly",
//         marginTop: "30px",
//       }}
//     >
//       <div
//         style={{
//           background: "red",
//           width: "380px",
//           height: "200px",
//           borderRadius: "25px",
//           backgroundImage: "url('/row2pic4.webp')",
//           backgroundSize: "cover",
//           cursor: "pointer",
//         }}
//       ></div>
//       <div
//         style={{
//           background: "red",
//           width: "380px",
//           height: "200px",
//           borderRadius: "25px",
//           backgroundImage: "url('/row2pic5.webp')",
//           backgroundSize: "cover",
//           cursor: "pointer",
//         }}
//       ></div>
//       <div
//         style={{
//           background: "red",
//           width: "380px",
//           height: "200px",
//           borderRadius: "25px",
//           backgroundImage: "url('/row2pic6.webp')",
//           backgroundSize: "cover",
//           cursor: "pointer",
//         }}
//       ></div>
//     </div>
//   </div>
//   )
// }

// export default PopularNow
