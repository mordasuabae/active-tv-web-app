import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Scrollbar } from "swiper";
import SectionHeader from "../utils/SectionHeader";
import LatestShowItem from "./latest-show-item";
import { Grid, Box, Button, Card } from "@mui/material";

const LatestShows = () => {

  const lastestShows = [
    {
      thumbnail:
        "https://active-tv-app-public-content.s3.us-east-2.amazonaws.com/video-thumbnails/AmNESIACS%2520%257C%2520Part%2520ONE-fd95f404-39e2-4da4-8113-af4eb92fa843.jpg",
      title: "AmNesiacs",
    },
    {
      thumbnail:
        "https://active-tv-app-public-content.s3.us-east-2.amazonaws.com/video-thumbnails/AmNESIACS%2520%257C%2520Part%2520TWO-fd95f404-39e2-4da4-8113-af4eb92fa843.jpg",
      title: "AmNesiacs Pt 2",
    },
    {
      thumbnail:
        "https://active-tv-app-public-content.s3.us-east-2.amazonaws.com/video-thumbnails/amnesiacs-%257C-part-three-fd95f404-39e2-4da4-8113-af4eb92fa843.jpg",
      title: "AmNesiacs Pt 3",
    },
  ];

  return (
    <Box
      id="latest-shows-swiper"
      sx={{
        transform: "translateY(-10px)",
      }}
    >
      <SectionHeader text={"Latest Shows"} textColor={"#eee"} />
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            lg: "space-between",
            xs: "flex-start",
          },
          overflowX: "auto",
          margin: "21px 0",
          width: "100%",
        }}
      >
        {lastestShows.map((show, index) => {
          return (
            <Card
              sx={{
                minWidth: "320px",
                maxWidth: "380px",
                minHeight: "200px",
                maxHeight: "320px",
                background: "transparent",
                // padding: "8px",
                margin: "8px",
              }}
            >
              <LatestShowItem
                key={index}
                title={show.title}
                thumbnail={show.thumbnail}
              />
            </Card>
          );
        })}
      </Box>

      {/* <Box sx={{
        display:'flex',
        justifyContent:'space-evenly',
        overflowX:'auto',
      }}>
      {lastestShows.map((show, index) => {
          return (
                <LatestShowItem key={index} title={show.title} thumbnail={show.thumbnail} />
          );
        })}
      </Box> */}
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop={false}
        navigation={true}
        pagination={true}
        scrollbar={{
          hide:false,
        }}
        modules={[Navigation , Scrollbar]}
        className="latest-shows-swiper"
      >
        {lastestShows.map((show, index) => {
          return (
            <SwiperSlide>
                <LatestShowItem key={index} title={show.title} thumbnail={show.thumbnail} />
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </Box>
  );
};

export default LatestShows;
