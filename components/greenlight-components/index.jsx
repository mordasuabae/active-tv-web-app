import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ReactPlayer from "react-player";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState, useEffect } from "react";

const GreenlightBanner = () => {
  const [showImage, setShowImage] = useState(true);
  const [showPlayer, setShowPlayer] = useState(false);
  const [player, setPlayer] = useState(false);

  useEffect(() => {
    setShowImage(true);
    setShowPlayer(false);
  }, []);

  const playVideo = () => {
    setShowPlayer(true);
    setShowImage(false);
    setPlayer(true); 
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      {/* the image banner */}
      <Box sx={showImage ? styles.introImage : styles.none}>
        <Grid container>
          <Grid sx={styles.gridItem} item md={4} sm={4} xs={12}>
            <Box sx={{ ...styles.content }}>
              <Typography
                sx={{
                  ...styles.bannerHeading,
                  ...styles.textDecorate,
                  display: "flex",

                  fontWeight: "300",
                  fontStyle: "italic",
                  fontSize: {
                    md: 60,
                    sm: 24,
                    xs: 24,
                  },
                }}
                variant="h1"
                color="#32a453"
              >
                <span
                  style={{
                    fontWeight: "200",
                    textDecorationColor: "darkgreen",
                    textDecoration: "line-through",
                    textDecorationStyle: "dotted",
                    textDecorationThickness: "2px",
                    textShadow: "800",
                  }}
                >
                  PRODUCE
                </span>
                <b style={{ display: "flex" }}>
                  <img className="bulb" src="green-light.png" alt="bulb" />

                  <span style={{ color: "#fff" }}> THAT! </span>
                </b>
              </Typography>
              <Typography
                sx={{
                  ...styles.bannerHeading,
                  fontWeight: "700",
                  marginTop: "20px",
                  fontSize: {
                    md: 23,
                    sm: 18,
                    xs: 16,
                  },
                }}
                variant="h3"
                color="#fff"
              >
                Be a Producer
              </Typography>
              <Typography
                variant="h6"
                color="#fff"
                sx={{
                  ...styles.bannerHeading,
                  fontWeight: "200",
                  marginTop: "20px",
                  fontSize: {
                    md: 18,
                    sm: 14,
                    xs: 10,
                  },
                }}
              >
                Directly control <br /> what your subscription <br /> dollars
                are spent on by <br /> using your Producer Points
              </Typography>
            </Box>
          </Grid>
          <Grid sx={styles.gridItem} item md={4} sm={4} xs={12}>
            <Box
              sx={{
                ...styles.content,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                // variant="contained"
                sx={{
                  padding: "20px",
                  cursor: "pointer",
                  borderRadius: "100%",
                }}
                onClick={playVideo}
              >
                <img
                  style={styles.playIcon}
                  // src="play-design.png"
                  src="play-circle-final.png"
                  alt="play-svg"
                />
              </Button>
            </Box>
          </Grid>
          <Grid sx={{...styles.gridItem ,height:{xs:'10px!important'}}} item md={4} sm={4} xs={12}></Grid>
        </Grid>
      </Box>

      {/* the player */}
      <Box sx={showPlayer ? styles.playerContainer : styles.none}>
        <ReactPlayer
          controls={true}
          playing={player}
          //  playing={false}
          width="92%"
          height="92%"
          style={styles.player}
          url="produce-vid.webm"
          // url="https://www.youtube.com/watch?v=eOsjzbb8AUE" //this one
          // url="blob:https://www.corridordigital.com/b2b5d4c0-f1af-4f9b-bc29-e3ca017ab030"
          // url="blob:https://www.corridordigital.com/0de238d9-3089-49fa-b585-bb1d89ddb337"
        />
      </Box>

    </Box>
  );
};

export default GreenlightBanner;

const styles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    background: "red",
  },
  playerContainer: {
    height: {
      md: "100vh",
      sm: "70vh",
      xs: "85vh",
    },
    width: "100%",
    padding: "0 30px 30px",
    display: "flex",
    justifyContent: "center",
  },
  player: {
    height: "100%",
    width: "100%",
  },
  introImage: {
    // border: "1px solid blue",
    maxHeight: {
      md: "100vh",
      sm: "100vh",
      xs: "80vh",
    },
    width: "100%",
    background: "url('top_banner_full.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  none: {
    display: "none",
  },
  content: {
    // border: "1px solid red",
    minHeight: {
      md: "400px",
      sm: "200px",
      xs: "100px",
    },
    width: "100%",
    padding: "0 50px",
    display: "flex",
    justifyContent: {
      md: "center",
      sm: "flex-start",
      xs: "flex-end",
    },
    flexDirection: "column",
  },
  gridItem: {
    minHeight: {
      md: "100vh",
      sm: "50vh",
      xs: "30vh",
    },
    // border: '1px solid blue' ,
    display: "flex",
    alignItems: "center",
  },
  playIcon: {
    height: 150,
    // border:'1px solid red'
  },
  bannerHeading: {
    fontSize: {
      lg: 40,
    },
  },
};
