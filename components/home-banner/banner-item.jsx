import React from "react";
import { Box } from "@mui/material";

const BannerItem = ({ background, logo }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url("${background}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%",
        padding: "24px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url("${logo}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "100%",
          width: "20%",
        }}
      />
    </Box>
  );
};

export default BannerItem;
