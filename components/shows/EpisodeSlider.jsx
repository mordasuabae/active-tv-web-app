import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function EpisodeSlider({ num, data }) {
  return (
    <>
      <Swiper
        style={{ height: "300px" }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        autoplay
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {data.map((episode) => {
          return (
            <>
              <SwiperSlide style={styles.container}>
                <Box
                  sx={{
                    ...styles.block,
                    background: `url(${episode.img})`,
                    backgroundSize: "cover",
                  }}
                >
                  <Box sx={styles.play}>
                    <Typography
                      color={"#fff"}
                      variant="h3"
                      fontSize={14}
                      className="active-tv-font"
                    >
                      Play
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
              {/* <Typography
                sx={{ display: "block" }}
                color={"#fff"}
                variant="h3"
                fontSize={14}
                className="active-tv-font"
              >
              episode {num}
              </Typography> */}
            </>
          );
        })}
      </Swiper>
    </>
  );
}

const styles = {
  container: {
    width: "300px",
    borderRadius: "20px",
  },
  block: {
    // border:'1px solid red',
    height: "250px",
    width: "100%",
    borderRadius: "20px",
    display: "flex",
    alignItems: "flex-end",
  },
  play: {
    background: "rgba(0,0,0,0.7)",
    height: "40px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
};
