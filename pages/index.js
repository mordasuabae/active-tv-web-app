import { useContext} from "react";
import HomeBanner from "../components/home-banner";
import { Box } from "@mui/system";
import Homeshows from "../components/home-shows/Homeshows";
import HslPlayer from "../components/streamPlayer"
import latestVid from "../components/home-shows/Latest-video.json"
import { ShowsContext } from "../context/ShowContext";

export default function Home() {

  const { shows } = useContext(ShowsContext);
  const homeshow = shows.setCatergorySizeAndType
  console.log("amazing shows that michee likes!!=>",homeshow)
 
  return (
    <Box sx={{background:'#111'}}>
      <HomeBanner />
      {
        homeshow ? homeshow.map((item,index)=>(
          <Homeshows key={index} latestVid={latestVid} height={item.height} width={item.width}  title={item.categoryName} />
        
        )):""
       
      }

    </Box>
  );
}


