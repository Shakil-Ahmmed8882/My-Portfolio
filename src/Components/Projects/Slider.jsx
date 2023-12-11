import { useState } from "react";
import c1 from "../../assets/img/c1.png";
import c2 from "../../assets/img/c2.png";
import c3 from "../../assets/img/c3.png";
import c4 from "../../assets/img/c4.png";
import c5 from "../../assets/img/c5.png";
import c6 from "../../assets/img/c6.png";
import c7 from "../../assets/img/c7.png";
import allContest from "../../assets/img/allcontest.png";


import rest01 from "../../assets/img/rest1.png";
import rest02 from "../../assets/img/rest02.png";
import rest03 from "../../assets/img/rest03.png";
import rest04 from "../../assets/img/rest04.png";
import rest05 from "../../assets/img/rest05.png";
import rest06 from "../../assets/img/rest06.png";
import rest07 from "../../assets/img/rest07.png";
import rest08 from "../../assets/img/rest08.png";
import rest09 from "../../assets/img/rest09.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./styles.css";

export default function Slider({handleSlideChange}) {



//   const projects = [
//     {
//       title: "Project 1",
//       description: "Description for Project 1",
//       githubLink: "Link to GitHub for Project 1",
//     },
//     {
//       title: "Project 3",
//       description: "Description for Project 2",
//       githubLink: "Link to GitHub for Project 2",
//     },
//     {
//       title: "Project 4",
//       description: "Description for Project 2",
//       githubLink: "Link to GitHub for Project 2",
//     },
//     {
//       title: "Project 5",
//       description: "Description for Project 2",
//       githubLink: "Link to GitHub for Project 2",
//     },
//     {
//       title: "Project 6",
//       description: "Description for Project 2",
//       githubLink: "Link to GitHub for Project 2",
//     },
//     {
//       title: "Project 7",
//       description: "Description for Project 2",
//       githubLink: "Link to GitHub for Project 2",
//     },
    
//   ];

//   const [activeProject, setActiveProject] = useState(projects[0]);

//   const handleSlideChange = (swiper) => {
//     const activeIndex = swiper.activeIndex;
//     setActiveProject(projects[activeIndex]);
//   };

  return (
    <div className="md:flex gap-3 items-center">
      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        className="mySwiper"
      >
        <SwiperSlide className="w-1/2">
          <img src={rest01} alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-1/2">
          <img src={c4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-1/2">
          <img src={rest08} alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-1/2">
          <img src={c6} alt="" />
        </SwiperSlide>
      </Swiper>

    
    </div>
  );
}