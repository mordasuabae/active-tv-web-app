import FreeToWatch from "../components/free-to-watch";
import HomeBanner from "../components/home-banner";
import PopularNow from "../components/popular-now";
import { Box } from "@mui/system";
import { USER_CONTEXT } from "../context/MainContext";
import { useContext, useEffect } from "react";

export default function Home() {

const {ForceReload} = useContext(USER_CONTEXT)





  return (
    <Box sx={{background:'#111'}}>
      <HomeBanner />
      <FreeToWatch />
      <PopularNow />
    </Box>
  );
}


