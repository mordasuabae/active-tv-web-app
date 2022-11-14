import { Typography, Box } from "@mui/material";
import React, { useContext } from "react";
import { USER_CONTEXT } from "../../context/MainContext";
const ShowCard = ({
  img,
  text,
  openModal,
  color,
  onFetchEpisode,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
}) => {
  const { setShowsDetails } = useContext(USER_CONTEXT);
  return (
    <>
      <Box
        onClick={() => {
          onFetchEpisode();
          openModal();
          setShowsDetails({
            title: text,
            img: img,
            episodeone: one,
            episodetwo: two,
            episodethree: three,
            episodefour: four,
            episodefive: five,
            episodesix: six,
            episodeseven: seven,
            episodeeight: eight,
            episodenine: nine,
          });
        }}
        style={{
          ...styles.container,
          // background: `url(${img})`,
          borderRadius: "10px 10px 0 0",
          backgroundSize: "cover",
          backgroundPosition: "",
        }}
      >
        <img
          src={img}
          style={{
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: "10px 10px 0 0",
          }}
          alt="img"
          width={"100%"}
          height={"100%"}
        />
      </Box>
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
