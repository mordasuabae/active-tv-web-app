import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { Box } from "@mui/material";
import BannerItem from "./banner-item";
import { USER_CONTEXT } from "../../context/MainContext";
// import LatestShows from "../latest-shows";
import { Palette } from "@universemc/react-palette";
import FreeToWatch from "../free-to-watch";
import axios from "axios";

const HomeBanner = () => {

  const [banners , setBanners] = useState([]);
  const [haveBanners , setHaveBanners] = useState(false);

  const getShows = async () => {
    const endpoint = `https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-config`;
    const getShowsResponse = await axios.get(endpoint);
    const results = getShowsResponse.data
    // const bannerResults = await axios.get(getShowsResponse.data["configJsonData"])
    const copyOfBanners = results.BannerImageUrls
    setBanners(copyOfBanners)
    setHaveBanners(true)
    // console.log("copyOfBanners : " ,copyOfBanners)
    // console.log(bannerResults.data)
    // console.log(results);
  }
  // console.log(banners)

  useEffect(()=>{
    // console.log("Running")
    getShows();
  },[])
  return (
    <Palette
      src={
        // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s"
        "top_banner_full.jpg"
      }
    >
      {({ data, loading, error }) => {
        // console.log(data, loading, error);
        return (
          <Box
            sx={{
              minHeight: "100vh",
              maxHeight: "107vh",
              zIndex:1
              // background:data.darkVibrant
            }}
          >
            <Swiper
              pagination={{
                type: "progressbar",
              }}
              navigation={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
              style={{zIndex:0}}
            >
           {
            haveBanners && banners.map((item,index)=>{
              return(
                <SwiperSlide>
                <BannerItem
                  background={item}
                  // logo={
                  //   "https://cdn.watchcorridor.com/i/3cba7496-c740-4e28-bfdb-b45d31b5b5b9.png"
                  // }
                />
              </SwiperSlide>
              )
            })
           }
             
            </Swiper>

            <Box
              sx={{
                background:
                  "linear-gradient(to bottom,rgba(0,0,0,0.2) 0,rgba(0,0,0,0.5) 20%,rgba(0,0,0,0.7) 50%,rgba(0,0,0,0.5) 90% , rgba(0,0,0,0) 100%)",
                width: "100%",
                transform: "translateY(-150px)",
                zIndex: "1",
                position: "relative",
              }}
            >
              {/* <LatestShows /> */}
            </Box>
          </Box>
        );
      }}
    </Palette>
  );
};

export default HomeBanner;
//changedkk