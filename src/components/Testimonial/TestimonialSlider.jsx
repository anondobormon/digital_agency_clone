// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { data } from "../../utils/demoData";

export default function TestimonialSlider() {
  return (
    <Swiper
      spaceBetween={40}
      loop={true}
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
      slidesPerView={1}
    >
      {data.testimonial.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="testimonial_card">
            <div className="flex">
              <div className="left">
                <img src={item.img} alt="" />
              </div>
              <div className="right">
                <h3 className="title">{item.name}</h3>
                <p>{item.title}</p>
              </div>
            </div>
            <div className="space25"></div>

            <p className="text">
              {" "}
              <div className="quote_icon">
                <i class="fa-solid fa-quote-right"></i>
              </div>
              {item.text}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
