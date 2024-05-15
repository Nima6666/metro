import Slider from "react-slick";
import { reviews } from "../../assets/imageData";

import reviewImg from "/interior1.webp";

export default function Reviews() {
  const settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  //   const settings = {
  //     infinite: true,
  //     speed: 1000,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     fade: true,
  //     autoplay: true,
  //     autoplaySpeed: 5000,
  //     pauseOnFocus: false,
  //     pauseOnHover: false,
  //     accessibility: false,
  //     swipe: false,
  //     arrows: false,
  //   };

  return (
    <div className="relative overflow-hidden min-h-[400px]">
      <div className="absolute h-full w-full object-cover top-0 left-0 z-10 bg-[#000000a7]"></div>
      <img
        src={reviewImg}
        className="absolute h-full w-full object-cover top-0 left-0 z-0"
      />
      <div className="z-30 w-full h-full bg-[#000000] ">
        <h1 className="text-2xl text-white font-semibold text-center my-4 z-40">
          What Our Client Says
        </h1>
        <Slider
          {...settings}
          className="container mx-auto p-2 flex items-center justify-center mb-4 z-20"
        >
          {reviews.map((data, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center z-20 "
              >
                <div className="w-[90%] h-full border border-black bg-slate-500 rounded-md text-white p-2 text-center min-h-[200px]">
                  <div className="flex justify-center items-center">
                    <img src={data.img} alt="" className="mr-4" />
                    <h3 className="text-lg font-semibold text-left">
                      {data.name}
                    </h3>
                  </div>
                  <p className="mt-3 p-4 text-center">{data.review}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
