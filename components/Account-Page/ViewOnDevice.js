// import React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Aos from "aos"
// import "aos/dist/aos.css"
// import { useEffect } from 'react'
// import Link from 'next/link';
// import { Typography } from '@mui/material';



// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === '' ? '' : '',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// const maindiv = {
//   width: "100%",
//   // height:"100vh",
//   background: "#141300",
// }

// const Appbutton = {
//   width: "175px",
//   height: "65px",
//   borderRadius: "10px",
//   border: "1px solid whitesmoke",
//   background: "#000",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   justifyContent: "space-between",
//   color: "white"
// }

// const box1 = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   justifyContent: "space-evenly",
// }
// const box2 = {
//   // display:"flex",
//   alignItems: "center",
//   justifyContent: "center",
//   flexDirection: "column",
//   lineHeight: "5px",
// }


// export default function ViewOnDevice() {
//   useEffect(() => {
//     Aos.init({ duration: 2000 });
//   }, [])


//   return (
//     <Box sx={{ flexGrow: 1 }} style={maindiv}>
//       <Grid container spacing={2}>
//         <Grid item xs={8}>
//           <Box style={{ height: "500px", background: "transparent" }}>
//             <img src="devices.png" style={{ width: "100%" }} data-aos="fade-right" />
//           </Box>
//         </Grid>

//         <Grid item xs={4} style={{ background: "transparent", border: "none" }}>
//           <Item style={{ background: "transparent", color: "white", fontFamily: "Arcade Normal" }} sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, mr: 1 }}>
//             <Typography sx={{ lineHeight: 2, fontSize: 13 }} className='active-tv-font' data-aos="fade-up">VIEW ON ANY DEVICE</Typography>
//             <Typography sx={{ lineHeight: 2, fontSize: 13 }} className='active-tv-font' data-aos="fade-up">Every episode ad-free, including new exclusive shows.</Typography>
//             <Typography sx={{ lineHeight: 2, fontSize: 13 }} className='active-tv-font' data-aos="fade-up">Higher quality than YouTube, and just as fast.</Typography>

//             <Box style={box1}>
//               <button style={Appbutton} data-aos="fade-up">
//                 <Box>
//                   <img src="playstore.png" alt="playstore" style={{ width: "45px" }} />
//                 </Box>
//                 <Box style={box2}>
//                   <Typography style={{ fontSize: "10px", opacity: "0.5" }}>GET IT ON</Typography>
//                   <Typography style={{ fontSize: "18px" }}>Google Play</Typography>
//                 </Box>
//               </button>

//               <button style={Appbutton} data-aos="fade-up">
//                 <Box>
//                   <img src="apple.png" alt="Apple store" style={{ width: "45px" }} />
//                 </Box>
//                 <Box style={box2}>
//                   <Typography style={{ fontSize: "10px", opacity: "0.5" }}>DOWNLOAD ON THE</Typography>
//                   <Typography style={{ fontSize: "20px" }}>App Store</Typography>
//                 </Box>
//               </button>
//             </Box>
//           </Item>
//         </Grid>


//         <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
//           <Grid item xs={4} sx={{ display: { xs: 'block', sm: 'block', md: 'block' }, mr: 30, pr: 29.3 }}>
//             <Box style={{
//               // backgroundImage: "url('mobile.jpg')",
//               width: "400px",
//               height: "400px",
//               backgroundSize: "cover",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               flexDirection: "column",
//               // backgroundRepeat:"no-repeat",
//               // border:"1px solid red",
//               color: "white",
//               paddingTop: "50px",
//               lineHeight: "40px",

//             }}>
//               <Box sx={{
//                 marginLeft: "30px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
//               }}>
//                 <Typography align="center" style={{ fontSize: 18 }} className='active-tv-font' data-aos="fade-up">BE A PRODUCER</Typography>
//                 <Typography variant="h6" align="center" sx={{ fontSize: 10, mt: 2, lineHeight: 2 }} className='active-tv-font' data-aos="fade-up">Directly control what your subscription dollars are</Typography>
//                 <Typography variant="h6" align="center" sx={{ fontSize: 10, mt: 2, mb: 2, lineHeight: 2 }} className='active-tv-font' data-aos="fade-up">spent on by using your Producer Points</Typography>
//                 <Link href="/produceThat" passHref={true}>
//                   <button
//                     className='active-tv-font'
//                     style={{
//                       border: "none",
//                       width: "250px",
//                       height: "50px",
//                       color: "#000",
//                       background: "#FFF203",
//                       fontWeight: "bold",
//                       cursor: "pointer",
//                       borderRadius: "25px",
//                       fontFamily: "Arcade Normal",
//                       fontSize: "10px"
//                     }}S
//                     data-aos="fade-up"
//                   >SEE IT IN ACTION</button>
//                 </Link>
//               </Box>
//             </Box>
//           </Grid>

//           <Grid item xs={8} sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, mr: 1 }}>
//             <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, mr: 1 }} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//               <img src={"https://active-tv-app-public-content.s3.us-east-2.amazonaws.com/video-thumbnails/A%2520New%2520World%2520Order%2520-fd95f404-39e2-4da4-8113-af4eb92fa843.jpg"} width={500} height={340} style={{borderRadius:"10px"}} />
//             </Box>
//           </Grid>
//         </Grid>

//       </Grid>
//     </Box>
//   );
// }
