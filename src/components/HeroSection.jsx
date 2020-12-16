import React, { useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import Aos from "aos";
import "aos/dist/aos.css";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  buttonExistence,
  linkBool,
}) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
    >
      <div className="container">
        <div
          className="row home__hero-row"
          style={{
            display: "flex",
            flexDirection: imgStart === "start" ? "row-reverse" : "row",
          }}
        >
          <div className="col">
            <div
              className="home__hero-text-wrapper"
              data-aos={imgStart === "start" ? "fade-left" : "fade-right"}
            >
              <div className={lightBg ? "top-line1" : "top-line"}>
                {" "}
                {topLine}{" "}
              </div>
              <h1 className={lightBg ? "heading dark" : "heading"}>
                {headLine}
              </h1>
              <p
                className={
                  lightTextDesc
                    ? "home__hero-subtitle"
                    : "home__hero-subtitle dark "
                }
              >
                {" "}
                {description}{" "}
              </p>

              {buttonExistence && (
                <Link to={linkBool ? "/" : "/"}>
                  <div
                    data-aos={
                      imgStart === "start" ? "fade-up-left" : "fade-up-right"
                    }
                  >
                    <Button
                      buttonSize="btn--wide"
                      buttonColor="blue"
                      data-aos="fade-left"
                    >
                      {" "}
                      {buttonLabel}{" "}
                    </Button>
                  </div>
                </Link>
              )}
            </div>
          </div>
          <div className="col">
            <div
              className="home__hero-img-wrapper"
              data-aos={imgStart === "start" ? "fade-right" : "fade-left"}
            >
              <img src={img} alt={alt} className="home__hero-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
