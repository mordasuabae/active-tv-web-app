import react from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { PopularNowItem } from "../../popular-now/popular-item";
import GreenlightSwiper from "./GreenlightSwiper";

const Whatlive = () => {
  return (
    <Box sx={{ ...styles.container }}>
      <Box style={styles.header}>
        <Typography
          sx={{ fontWeight: "bold"}}
          color="#fff"
          fontSize={20}
          variant="h3"
          textTransform={"uppercase"}
          letterSpacing={"2px"}
          align={'center'}
        >
          whats's live
        </Typography>
      </Box>

      <Grid container>
        <Grid
          sx={{ ...styles.item, ...styles.flexCenter }}
          item
          sm={4}
          xs={12}
          md={2}
        >
          <Box sx={{ ...styles.seasonHead }}>
            <img
              style={styles.seasonCover}
              src={"greenlightp1.jpg"}
              alt="season-cover"
            />
          </Box>
        </Grid>
        <Grid sx={{ ...styles.item }} item sm={8} xs={12} md={10}>
          <Box sx={styles.title}>
            {/* <Typography variant="h3" fontSize={20} color="#FFF203"> */}
            <Typography variant="h3" fontSize={20} color="#32a453">
              WATCH SECOND SEASON {">"}
            </Typography>
          </Box>
          <Box sx={{ ...styles.itemText }}>
            <Typography
              variant="h3"
              color="#fff"
              fontWeight={"bold"}
              fontSize={14}
            >
              Your exclusive studio vlog with over 100 Episodes in Season One!
            </Typography>
          </Box>
          <GreenlightSwiper />
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: "50px" }}>
        <Grid
          sx={{ ...styles.item, ...styles.flexCenter }}
          item
          sm={4}
          xs={12}
          md={2}
        >
          <Box sx={{ ...styles.seasonHead }}>
            <img
              style={styles.seasonCover}
              src={"greenlightp2.jpg"}
              alt="season-cover"
            />
          </Box>
        </Grid>
        <Grid sx={{ ...styles.item }} item sm={8} xs={12} md={10}>
          <Box sx={styles.title}>
            {/* <Typography variant="h3" fontSize={20} color="#FFF203"> */}
            <Typography variant="h3" fontSize={20} color="#32a453">
              WATCH SECOND SEASON {">"}
            </Typography>
          </Box>
          <Box sx={{ ...styles.itemText }}>
            <Typography
              variant="h3"
              color="#fff"
              fontWeight={"bold"}
              fontSize={14}
            >
              Your exclusive studio vlog with over 100 Episodes in Season One!
            </Typography>
          </Box>
          <GreenlightSwiper />
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: "50px" }}>
        <Grid
          sx={{ ...styles.item, ...styles.flexCenter }}
          item
          sm={4}
          xs={12}
          md={2}
        >
          <Box sx={{ ...styles.seasonHead }}>
            <img
              style={styles.seasonCover}
              src={"greenlightp3.jpg"}
              alt="season-cover"
            />
          </Box>
        </Grid>
        <Grid sx={{ ...styles.item }} item sm={8} xs={12} md={10}>
          <Box sx={styles.title}>
            {/* <Typography variant="h3" fontSize={20} color="#FFF203"> */}
            <Typography variant="h3" fontSize={20} color="#32a453">
              WATCH SECOND SEASON {">"}
            </Typography>
          </Box>
          <Box sx={{ ...styles.itemText }}>
            <Typography
              variant="h3"
              color="#fff"
              fontWeight={"bold"}
              fontSize={14}
            >
              Your exclusive studio vlog with over 100 Episodes in Season One!
            </Typography>
          </Box>
          <GreenlightSwiper />
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: "50px" }}>
        <Grid
          sx={{ ...styles.item, ...styles.flexCenter }}
          item
          sm={4}
          xs={12}
          md={2}
        >
          <Box sx={{ ...styles.seasonHead }}>
            <img
              style={styles.seasonCover}
              src={"greenlightp4.jpg"}
              alt="season-cover"
            />
          </Box>
        </Grid>
        <Grid sx={{ ...styles.item }} item sm={8} xs={12} md={10}>
          <Box sx={styles.title}>
            {/* <Typography variant="h3" fontSize={20} color="#FFF203"> */}
            <Typography variant="h3" fontSize={20} color="#32a453">
              WATCH SECOND SEASON {">"}
            </Typography>
          </Box>
          <Box sx={{ ...styles.itemText }}>
            <Typography
              variant="h3"
              color="#fff"
              fontWeight={"bold"}
              fontSize={14}
            >
              Your exclusive studio vlog with over 100 Episodes in Season One!
            </Typography>
          </Box>
          <GreenlightSwiper />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Whatlive;

