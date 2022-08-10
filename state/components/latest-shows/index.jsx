// import React, { useRef, useState } from "react";
// import { Box } from "@mui/material";
// import { LatestShowItem } from "./latest-show-item";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import SectionHeader from "../utils/SectionHeader";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Pagination, Navigation } from "swiper";

// export default function LatestShows() {
  
//   const lastestShows = [
//     {
//       thumbnail:
//         "https://active-tv-app-public-content.s3.us-east-2.amazonaws.com/video-thumbnails/AmNESIACS%2520%257C%2520Part%2520ONE-fd95f404-39e2-4da4-8113-af4eb92fa843.jpg",
//       title: "AmNesiacs Pt 1",
//     },
//     {
//       thumbnail:
//         "https://active-tv-app-public-content.s3.us-east-2.amazonaws.com/video-thumbnails/AmNESIACS%2520%257C%2520Part%2520TWO-fd95f404-39e2-4da4-8113-af4eb92fa843.jpg",
//       title: "AmNesiacs Pt 2",
//     },
//     {
//       thumbnail:
//         "https://active-tv-app-public-content.s3.us-east-2.amazonaws.com/video-thumbnails/amnesiacs-%257C-part-three-fd95f404-39e2-4da4-8113-af4eb92fa843.jpg",
//       title: "AmNesiacs Pt 3",
//     },
//   ];
//   const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11, 1, 1];
//   return (
//     <Box>
//       <Box sx={{ padding: "2px 48px" }}>
//         <SectionHeader text={"Latest Shows"} textColor={"#eee"} />
//       </Box>
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={30}
//         slidesPerGroup={4}
//         loop={false}
//         loopFillGroupWithBlank={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Navigation]}
//         className="freetowatchwiper"
//         style={{ minHeight: "150px", maxHeight: "250px", padding: "0px 48px" }}
//       >
//         {lastestShows.map((show, index) => {
//           return (
//             <SwiperSlide
//               key={index}
//               className={"show-item"}
//               style={{
//                 maxHeight: "250px",
//                 width: "100%",
//                 borderRadius: "20px",
//               }}
//             >
//               <LatestShowItem image={show.thumbnail} title={show.title} />
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </Box>
//   );
// }
