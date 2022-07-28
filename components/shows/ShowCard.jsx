import { Typography } from "@mui/material";
import React from "react";

const ShowCard = ({ img, text, openModal, color }) => {
  return (
    <>
      <div
        onClick={() => openModal()}
        style={{
          ...styles.container,
          background: `url(${img})`,
          borderRadius: "10px 10px 0 0",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* <img src={img} style={{objectFit:'cover', objectPosition:'bottom'}} alt="" width={"100%"} height={"80%"} /> */}
      </div>
    </>
  );
};

const styles = {
  container: {
    height: "200px",
    width: "200px",
    backgroundSize: "cover",
    backgroundPosition: "top",
    cursor: "pointer",
  },
};

export default ShowCard;
