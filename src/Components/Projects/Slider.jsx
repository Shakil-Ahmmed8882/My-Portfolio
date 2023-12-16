import c4 from "../../assets/img/c4.png";
import c6 from "../../assets/img/c6.png";

import rest01 from "../../assets/img/rest1.png";
import rest08 from "../../assets/img/rest08.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./styles.css";

export default function Slider({handleSlideChange}) {


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
        // navigation={true}
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