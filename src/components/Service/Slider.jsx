// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { data } from "../../utils/demoData";
import "./Services.scss";

export default function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={40}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          720: {
            slidesPerView: 2,
            spaceBetween: 40,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },

          1400: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {data.slider.map((item, index) => (
          <SwiperSlide key={index}>
            <div class={`service_card ${item.class}`}>
              <div class="service_icon">{item.icon}</div>
              <div class="content_wrapper">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
