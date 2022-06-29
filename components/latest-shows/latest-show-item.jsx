// import React from "react";
// import { Box, Avatar, Typography, Button } from "@mui/material";
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

// const LatestShowItem = ({ title, thumbnail }) => {

//   const [open, setOpen] = React.useState(true);

//   return (
//     <Button className="show-item" sx={{
//           height: "100%",
//           padding:'0px',
//           width: "100%",
//           margin:'0 8px',
//     }}>
//           {/* backgroundImage: 
//           "url('https://media1.giphy.com/media/zyBNeRvApZxpRL2U4G/giphy.gif?cid=ecf05e4791tbue6d3irp84gjed3efvhg3krtjlz2xbeecn5a&rid=giphy.gif&ct=g')",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPostion: "center",
//           transitionDuration: "0.1ms",
//           cursor: "pointer", */}
//         {/* },
//       }} */}
//     {/* > */}
//       <Box
//         sx={{
//           height: "100%",
//           minHeight:'200px',
//           width: "100%",
//           position: "relative",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-end",
//         }}
//       >
//         <Box
//           sx={{
//             // backgroundImage:
//             //   'url("https://active-tv-app-public-content.s3.us-east-2.amazonaws.com/video-thumbnails/Jack%2520Leaper-fd95f404-39e2-4da4-8113-af4eb92fa843.jpg")',
//             backgroundImage:`url("${thumbnail}")`,
//             backgroundSize: "cover",
//             backgroundPostion: "center",
//             width: "100%",
//             height: "100%",
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//             display: "-webkit-box",
//             lineClamp: "3",
//             boxOrient: "vertical",
//             display: {
//               lg: "block",
//               md: "none",
//             },
//           }}
//         >
//           <Box sx={{
//             background:'grey',
//             color:'#111',
//             width:'50px',
//             float:'right'
//           }}>09{":"}05</Box>

//         </Box>
//         <Box
//           padding={"0 8px"}
//           sx={{
//             display: "flex",
//             width: "100%",
//             alignItems: "center",
//             height: "40%",
//             p:'8px',
//             background: "rgba(1,1,1,0.5)",
//           }}
//         >
//           <Box
//             sx={{
//               flex: "1",
//               height: "100%",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <Avatar src="" alt="Brandon Man" />
//           </Box>
//           <Typography
//             variant="p"
//             noWrap={open}
//             sx={{
//               flex: "5",
//               height: "100%",
//               fontSize: "12px",
//               fontWeight: "900",
//               color: "#eee",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             {title}
//           </Typography>
//           <PlayCircleOutlineIcon sx={{ fill:"#eee" }} />
//         </Box>
//       </Box>
//     </Button>
//   );
// };


// export default LatestShowItem