import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import data from "../../components/shows/Season.json";
import dataTwo from "../../components/shows/Season Two.json";
import dataThree from "../../components/shows/SeasonThree.json";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsEpisode() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const liked = () => {
    toast.success("YOU HAVE LIKED THIS EPISODE",{position: toast.POSITION.TOP_RIGHT,
    autoClose: 1000, marginTop:"40px",
    
    })
  };


const disliked = () => toast.error("EPISODE HAS BEEN DISLIKED",{position: toast.POSITION.TOP_RIGHT,
autoClose: 1000, marginTop:"40px"
});



  return (
    <Box sx={{ width: '100%',background: "#111", height: "100%" }}>
      <Box style={{ marginLeft:"700px"}} className="active-tv-font">
        <div style={{ marginLeft: "50px", display:"flex", color:"white", marginBottom:"10px", fontSize:"12px", borderRadius:"5px", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <p style={{fontSize:"16px"}}>Sort by:</p> 
        </div>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ paddingLeft:"140px"}}>
        <Tab label="SEASON 1" {...a11yProps(0)} className="active-tv-font" style={{color:"white"}} />
        <Tab label="SEASON 2" {...a11yProps(1)} className="active-tv-font" style={{color:"white"}} />
        <Tab label="SEASON 3" {...a11yProps(2)} className="active-tv-font" style={{color:"white"}} />
      </Tabs>
      </Box>

     <Box>
     <TabPanel value={value} index={0}>
      <Box style={{ marginLeft: "50px", marginTop:"110px" }}>
        <Box
          style={{
            marginTop: "60px",
            alignItems: "center",
            marginLeft: "30px",
            flexDirection:"colum"
            }}>

          {
            data.map( episode => {
              return(

                <div style={{display:"flex"}}>

                <div className="Episodehover">
                  <img src={episode.img} style={{width:400, height:200, borderRadius:"25px", position:"relative",marginTop:"40px", cursor:"pointer", objectFit:"cover"}}/>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <PlayCircleOutlineIcon style={{color:"white",fontSize:"80px", marginTop:"-190px", zIndex:"1", cursor:"pointer"}}/>
                </div>

                </div>

                <div style={{marginLeft:"45px", color:"white", marginTop:"25px"}}>
                  <h4 className="active-tv-font">{episode.episodeone}</h4>
                  <p className="active-tv-font" style={{fontSize:"10px"}}>{episode.description1}</p>
                  <p className="active-tv-font" style={{fontSize:"10px"}}>{episode.description2}</p>
                  <p className="active-tv-font" style={{fontSize:"10px"}}>{episode.description3}</p>
                  <p className="active-tv-font" style={{fontSize:"10px"}}>{episode.description4}</p>
                  <Box
                  style={{
                    color: "white",
                    fontSize: "13px",
                    marginBottom: "50px",
                    marginLeft: "45px",
                    }}>
                
                <p className="active-tv-font" style={{marginLeft:"-200px", width:"400px", display:"flex", justifyContent:"center"}}>
                  <div><ThumbUpOffAltIcon style={{ color: "green",cursor: "pointer"}} onClick={liked} /></div>
                  <div><ThumbDownOffAltIcon style={{ color: "red",cursor: "pointer", marginLeft:"8px"}} onClick={disliked}/></div>
                  <ToastContainer/>
                </p>
                </Box>
                </div>
                </div>
              )
            })
          }

        </Box>
      </Box>
      </TabPanel>

      <TabPanel  value={value} index={1}>
        <Box style={{ marginLeft: "50px", marginTop:"110px" }}>
        <Box
          style={{
            marginTop: "60px",
            alignItems: "center",
            marginLeft: "30px",
            flexDirection:"colum"
            }}>

          {
            dataTwo.map( episode => {
              return(

                <div style={{display:"flex"}}>

                <div className="Episodehover">
                  <img src={episode.img} style={{width:400, height:200, borderRadius:"25px", position:"relative",marginTop:"40px", cursor:"pointer", objectFit:"cover"}}/>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <PlayCircleOutlineIcon style={{color:"white",fontSize:"80px", marginTop:"-190px", zIndex:"1", cursor:"pointer"}}/>
                </div>

                </div>

                <div style={{marginLeft:"45px", color:"white", marginTop:"25px"}}>
                  <h4 className="active-tv-font">{episode.episodeone}</h4>
                  <p className="active-tv-font" style={{fontSize:"10px"}}>{episode.description1}</p>
                  <p className="active-tv-font" style={{fontSize:"10px"}}>{episode.description2}</p>
                  <p className="active-tv-font" style={{fontSize:"10px"}}>{episode.description3}</p>
                  <p className="active-tv-font" style={{fontSize:"10px"}}>{episode.description4}</p>
                  <Box
                  style={{
                    color: "white",
                    fontSize: "13px",
                    marginBottom: "50px",
                    marginLeft: "45px",
                    }}>
                
                <p className="active-tv-font" style={{marginLeft:"-200px", width:"400px", display:"flex", justifyContent:"center"}}>
                  <div><ThumbUpOffAltIcon style={{ color: "green",cursor: "pointer"}} onClick={liked}/></div>
                  <div><ThumbDownOffAltIcon style={{ color: "red",cursor: "pointer", marginLeft:"8px"}} onClick={disliked}/></div>
                  <ToastContainer/>
                </p>
                </Box>
                </div>
                </div>
              )
            })
          }

        </Box>
      </Box>
      </TabPanel>

      <TabPanel value={value} index={2}>
       <Box style={{ marginLeft: "50px", marginTop:"110px" }}>
        <Box
          style={{
            marginTop: "60px",
            alignItems: "center",
            marginLeft: "30px",
            flexDirection:"colum"
            }}>

          {
            dataThree.map( episode => {
              return(

                <div style={{display:"flex"}}>

                <div className="Episodehover">
                  <img src={episode.img} style={{width:400, height:200, borderRadius:"25px", position:"relative",marginTop:"40px", cursor:"pointer", objectFit:"cover"}}/>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <PlayCircleOutlineIcon style={{color:"white",fontSize:"80px", marginTop:"-190px", zIndex:"1", cursor:"pointer"}}/>
                </div>

                </div>

                <div style={{marginLeft:"45px", color:"white", marginTop:"25px"}}>
                  <h4 className="active-tv-font">{episode.episodeone}</h4>
                  <p className="active-tv-font" style={{fontSize:"10px"}}>{episode.description1}</p>
                  <p className="active-tv-font" style={{fontSize:"10px"}}>{episode.description2}</p>
                  <p className="active-tv-font" style={{fontSize:"10px"}}>{episode.description3}</p>
                  <p className="active-tv-font" style={{fontSize:"10px"}}>{episode.description4}</p>
                  <Box
                  style={{
                    color: "white",
                    fontSize: "13px",
                    marginBottom: "50px",
                    marginLeft: "45px",
                    }}>
                
                <p className="active-tv-font" style={{marginLeft:"-200px", width:"400px", display:"flex", justifyContent:"center"}}>
                  <div><ThumbUpOffAltIcon style={{ color: "green",cursor: "pointer"}} onClick={liked}/></div>
                  <div><ThumbDownOffAltIcon style={{ color: "red",cursor: "pointer", marginLeft:"8px"}} onClick={disliked}/></div>
                  <ToastContainer/>
                </p>
                </Box>
                </div>
                </div>
              )
            })
          }
        </Box>
      </Box>
      </TabPanel>
     </Box>
    </Box>
  );
}