const styles = {
  container: {
    // border: "1px solid red",
    minHeight: "800px",
    padding: "20px 100px",
  },
  header: {
    // border: "1px solid red",
    display: "flex",
    // alignItems:'center',
    // justifyContent:'center',
    padding: {
      md:'20px 0',
      sm:'0 10px',
      xs:'0 30px'
    },
    height: "70px",
    width:'100%',
    alignItems: {
      md:'center',
      xs:'center'
    },
    justifyContent: {
      md: "center",
      sm: "center",
      xs: "center",
    },
  },
  GridContainer: {
    marginTop: {
      md: "",
    },
  },
  item: {
    // border: "1px solid blue",
    minHeight: {
      md: "400px",
      sm: "",
    },
    padding: '20px 0',
    // border:'1px solid red'
  },
  seasonHead: {
    // border: "1px solid violet",
    height: "350px",
    width: "200px",
    borderRadius: "20px",
    backgroundSize: "cover",
  },
  flexCenter: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: {
      md: "flex-start",
      sm: "flex-start",
      xs: "center",
    },
  },
  seasonCover: {
    with: "100%",
    height: "100%",
    borderRadius: "inherit",
  },
  title: {
    // border:'1px solid red',
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  itemText: {
    //  border:'1px solid red',
     padding: '15px 0',
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  swiperCover: {
    // border:'1px solid red',
    minHeight: "270px",
    overflowX: "scroll",
  },
};

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function Whatlive() {
//   return (
//     <Box>
//         <Box style={{width:"400px", height:"40px",padding:"100px", color:"white", fontFamily:"sans-serif"}}>
//         <Typography sx={{ fontSize:"26px"}}>WHAT'S LIVE</Typography>
//         </Box>

//     <Box sx={{padding:"100px",height:"410px", marginTop:"-100px" , border:'1px solid red'}}>
//       <Grid container spacing={1} style={{display:"flex"}}>
//         <Grid item xs={12} sm={8} md={6} lg={2}>
//           <Item style={{height:"300px", width:"168.75px", borderRadius:"25px",  backgroundImage: "url('greenlightp1.jpg')", backgroundSize:"cover"}}>
//           </Item>
//         </Grid>
//         <Box style={{flexDirection:"column", padding:"20px"}}>
//         <Box>
//             <h3 style={{color:"#FFF203", fontFamily:"sans-serif"}}> WATCH SECOND SEASON {">"} </h3>
//             <Typography style={{color:"#FFFFFF", fontFamily:"sans-serif", fontSize:"19px"}}>ur exclusive studio vlog with over 100 Episodes in Season One!</Typography>
//         </Box>
//         <Box>
//         <GreenlightSwiper/>
//         </Box>
//         </Box>
//       </Grid>
//     </Box>

//     <Box sx={{ flexGrow: 1 , padding:"100px" , height:"410px", marginTop:"-20px"}}>
//       <Grid container spacing={1} style={{display:"flex"}}>
//         <Grid item xs={12} sm={8} md={6} lg={2}>
//           <Item style={{height:"300px", width:"168.75px", borderRadius:"25px",  backgroundImage: "url('greenlightp2.jpg')", backgroundSize:"cover"}}>
//           </Item>
//         </Grid>
//         <Box style={{flexDirection:"column", padding:"20px"}}>
//         <Box>
//             <h3 style={{color:"#FFF203", fontFamily:"sans-serif"}}> WATCH SECOND SEASON {">"} </h3>
//             <Typography style={{color:"#FFFFFF", fontFamily:"sans-serif", fontSize:"19px"}}>After over 100 episodes in Season One, we are incredibly excited to roll</Typography>
//         </Box>
//         <Box>
//         <GreenlightSwiper backgroundImage={'greenlight1.jpg'} text={'watch the latest news'} time={'19:00'}/>
//         </Box>
//         </Box>
//       </Grid>
//     </Box>

//     <Box sx={{ flexGrow: 1 , padding:"100px", marginTop:"-20px"}}>
//       <Grid container spacing={1} style={{display:"flex"}}>
//         <Grid item xs={12} sm={8} md={6} lg={2}>
//           <Item style={{height:"300px", width:"168.75px", borderRadius:"25px",  backgroundImage: "url('greenlightp3.jpg')", backgroundSize:"cover"}}>
//           </Item>
//         </Grid>
//         <Box style={{flexDirection:"column", padding:"20px"}}>
//         <Box>
//             <h3 style={{color:"#FFF203", fontFamily:"sans-serif"}}> WATCH FIRST SEASON {'>'} </h3>
//             <Typography style={{color:"#FFFFFF", fontFamily:"sans-serif", fontSize:"19px"}}>A five-part masterclass diving deep into our approach to creativity, and the techniques</Typography>
//         </Box>
//         <Box>
//         <GreenlightSwiper/>
//         </Box>
//         </Box>
//       </Grid>
//     </Box>

//     <Box sx={{ flexGrow: 1 , padding:"100px", marginTop:"-140px"}}>
//       <Grid container spacing={1} style={{display:"flex"}}>
//         <Grid item xs={12} sm={8} md={6} lg={2}>
//           <Item style={{height:"300px", width:"168.75px", borderRadius:"25px",  backgroundImage: "url('greenlightp4.jpg')", backgroundSize:"cover"}}>
//           </Item>
//         </Grid>
//         <Box style={{flexDirection:"column", padding:"20px"}}>
//         <Box>
//             <h3 style={{color:"#FFF203", fontFamily:"sans-serif"}}> WWATCH CAMPAIGN ONE {">"} </h3>
//             <Typography style={{color:"#FFFFFF", fontFamily:"sans-serif", fontSize:"19px"}}>A Dungeons & Dragons show unlike any other, packed with adventure, vfx, and more!</Typography>
//         </Box>
//         <Box>
//         <GreenlightSwiper/>
//         </Box>
//         </Box>
//       </Grid>
//     </Box>
//     </Box>

//   );
// }
