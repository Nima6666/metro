import React, { useRef } from "react";
import Slider from "react-slick";
import { carouselData } from "../../assets/imageData";

const Carousel = () => {
  const sliderRef = useRef(null);

  // const handleBeforeChange = (oldIndex, newIndex) => {
  //   const slider = sliderRef.current;
  //   if (slider) {
  //     const slides = slider.querySelectorAll(".slick-slide");
  //     slides.forEach((slide, index) => {
  //       if (index === newIndex) {
  //         slide.style.transform = `translate3d(0, ${
  //           window.scrollY * 0.3
  //         }px, 0)`;
  //       } else {
  //         slide.style.transform = "";
  //       }
  //     });
  //   }
  // };

  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    accessibility: false,
    swipe: false,
    arrows: false,
    // beforeChange: handleBeforeChange,
  };

  return (
    <Slider {...settings} className="" ref={sliderRef}>
      {carouselData.map((items, index) => {
        return (
          <div className="h-[100vh] w-[100vw] relative" key={index}>
            <img
              src={items.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div
              className="absolute top-1/2 right-1/2 text-white w-full h-full p-20 translate-x-1/2 -translate-y-1/2 text-4xl font-semibold styledText flex justify-center items-center"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
              }}
            >
              <p className="w-[60%] text-center">{items.text}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;
