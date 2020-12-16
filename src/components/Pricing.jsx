import React from "react";
import Button from "./Button";
import "./Pricing.css";
import { MdComputer } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";
import { DiAndroid } from "react-icons/di";

import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Pricing</h1>
          <div className="pricing__container">
            {/* <Link to="/services" className="pricing__container-card"> */}
            <div className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <MdComputer />
                </div>
                <h3>Web Development</h3>
                <h4>$500</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                  <li>Front End UI Designing</li>
                  <li>Backend Development</li>
                  <li>Full Stack Development</li>
                </ul>
                {/* <Button buttonSize="btn--wide" buttonColor="primary">
                  Choose Plan
                </Button> */}
              </div>
              {/* </Link> */}
            </div>
            {/* <Link to="/services" className="pricing__container-card"> */}
            <div className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <DiAndroid />
                </div>
                <h3>App Development</h3>
                <h4>$500</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                  <li>Front End App Designing</li>
                  <li>Flutter , Android , Kotlin</li>
                  <li>Full Stack App Development</li>
                </ul>
                {/* <Button buttonSize="btn--wide" buttonColor="blue">
                  Choose Plan
                </Button> */}
              </div>
              {/* </Link> */}
            </div>
            {/* <Link to="/services" className="pricing__container-card"> */}
            <div className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <FcBusinessman />
                </div>
                <h3>Digital Marketing</h3>
                <h4>$400</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                  <li>Social Media Marketing</li>
                  <li>SEO</li>
                  <li>Business Management</li>
                </ul>
                {/* <Button buttonSize="btn--wide" buttonColor="primary">
                  Choose Plan
                </Button> */}
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
