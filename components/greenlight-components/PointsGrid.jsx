import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const PointsGrid = () => {
  return (
    <Box sx={styles.Container}>
      <Grid container>
        <Grid sx={styles.gridItem} item md={3} sm={6}>
          <Box>
            <img style={styles.img} src="point.png" alt="img" />
          </Box>
          <Box sx={styles.header}>
            <Typography  className={"active-tv-font"} variant="h6" fontWeight={'bold'} color="#fff" fontSize={16}>
              01 EARN POINTS
            </Typography>
          </Box>
          <Box sx={styles.body}>
             <Typography align="center" variant="h6" color="#fff" fontSize={16}>
             Every Member Automatically Earns Producer Points Based On Their Subscription.
             </Typography>
          </Box>
        </Grid>
        <Grid sx={styles.gridItem} item md={3} sm={6}>
          <Box>
            <img style={styles.img} src="browse.png" alt="img" />
          </Box>
          <Box sx={styles.header}>
          <Typography  className={"active-tv-font"} variant="h6" fontWeight={'bold'} color="#fff" fontSize={16}>
              02 BROWSE PROJECTS
            </Typography>
          </Box>
          <Box sx={styles.body}>
             <Typography align="center" variant="h6" color="#fff" fontSize={16}>
             Each project Has A point Goal It Must Reach In Order To Be Made.
             </Typography>
          </Box>
        </Grid>
        <Grid sx={styles.gridItem} item md={3} sm={6}>
          <Box>
            <img style={styles.img} src="contribute.png" alt="img" />
          </Box>
          <Box sx={styles.header}>
          <Typography  className={"active-tv-font"} variant="h6" fontWeight={'bold'} color="#fff" fontSize={16}>
              03 CONTRIBUTE POINTS
            </Typography>
          </Box>
          <Box sx={styles.body}>
             <Typography align="center" align="center" variant="h6" color="#fff" fontSize={16} sm={6}>
             Contribute Your Producer Points Towards Any Project You Would Like To See Us Make.
             </Typography>
          </Box>
        </Grid>
        <Grid sx={styles.gridItem} item md={3} sm={6}>
          <Box>
            <img style={styles.img} src="watch.png" alt="img" />
          </Box>
          <Box sx={styles.header}>
          <Typography  className={"active-tv-font"} variant="h6" fontWeight={'bold'} color="#fff" fontSize={16}>
              04 WATCH SHOWS
            </Typography>
          </Box>
          <Box sx={styles.body}>
             <Typography align="center" variant="h6" color="#fff" fontSize={16}>
             When Enough Members Contribute Points To Meet A Project’s Goal, We Make It.
             </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PointsGrid;

const styles = {
  Container: {
    minHeight: "400px",
    padding: "25px 100px",
      // border:'1px solid red'
  },
  gridItem: {
    // border: "1px solid blue",
    minHeight: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    width: "200px",
    height: "",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: "50px",
    // border: "1px solid red",
  },
  body:{
    display: "flex",
    alignItems: "center",
    justifyContent:'center' , 
    padding: '0 15px'
  }
};
