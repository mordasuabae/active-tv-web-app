import React from "react";
import { Typography } from "@mui/material";

const ShowsHeader = ({ title }) => {
  return (
    <Typography
      className="active-tv-font"
      sx={{ color: "#fff", margin: "25px 0", fontWeight: "bold" }}
      variant="h3"
      fontSize={15}
    >
      {title}
    </Typography>
  );
};

export default ShowsHeader;
