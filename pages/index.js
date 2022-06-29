import FreeToWatch from "../components/free-to-watch";
import HomeBanner from "../components/home-banner";
import PopularNow from "../components/popular-now";
import { Box } from "@mui/system";

// import { Amplify, Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);




export default function Home() {
  return (
    <Box sx={{background:'#111'}}>
      <HomeBanner />
      <FreeToWatch />
      <PopularNow />
    </Box>
  );
}


