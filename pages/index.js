import { useContext} from "react";
import HomeBanner from "../components/home-banner";
import { Box } from "@mui/system";
import Homeshows from "../components/home-shows/Homeshows";
import HslPlayer from "../components/streamPlayer"
import latestVid from "../components/home-shows/Latest-video.json"
import { ShowsContext } from "../context/ShowContext";
import { USER_CONTEXT } from '../context/MainContext'


export default function Home() {

  const { shows } = useContext(ShowsContext);
  const { updateAttributes } = useContext(USER_CONTEXT);
  const homeshow = shows.setCatergorySizeAndType
  console.log("amazing shows that michee likes!!=>",homeshow)
 
  return (
    <Box sx={{background:'#111', paddingBottom: '70px'}}>
      <HomeBanner />
      {
        homeshow ? homeshow.map((item,index)=>(
          <Homeshows key={index} latestVid={latestVid} height={item.height} width={item.width}  title={item.categoryName} />
        
        )):""
       
      }
<Box sx={{display:'flex', flexDirection:'column', margin:'0 auto', width:'300px', height:'300px', color:'#fff', gap:4}}>
       update attributes here

     <button onClick={()=> updateAttributes('schad_newName2', 'schadnewEmail@gmail2')}>
            update the attributes
     </button>
</Box>




    </Box>
  );
}


