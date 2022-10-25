import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const container = {
  width: "100%",
  height: "64px",
  backgroundColor: "#111",
};

const overLay = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  padding: "0 100px",
  background: "rgba(0,0,0,0.3)",
};

const container2 = {
  width: "58%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const container3 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "50%",
  alignItems: "flex-start",
};

const fontSize = {
  fontSize: {
    xs: 6,
    md: 10,
    lg: 13,
  },
  color: "white",
};

const Footer = () => {
  return (
    <Box sx={container}>
      <Box sx={overLay}>
        <Box sx={container2}>
          <Box sx={container3}>
            <Typography className="active-tv-font" sx={fontSize}>
              INSTAGRAM CONTACT
            </Typography>
            <Typography className="active-tv-font" sx={fontSize}>
              {new Date().getFullYear()} © Active Tv
            </Typography>
          </Box>
          <Typography
            className="active-tv-font"
            sx={{
              fontSize: {
                xs: 5,
                md: 7,
                lg: 9,
              },
              color: "gray",
              paddingTop: '20px'
            }}
          >
            v6.51.4
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
