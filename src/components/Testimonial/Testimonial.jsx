import React from "react";
import "./Testimonial.scss";
import TestimonialSlider from "./TestimonialSlider";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="flex">
          <div className="left">
            <h4>CLIENTS TESTIMONIAL</h4>
            <div className="space25"></div>

            <h3 className="title">
              All The white <span>maintaining </span> a human approach to our
              clients.
            </h3>

            <div className="space25"></div>
            <div className="space25"></div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              eligendi asperiores debitis ut, ea quia velit cupiditate est quam
              atque fuga vero earum numquam adipisci corporis, officiis unde, id
              ipsa?
            </p>

            <div className="space50"></div>

            <button className="button">Hir Us Today</button>
          </div>

          <div className="right">
            <div className="slider">
              <TestimonialSlider />
            </div>
            <div className="bg_block"></div>
          </div>
        </div>

        <div className="space50"></div>
        <div className="space50"></div>

        <div className="easy_title">Easy to get Started</div>

        <div className="grid">
          <div className="item">
            <div className="flex">
              <div className="icon_wrapper">
                <i class="fa-solid fa-check"></i>
              </div>
              <h4>Free Sign up and no additional fee.</h4>
            </div>
          </div>
          <div className="item">
            <div className="flex">
              <div className="icon_wrapper">
                <i class="fa-solid fa-check"></i>
              </div>
              <h4>Free Consultation to get started</h4>
            </div>
          </div>
          <div className="item">
            <div className="flex">
              <div className="icon_wrapper">
                <i class="fa-solid fa-check"></i>
              </div>
              <h4>Estimate Budget</h4>
            </div>
          </div>
          <div className="item">
            <div className="flex">
              <div className="icon_wrapper">
                <i class="fa-solid fa-check"></i>
              </div>
              <h4>Enjoy our services to get success</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
