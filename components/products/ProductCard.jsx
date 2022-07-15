import React, { useState } from 'react'
import { Box, Grid, Typography, Button, Divider, Stack, Paper } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { productData } from "./Data";




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const ProductCard = ({ productImg, productName, productPrice, productDescription, productRating }) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box onClick={handleClickOpen}>
        <Button>
          <Paper elevation={3}
            sx={{
              height: "100%",
              // border: "1px solid rgba(1,1,1,0.2)",
              color: "rgba(1,1,1,0.5)",
              fontWeight: "900",
              maxHeight: "350px",
              height: "330px",
              width: {
                xs: "200px",
                md: "250px",
              },
              minHeight: "220px",
              transform: 'scale(.94)',
              display: "flex",
              flexDirection: "column",
              padding: "8px",
              textAlign: "center",
              "&:hover": {
                transform: 'scale(1)',
                // border: "1px solid rgba(1,1,1,0.2)",
                color: "black",
                cursor: "pointer",
                transition: '0.7s'
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              pb: 2,
            }}
          >

            <img
              src={productImg}
              alt={productName}
              style={{
                objectFit: "contain",
                width: "200px",
                height: "200px",
                maxHeight: "80vh",
                marginBottom: '15px'
              }}
            />
            <Typography className="active-tv-font" noWrap={true} width={"100%"} fontSize="9px">{productName}</Typography>
            <Typography className="active-tv-font" fontSize="10px" sx={{ mt: 1 }}>{productPrice}</Typography>


          </Paper>
        </Button>
      </Box>

      <Dialog
        fullScreen
        // sx={{height:'90vh'}}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >

        <Box sx={{ width: '100%', height: '50px', background: 'grey', display: 'flex', alignItems: 'center', pl: 2 }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon sx={{ color: 'white' }} />
          </IconButton>
        </Box>


        <Grid container spacing={2} columns={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',pt:2}}>

          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <img
              src={productImg}
              alt={productName}
              style={{
                objectFit: "contain",
                width: "250px",
                height: "300px",
                maxHeight: "80vh",
                marginBottom: '15px'
              }}
            />

            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent:'center',width:'100%',pl:5,pr:5}}>
              <Typography className="active-tv-font" noWrap={true} width={"100%"} fontSize="13px"align="center" sx={{mb:2}}>{productName}
              </Typography>

              <Typography align="center" className="active-tv-font"  width={"100%"} fontSize="9px" lineHeight={'15px'}>{productDescription}
              </Typography>
            </Box>
          </Grid>


          <Grid item xs={6} sx={{alignItems: 'center',height:'100vh',pr:3,pl:3,display: 'flex', justifyContent: 'center'}}>
              <Box sx={{background:'grey',height:'100%',width:'80%',display: 'flex', alignItems: 'center', justifyContent: 'center',flexDirection: 'column'}}></Box>
          </Grid>
        </Grid>


      </Dialog>

    </Box>
  )
}

export default ProductCard