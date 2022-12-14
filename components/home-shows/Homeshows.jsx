import { Typography, Box } from "@mui/material";
import ShowsCard from "./ShowsCard";
import ShowsHeader from "./ShowsHeader";
// import data from "./Latest-video.json"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { useEffect, useState } from "react";
import axios from "axios";

const Homeshows = ({ latestVid, title, height, width }) => {

  const [showsContainer , setShowsContainer] = useState([]);
// console.log(showsContainer)
  const getShows = async () => {
    const getShowsResponse = await axios.get("https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-shows");
    const results = getShowsResponse.data
    setShowsContainer(results)
    // console.log(results)
  }

  const banners = [
    "https://i.ytimg.com/an_webp/aBGGdza5biM/mqdefault_6s.webp?du=3000&sqp=CNLB45oG&rs=AOn4CLB8wsjheT5oGrhDRTU6TtYl-PLUdQ",
    "https://i.ytimg.com/an_webp/R8hXryB4fXM/mqdefault_6s.webp?du=3000&sqp=CPHK45oG&rs=AOn4CLA72vS_k2HdbA0gKQVpTg1hACbKug",
    "https://i.ytimg.com/an_webp/xXjSv-XirFE/mqdefault_6s.webp?du=3000&sqp=CMK-45oG&rs=AOn4CLByt9DUn9D9-hGl2Sod3oasGxSyUg",
    "https://i.ytimg.com/an_webp/Kpl1mWZiZbI/mqdefault_6s.webp?du=3000&sqp=CIyO45oG&rs=AOn4CLB0oVo3wY4IEhKU-dZ6KiYdyaJ4zQ"
  ]

  useEffect(()=>{
    // console.log("Running")
    getShows();
  },[])

  return (
    <Box
      sx={{
        padding: "16px 40px 32px",
      }}
    >
      <ShowsHeader title={title} />
      <Swiper
        slidesPerView={2}
        navigation={false}
        breakpoints={{
          769: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        style={{
          zIndex: 0,
          height: "auto",
          paddingTop: "21px",
          paddingBottom: "21px",
        }}
      >
        {showsContainer.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              marginRight: "10px",
              paddingRight: "12px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <ShowsCard background={banners[index]} height={height} width={width} title={item.Title} logo={item.CoverArtLarge} img={item.CoverArtLarge} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Homeshows;
