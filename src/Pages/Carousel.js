import React from "react";
import "./Carousel.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import slidesShow from "./Cardcomp";

function Carousel() {

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 900;
  }; 
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 900;
  };

  return (
    <>
      <div id="main-curousel">
        {/* md left arrow icon  */}
        <MdChevronLeft
          size={100}
          className="slider-icon-left left "
          onClick={slideLeft}
        />
        <div className="slider" id="slider">
          {slidesShow.map((slide, index) => {
            return (
              <div className="slider-card" key={index}>
                <div
                  className="slider-card-image"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
                <p className="slider-card-title">{slide.title}</p>
                <p className="slider-card-description">{slide.description}</p>
              </div>
            );
          })}
          {/* <Card
                prodname="Dress1"
                price="$800"
                /> */}
        </div>
        {/* md right arrow icon  */}
        <MdChevronRight
          size={100}
          className="slider-icon-right right"
          onClick={slideRight}
        />
      </div>
    </>
  );
}

export default Carousel;
