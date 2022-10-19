import React from "react";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <div>
      <div className="navbar ">
        <div className="top_block"></div>
        <div className="container ">
          <div className="content">
            <h2>Logo</h2>

            <div className="menu_items">
              <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICE</li>
                <li>SKILL</li>
                <li>PROJECT</li>
                <li>BLOG</li>
              </ul>
              <button className="button">About Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
