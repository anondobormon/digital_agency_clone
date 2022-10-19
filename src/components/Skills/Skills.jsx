import React from "react";
import { images } from "../../utils/demoData";
import "./Skills.scss";

export default function Skills() {
  return (
    <div>
      <div className="skills">
        <div className="flex">
          <div className="left">
            <div className="img_wrapper">
              <img src={images.video_bg} alt="" />
            </div>
            <div className="overlay"></div>
            <div className="icon_wrapper">
              <i class="fa-solid fa-play"></i>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <h4>OUR SKILL</h4>
              <div className="space20"></div>
              <h3 className="title">
                <span>Orixy</span> is the best company for skills
              </h3>
              <div className="space25"></div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ut
                accusamus pariatur possimus, rerum tempora.
              </p>

              <div className="space25"></div>

              <div className="skill_slider">
                <div className="item">
                  <div className="sub_title">
                    <h4>Creativity</h4>
                    <h4>92%</h4>
                  </div>
                  <div className="progress_bar"></div>
                </div>
                <div className="item">
                  <div className="sub_title">
                    <h4>Work Management</h4>
                    <h4>92%</h4>
                  </div>
                  <div className="progress_bar"></div>
                </div>
                <div className="item">
                  <div className="sub_title">
                    <h4>Skill</h4>
                    <h4>92%</h4>
                  </div>
                  <div className="progress_bar"></div>
                </div>
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
                  2k+ Real Clients, Explore Now{" "}
                  <span>
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                </p>
              </div>

              <div className="space25"></div>

              <button className="button">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
