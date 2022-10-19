import "./Blogs.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "../../utils/demoData";

export default function Blogs() {
  return (
    <div>
      <div className="blogs">
        <div className="container">
          <h4>OUR BLOGS</h4>
          <h3 className="title">
            <span>Latest</span> Blogs & Articles
          </h3>
          <div className="space25"></div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
            dolorem nihil eos voluptatem quo fugiat voluptates similique
            eligendi sunt porro, vitae?
          </p>

          <div className="space50"></div>

          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            spaceBetween={40}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="blog_card">
                <div className="category">Software</div>
                <div className="space25"></div>
                <p>26 December 2022</p>

                <h4>No need to talk with a sales person</h4>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Recusandae fugit voluptatum, accusantium aliquam inventore
                  alias nihil voluptate dolorem rem ratione.
                </p>
                <div className="space25"></div>

                <button className="button">READ MORE</button>

                <div className="blog_img">
                  <img src={images.blg7} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog_card">
                <div className="category">Software</div>
                <div className="space25"></div>
                <p>26 December 2022</p>

                <h4>No need to talk with a sales person</h4>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Recusandae fugit voluptatum, accusantium aliquam inventore
                  alias nihil voluptate dolorem rem ratione.
                </p>
                <div className="space25"></div>

                <button className="button">READ MORE</button>

                <div className="blog_img">
                  <img src={images.blg7} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog_card">
                <div className="category">Software</div>
                <div className="space25"></div>
                <p>26 December 2022</p>

                <h4>No need to talk with a sales person</h4>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Recusandae fugit voluptatum, accusantium aliquam inventore
                  alias nihil voluptate dolorem rem ratione.
                </p>
                <div className="space25"></div>

                <button className="button">READ MORE</button>

                <div className="blog_img">
                  <img src={images.blg7} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
