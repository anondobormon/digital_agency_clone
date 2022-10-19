import React from "react";
import "./Services.scss";
import Slider from "./Slider";

export default function Services() {
  return (
    <div className="service">
      <div className="container">
        <h4>OUR SERVICES</h4>
        <div className="space20"></div>
        <h3 className="title">
          Beyond a coworking <br /> space with <span>Orixy</span>
        </h3>

        <Slider />
      </div>
    </div>
  );
}
