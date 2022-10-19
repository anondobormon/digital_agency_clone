import React from "react";
import { data } from "../../utils/demoData";
import "./Contributor.scss";

export default function Contributor() {
  return (
    <>
      <div className="contributor">
        <div className="container">
          <h3 className="title">
            Over 400+ Companise Worldwide joined with Orixy
          </h3>
          <div className="flex">
            {data.contributor.map((item, index) => (
              <div key={index} className="icon">
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
