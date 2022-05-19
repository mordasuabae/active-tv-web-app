import React, { useContext, useRef, useState } from "react";
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
import LatestShows from "../latest-shows";
import { Palette } from "@universemc/react-palette";

const HomeBanner = () => {
  
  return (
    <Palette
      src={
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s"
      }
    >
      {({ data, loading, error }) => {
        console.log(data, loading, error);
        return (
          <Box
            sx={{ 
              minHeight: "100vh",
              maxHeight:'120vh',
              // background: "green",
              // accentColor: "rgb(255, 255, 128)",
              background:data.darkVibrant
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
            >
              <SwiperSlide>
                <BannerItem
                  background={
                    "https://cdn.watchcorridor.com/i/3173dc6a-9eba-4f58-b11c-43d5ad8144df.jpg"
                  }
                  logo={
                    "https://cdn.watchcorridor.com/i/3cba7496-c740-4e28-bfdb-b45d31b5b5b9.png"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <BannerItem
                  background={
                    "https://cdn.watchcorridor.com/i/7a78565c-86ac-4217-83c9-3fb2be9b0f09.jpg"
                  }
                  logo={
                    "https://cdn.watchcorridor.com/i/c9572323-988a-4773-ace9-2b6a1b997fc6.png"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <BannerItem
                  background={
                    "https://cdn.watchcorridor.com/i/19b0945d-b36c-4741-aefd-f5952c6d20fc.jpg"
                  }
                  logo={
                    "https://cdn.watchcorridor.com/i/94d71c41-71a3-4b1a-ba5c-253ec3d643e8.png"
                  }
                />
              </SwiperSlide>
            </Swiper>

            <Box
              sx={{
                background:"linear-gradient(to top,rgba(0,0,0,1) 0,rgba(0,0,0,0.7) 50%,rgba(0,0,0,0.5) 90% , rgba(0,0,0,0) 100%)",
                // "linear-gradient(to top,rgba(0,0,0,1) 0,rgba(0,0,0,0.1) 100%,rgba(0,0,0,0.1) 100%)",
                  // "linear-gradient(to top,rgba(0,0,0,1) 0,rgba(0,0,0,.5) 90%,rgba(0,0,0,0) 100%)",
                width: "100%",
                transform:'translateY(-150px)',
                // minHeight: "50vh",
                // opacity:'0.5',
                zIndex: "2",
                position: "relative",
                padding: {
                  lg: "32px 72px",
                  md: "32px 72px",
                  xs: "16px 36px",
                },
              }}
            >
              <LatestShows />
            </Box>
          </Box>
        );
      }}
    </Palette>
  );
};

export default HomeBanner;
