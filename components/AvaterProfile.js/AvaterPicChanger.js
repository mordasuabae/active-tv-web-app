import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CameraAltIcon from "@mui/icons-material/CameraAlt";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "690px",
  height:"388px",
  bgcolor: 'black',
  boxShadow: 24,
  p: 4,
  borderRadius:"15px",
};

const cancelBtn = {
  // background:"red",
  marginTop:"10px",
  color:"red",
  fontWeight:"bold",
  border:"1px solid red",
  height:"30px"
}

const confirmBtn = {
  // background:"green",
  marginTop:"10px",
  color:"green",
  fontWeight:"bold",
  border:"1px solid green",
  height:"30px"

}

const images = {
  width:"100%",
  height:"320px",
  background:"#222",
  borderRadius:"15px",
  marginTop:"-10px",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  color:"white",
  fontWeight:"bold"
}

const buttons = {
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  justifyContent:"space-evenly",
  width:"200px",
  marginLeft:"450px"
}

export default function AvaterPicChanger() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box

      onClick={handleOpen}
        sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width:"40px",
        height: "40px",
        marginBottom: "10px",
        marginTop: "-45px",
        fontWeight: "bold",
        cursor: "pointer",
        marginLeft: "30px",
        borderRadius:"25px",
        background:"#444",
        // boxShadow:'2px 2px 2px 2px #444'
      }}
      >
       <CameraAltIcon/>
      </Box>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
        <Box style={images}>
          <p>hello images</p>
        </Box>

        <Box style={buttons}>
          <Button style={confirmBtn}>confirm</Button>
          <Button onClick={handleClose} style={cancelBtn}>close</Button>
        </Box>

        </Box>
      </Modal>
    </div>
  );
}
