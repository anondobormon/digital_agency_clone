import React from "react";
import { images } from "../../utils/demoData";
import "./About.scss";

export default function About() {
  return (
    <div className="about">
      <div className="space50"></div>
      <div className="space50"></div>
      <div className="container">
        <div className="grid">
          <div className="left">
            <img src={images.abs1} alt="" />
            <img src={images.abs2} alt="" />
            <img src={images.abs_cir} alt="" />
            <img src={images.abs_cir} alt="" />
          </div>
          <div className="right">
            <h4>ABOUT OUR COMPANY</h4>
            <h3 className="title">Beyoned a coworking space with Orixy</h3>
            <div className="space25"></div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ut
              eaque eligendi veritatis ipsa deleniti. Maxime, doloremque
              <div className="space25"></div>
              necessitatibus! Voluptas, quibusdam porro facilis numquam
              distinctio suscipit aut voluptate similique cumque hic vero autem
              vitae eveniet temporibus tenetur sapiente sequi ipsa dicta
              <div className="space25"></div>
              doloremque libero. Ullam laborum quod earum doloribus inventore,
              beatae ipsa!
            </p>
            <div className="space25"></div>
            <div className="button">Contact Us</div>
          </div>
        </div>
      </div>
    </div>
  );
}
