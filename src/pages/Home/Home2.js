import React, { useRef, useCallback, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home2.css";
import SlideMain from "./SlideMain";

function Home2() {
  var settings = {
    vertical: true,
    dots: false,
    dotsClass: "vertical-dots",
    arrows: false,
    infinite: false,
    speed: 500,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef();

  const scroll = useCallback(
    (y) => {
      if (y > 0) {
        return sliderRef?.current?.slickNext(); /// ? <- using description below
      } else {
        return sliderRef?.current?.slickPrev();
      }
    },
    [sliderRef]
  );
  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      scroll(e.deltaY);
    });
  }, [scroll]);

  return (
    <div className="home-slick-container">
      <Slider {...settings} ref={sliderRef}>
        <div className="slick-cell">
          <SlideMain />
        </div>

        <div className="slick-cell">
          <h3>2</h3>
        </div>
        <div className="slick-cell">
          <h3>3</h3>
        </div>
        <div className="slick-cell">
          <h3>4</h3>
        </div>
        <div className="slick-cell">
          <h3>5</h3>
        </div>
        <div className="slick-cell">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Home2;
