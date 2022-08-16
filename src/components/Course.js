import React, { useRef, useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home2.css";
import SlideMain from "./ScrollPages/SlideMain";
import SlideSecond from "./ScrollPages/SlideSecond";
import SlideThird from "./ScrollPages/SlideThird";
import SlideLast from "./ScrollPages/SlideLast";
import MainScrollBtn from "./Button/MainScrollBtn";

function Course() {
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
    afterChange: (current) => setPage(current),
  };

  const [page, setPage] = useState(0);
  console.log(page);
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

  const onClickHandler = (direction) => {
    if (direction === "up") {
      sliderRef?.current?.slickPrev();
    } else {
      sliderRef?.current?.slickNext();
    }
  };

  return (
    <div className="home-slick-container">
      <Slider {...settings} ref={sliderRef}>
        <div className="slick-cell">
          <SlideMain />
        </div>
        <div className="slick-cell">
          <SlideSecond />
        </div>

        <div className="slick-cell">
          <SlideThird />
        </div>

        <div className="slick-cell">
          <SlideLast />
        </div>
      </Slider>
      <MainScrollBtn page={page} onClick={onClickHandler} />
    </div>
  );
}

export default Course;