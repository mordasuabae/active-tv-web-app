import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import ShowCard from "./ShowCard";
import Typography from "@mui/material/Typography";
import data from "./test.json";
import ShowHeader from './ShowsHeader'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  //   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ShowModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ShowHeader title="Popular Shows" />
      <Box
        sx={{
          display: "flex",
          gap: 5,
          // overflowX: "auto",
          width: "100%",
          // border: "1px solid red",
          flexWrap:'wrap'
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
            <Typography sx={{color:'#fff', fontWeight:'bold', padding:'10px', textTransform:'capitalize', background:'rgba(0,0,0,0.3)'}}>{card.name}</Typography>
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
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
