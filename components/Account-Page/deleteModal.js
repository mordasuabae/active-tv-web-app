import React from 'react'
import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material'
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";




const DeleteModal = ({ open, setOpen }) => {

  // const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    // <Modal
    //     aria-labelledby="transition-modal-title"
    //     aria-describedby="transition-modal-description"
    //     open={handleModal}
    //     onClose={handleClose}
    //     closeAfterTransition
    //     // BackdropComponent={Backdrop}
    //     BackdropProps={{
    //       timeout: 500,
    //     }}
    //   >
    //     <Fade in={open}>

    //     </Fade>
    //   </Modal>
    <Box sx={open ? styles.container : styles.none} >

      <Box sx={styles.modalCover}>
        <Box sx={styles.head}>
          <Box>
            <Typography fontSize={10} sx={{ margin: '5px 0' }} className={'active-tv-font'} color="error">Warning user will be deleted!</Typography>
          </Box>

          <Button onClick={handleClose} style={styles.deleteBtn} variant="contained" color="warning">X</Button>
        </Box>
        <Box sx={styles.body}>
          <form>
            <Box>
              <input style={styles.input} type={'email'} placeholder={'Enter your password'} />
            </Box>

            <input style={styles.input} type={'email'} placeholder={'confirm your password'} />

            <Typography fontSize={8} sx={{ margin: '10px ' }} className={'active-tv-font'} color="error">all user data will be lost</Typography>

          </form>

        </Box>

        <Box sx={styles.footer}>
          <Button type="submit" style={styles.deleteBtn} variant="contained" color="success">confirm</Button>
          <Button style={styles.deleteBtn} variant="contained" color="error">cancel</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default DeleteModal



const styles = {

  container: {
    position: 'fixed',
    zIndex: 100,
    height: 'calc(100vh - 72px)',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(6px)',
    background: 'rgba(0,0,0,0.2)'
  },

  modalCover: {
    minHeight: '50%',
    width: '50%',
    border: '1px solid #444'
  },
  none: {
    display: 'none'
  },
  head: {
    // border:'1px solid yellow',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px'

  },
  deleteBtn: {
    borderRadius: '40px'
  },
  body: {
    // border:'1px solid yellow',
    height: '150px',
    // display:'flex',
    alignItems: 'center',
    // justifyContent:'space-between',
    padding: '0 10px'
  },
  footer: {
    // border:'1px solid yellow',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    // justifyContent:'space-between',
    padding: '0 10px',
    gap: 5
  },
  input: {
    width: '400px',
    height: '40px',
    margin: '5px 0',
    padding: '0 20px',
    background: 'transparent',
    color: '#fff',
    borderColor: '#333',
    borderRight: 'none',
    borderLeft: 'none',
    borderTop: 'none'
  }

}