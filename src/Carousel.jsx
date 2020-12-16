import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import Button from "./components/Button";
import Item from "./Item";
import "./Carousel.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];

const Slider = () => {
  return (
    <div className="carousel">
      <Carousel breakPoints={breakPoints} focusOnSelect transitionMs={1000}>
        <Item className="carousel-items">Lorem ipsum </Item>
        <Item>Lorem ipsum </Item>
        <Item>Lorem ipsum </Item>
        <Item>Lorem ipsum </Item>
        <Item>Lorem ipsum </Item>
      </Carousel>
    </div>
  );
};

export default Slider;
