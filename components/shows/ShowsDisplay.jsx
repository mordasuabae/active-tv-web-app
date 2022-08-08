import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import ShowCard from "./ShowCard";
import Typography from "@mui/material/Typography";
import data from "./test.json";
import ShowHeader from "./ShowsHeader";
import { useEffect, useState, useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import BeatLoader from "react-spinners/BeatLoader";
import RiseLoader from "react-spinners/RiseLoader";
import MoonLoader from "react-spinners/MoonLoader";
import PulseLoader from "react-spinners/PulseLoader";
import HashLoader from "react-spinners/HashLoader";
import ScaleLoader from "react-spinners/ScaleLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import { USER_CONTEXT } from "../../context/MainContext";

export default function ShowsDisplay() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [empty, setEmpty] = useState(true);
  const [spinner, setSpinner] = useState(null);

  const { showsDetails, setShowsDetails } = useContext(USER_CONTEXT);

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  // function updateShowsDetails( title , img ,episode ){
  //       setShowsDetails({
  //         title:title,
  //         img:img,
  //         episode:[
  //              episode
  //         ]
  //       })
  // }

  useEffect(() => {
    //render a differernt loader whenever the page gets rerendered:

    const spinnerItem = new Array();

    spinnerItem[0] = <ClipLoader color={color} loading={loading} size={20} />;
    spinnerItem[1] = <BeatLoader color={color} loading={loading} size={20} />;
    spinnerItem[2] = <ScaleLoader color={color} loading={loading} size={20} />;
    spinnerItem[3] = <HashLoader color={color} loading={loading} size={40} />;
    spinnerItem[4] = <RiseLoader color={color} loading={loading} size={20} />;
    spinnerItem[5] = <MoonLoader color={color} loading={loading} size={20} />;
    spinnerItem[6] = <PulseLoader color={color} loading={loading} size={20} />;
    spinnerItem[7] = <PacmanLoader color={color} loading={loading} size={20} />;
    spinnerItem[8] = (
      <PropagateLoader color={color} loading={loading} size={20} />
    );

    var i = Math.floor(spinnerItem.length * Math.random());
    setSpinner(spinnerItem[i]);

    // setTimeout(() => {
    //   setEmpty(!empty);
    // }, 3000);
  }, []);

  return (
    <div>
      <ShowHeader title="Shows" />
      <Box
        sx={{
          display: "flex",
          gap: 5,
          // overflowX: "auto",
          width: "100%",
          // border: "1px solid red",
          flexWrap: "wrap",
        }}
      >
        {data.map((card) => (
          <Box>
            <ShowCard
              color={card.color}
              openModal={handleOpen}
              img={card.img}
              text={card.name}
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
          </Box>
        ))}
      </Box>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <Box sx={{ ...styles.container }}>
            <Box
              sx={{
                ...styles.topShowContainer,
                background: `url(${showsDetails.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={showsDetails.img}
                style={{ objectFit: "cover", objectPosition: "center" , position:'absolute',filter:'brightness(0.2)'}}
                alt=""
                width={"100%"}
                height={"40%"}
              />
              <Box sx={styles.fadeContainer}>
                <Box sx={styles.btnContainer}>
                  <Button sx={styles.cancelBtn} onClick={() => handleClose()}>
                    X
                  </Button>
                </Box>
                <Box
                  sx={{
                    height: {
                       md:200,
                       sm:50,
                       xs:120
                    },
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "0 20px",
                  }}
                >
                  <Typography sx={{zIndex:1, fontSize:{
                    md:16,
                    sm:14,
                    xs:12
                  }}} className="active-tv-font" color="#fff">
                    {showsDetails.title}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ ...styles.bottomShowContainer }}>
              {empty ? (
                <Box sx={{ ...styles.emptyBox }}>
                  <img src="load.png" alt="" width={250} />
                  {/* {spinner} */}
                  <PulseLoader color={color} loading={loading} size={20} />;
                </Box>
              ) : (
                <Box sx={{ ...styles.episodesContainer }}>
                  <Box
                    sx={{
                      border: "1px solid red",
                      height: "150px",
                      width: "150px",
                    }}
                  ></Box>
                </Box>
              )}
            </Box>
          </Box>
        </Fade>
      </Modal>
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
  },

  fadeContainer: {
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    zIndex:100
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
