import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const LiveStream = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        background: "rgba(1,1,1,.5)",
        display: "flex",
        alignItems: "center",
        justifyContent:'center',
        padding: "16px",
      }}
    >
      <Typography
        className="active-tv-font"
        fontSize={"32px"}
        fontWeight={"550"}
      >
        {" "}
        Live Chat
      </Typography>
    </Box>
  );
};

export default LiveStream;
