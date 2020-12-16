import React from "react";
import HeroSection from "../../HeroSection";
import {
  HomeObjOne,
  homeObjThree,
  homeObjTwo,
  homeObjFour,
  homeObjFive,
} from "./Data";
import Pricing from "../../Pricing";
import Slider from "../../../Carousel";

function Home() {
  return (
    <div>
      <HeroSection {...HomeObjOne} />
      <HeroSection {...homeObjThree} />

      <Slider />
      <Pricing />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjFive} />

      <HeroSection {...homeObjFour} />
    </div>
  );
}

export default Home;
