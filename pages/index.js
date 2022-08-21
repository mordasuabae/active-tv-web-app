import FreeToWatch from "../components/free-to-watch";
import HomeBanner from "../components/home-banner";
import PopularNow from "../components/popular-now";
import { Box } from "@mui/system";



export default function Home() {

  return (
    <Box sx={{background:'#111'}}>
      <HomeBanner />
      <FreeToWatch />
      <PopularNow />
    </Box>
  );
}


