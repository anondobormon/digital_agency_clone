import { images } from "../../utils/demoData";
import "./Hero.scss";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container ">
          <div className="hero_bg"></div>
          <div className="grid">
            <div className="left">
              <h4>WE ARE RESPONSIVE TO BUILD SUCCESS</h4>
              <div className="space25"></div>
              <h2 className="bigger_text">
                Build <span>Digital</span> Product Brand
              </h2>
              <div className="space50"></div>
              <p className="big_text">
                Our employees are our biggest strength. Through the combination
                of experience, loyalty and up-and-coming young prospects.
              </p>
              <div className="space50"></div>

              <div className="flex">
                <button className="button indigo">Get Started</button>

                <button className="video">
                  <div className="video_icon">
                    <div className="icon_wrapper">
                      <i class="fa-solid fa-play"></i>
                    </div>
                  </div>
                  Check Video
                </button>
              </div>
            </div>
            <div className="right">
              <div className="module">
                <h3>
                  We Have a awesome <span>Team</span>{" "}
                </h3>
                <div className="members_icon_wrapper">
                  <i class="fa-solid fa-user-group"></i>
                </div>
                <div className="members">
                  <img
                    src={images.member1}
                    alt="Members"
                    className="img_wrapper"
                  />
                  <img
                    src={images.member2}
                    alt="Members"
                    className="img_wrapper"
                  />
                  <img
                    src={images.member3}
                    alt="Members"
                    className="img_wrapper"
                  />

                  <p>
                    More{" "}
                    <span>
                      <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero_img_1">
          <img className="shape1" src={images.shape1} alt="" />
          <div className="avatar_wrapper">
            <div className="avatar">
              <img src={images.member4} alt="" />
            </div>
            <div className="icon_wrapper">
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </div>
        <div className="hero_img_2">
          <img className="shape1" src={images.shape2} alt="" />
          <div className="avatar_wrapper1">
            <div className="avatar">
              <img src={images.member5} alt="" />
            </div>
            <div className="icon_wrapper">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
          </div>
          <div className="avatar_wrapper2">
            <div className="avatar">
              <img src={images.member6} alt="" />
            </div>
            <div className="icon_wrapper">
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
