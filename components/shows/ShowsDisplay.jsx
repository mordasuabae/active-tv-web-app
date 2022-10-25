import * as React from "react";
import Box from "@mui/material/Box";
import ShowCard from "./ShowCard";
import Typography from "@mui/material/Typography";
import data from "./test.json";
import ShowHeader from "./ShowsHeader";
import { useEffect, useState, useContext } from "react";
import { USER_CONTEXT } from "../../context/MainContext";
import Link from 'next/link';

export default function ShowsDisplay() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [empty, setEmpty] = useState(true);
  const [spinner, setSpinner] = useState(null);

  const { showsDetails, setShowsDetails } = useContext(USER_CONTEXT);

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  const getEpisodes = () => {
    setTimeout(() => {
      setEmpty(false);
    }, 3000);
  };



  return (
    <div>
      <ShowHeader title="Shows" />
      <Box
        sx={{
          display: "flex",
          gap: 5,
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {data.map((card, index) => (
          <Link key={index} href={`/shows-episodes/${card.name}`}>
            <a> 
            <ShowCard
              color={card.color}
              openModal={handleOpen}
              img={card.img}
              text={card.name}
              one={card.episodeone}
              two={card.episodetwo}
              three={card.episodethree}
              four={card.episodefour}
              five={card.episodefive}
              six={card.episodesix}
              seven={card.episodeseven}
              eight={card.episodeeight}
              nine={card.episodenine}
              onFetchEpisode={getEpisodes}
            />
            <Typography
              className="active-tv-font"
              fontSize={10}
              sx={{
                color: "#fff",
                fontWeight: "bold",
                padding: "10px",
                textTransform: "capitalize",
                background: "rgba(0,0,0,0.3)",
              }}
            >
              {card.name}
            </Typography>
            </a>
          </Link>
        ))}
      </Box>
    </div>
  );
}

const styles = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "98%",
    height: "98%",
    bgcolor: "background.paper",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
  },
  topShowContainer: {
    height: "40%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "",
  },
  bottomShowContainer: {
    // border: 1,
    height: "60%",
    width: "100%",
  },
  emptyBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#111",
  },
  episodesContainer: {
    width: "100%",
    height: "100%",
    background: "#111",
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  fadeContainer: {
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    zIndex: 100,
  },

  cancelBtn: {
    borderRadius: "50px",
    background: "rgba(0,0,0,0.5)",
    color: "#fff",
    fontSize: "15px",
    width: "50px",
    height: "60px",
    fontWeight: "bold",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "10px",
  },
};
