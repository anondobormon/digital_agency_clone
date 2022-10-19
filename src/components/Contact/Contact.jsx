import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <div>
      <div className="contact">
        <div className="container">
          <div className="flex">
            <div className="left">
              <div className="addresses">
                <div>
                  <h2>Office Address</h2>
                  <p>380 St Kilda Road, Melbourne VIC 3004, Australia</p>
                </div>
                <span className="vertical_bar"></span>
                <div>
                  <h2>Phone Number</h2>
                  <p>+123 (4567) 890</p>
                  <p>+123 (4567) 890</p>
                </div>
                <span className="vertical_bar"></span>

                <div>
                  <h2>Mail Address</h2>
                  <p>abcdefg@email.com</p>
                  <p>abcdefg@support.com</p>
                </div>
              </div>
            </div>
            <div className="right">
              <h2>Contact Us</h2>

              <p>
                We work with ambitious leaders who want to define the future,
                not hide from it.
              </p>

              <form action="">
                <div className="input_group">
                  <label htmlFor="">Name*</label>
                  <input type="text" placeholder="Write Name..." />
                </div>
                <div className="input_group">
                  <label htmlFor="">Mobile number*</label>
                  <input type="text" placeholder="+123 (__) ___ ___" />
                </div>
                <div className="input_group">
                  <label htmlFor="">Email Address*</label>
                  <input type="text" placeholder="help@support.com..." />
                </div>

                <div className="space25"></div>
                <input type="checkbox" className="" name="" id="checkbox" />
                <label className="checkbox" htmlFor="checkbox">
                  I have read the <span>Privacy Policy</span> and agree to its
                  terms.
                </label>
                <div className="space25"></div>

                <input
                  type="submit"
                  value="Let's Get to Work"
                  className="button"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
