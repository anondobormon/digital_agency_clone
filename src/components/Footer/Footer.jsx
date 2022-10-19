import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="top">
          <div className="container">
            <div className="flex">
              <div>
                <h2>Want to consult with us?</h2>
                <button className="button">
                  Contact With Us{" "}
                  <span>
                    <i class="fa-solid fa-right-long"></i>
                  </span>{" "}
                </button>
              </div>

              <div className="divider">
                <span></span>
              </div>
              <div>
                <h2>Where will your career take you?</h2>
                <button className="button">
                  Make Your Career{" "}
                  <span>
                    <i class="fa-solid fa-right-long"></i>
                  </span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="container">
            <div className="flex">
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                  minima nobis, voluptatibus eum inventore nostrum?
                </p>
              </div>

              <div>
                <div className="email">
                  <input type="text" placeholder="Your email address" />

                  <button className="button">SUBSCRIBE</button>
                </div>
                <div className="checkbox_area">
                  <input type="checkbox" name="" id="checkbox2" />
                  <label htmlFor="checkbox2">
                    I have read the <span>Privacy Policy </span>and agree to its
                    terms.{" "}
                  </label>
                </div>
                <div className="icons">
                  <ul>
                    <li>
                      <i class="fa-brands fa-facebook-f"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-linkedin-in"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-instagram"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-youtube"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="horizontal_divider"></div>
            <div className="copy_wright">
              @2022 Orxiy - Multipurpose. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
