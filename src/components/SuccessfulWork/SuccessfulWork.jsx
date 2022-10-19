import React from "react";
import CountUp from "react-countup";
import { images } from "../../utils/demoData";
import "./SuccessfulWork.scss";

export default function SuccessfulWork() {
  return (
    <div>
      <div className="successful_work">
        <div className="container">
          <div className="flex">
            <div className="left">
              <h4>OUR SUCCESSFUL WORK</h4>
              <h3 className="title">
                Advancements and new insights are <span>Precisely</span>
              </h3>

              <div className="space25"></div>
              <div className="space25"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti eius minima asperiores corporis quam illum illo cum,
                saepe quo totam.
              </p>
              <div className="space25"></div>
              <div className="space25"></div>

              <div className="counter_block">
                <div className="item">
                  <div className="counter">
                    <CountUp end={121} /> <span>k+</span>
                  </div>
                  <p>Completed Project</p>
                </div>
                <div className="item">
                  <div className="counter">
                    <CountUp end={99} /> <span>k+</span>{" "}
                  </div>
                  <p>Completed Project</p>
                </div>
                <div className="item">
                  <div className="counter">
                    <CountUp end={234} /> <span>k</span>{" "}
                  </div>
                  <p>Completed Project</p>
                </div>
                <div className="item">
                  <div className="counter">
                    <CountUp end={188} /> <span>k+</span>{" "}
                  </div>
                  <p>Completed Project</p>
                </div>
              </div>
              <div className="space25"></div>
              <div className="space25"></div>
              <div className="send_email">
                <p>Want to Contact with Us?</p>
                <button className="button">Send Us mail</button>
              </div>
            </div>

            <div className="right">
              <img src={images.pro1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
