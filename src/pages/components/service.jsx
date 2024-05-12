import { useEffect, useRef, useState } from "react";
import { serviceData } from "../../assets/imageData";

import contactImg from "/interior1.webp";

export default function Services() {
  const [isPage, setIsPage] = useState(false);

  const imageRef = useRef();

  useEffect(() => {
    if (location.pathname === "/services") {
      setIsPage(true);
    } else {
      setIsPage(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    function handleParallax() {
      if (isPage && imageRef.current) {
        const translateY = window.scrollY / 1.3;
        imageRef.current.style.transform = `translateY(${translateY}px)`;
      }
    }

    window.addEventListener("scroll", handleParallax);
    return () => {
      window.removeEventListener("scroll", handleParallax);
    };
  }, [isPage]);

  return (
    <>
      {isPage && (
        <div className="h-[500px] relative overflow-hidden">
          <img
            src={contactImg}
            alt=""
            className="h-full w-full object-cover z-0 "
            ref={imageRef}
          />
          <h2 className="font-heading mb-4 font-bold tracking-tight text-white text-3xl sm:text-5xl w-full h-full absolute flex items-center justify-center top-0 bg-[#0000006b] styledText">
            Our Services
          </h2>
        </div>
      )}
      <div className="flex px-0 justify-center mt-6 flex-wrap  ">
        {serviceData.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center m-6 p-5 mb-3 w-[450px] rounded-md cusShadow  text-yellow-500 transition-all duration-300 hover:text-green-500 hover:cursor-pointer hover:-translate-y-2"
            >
              <div className="">{data.elem}</div>
              <h2 className="text-xl font-semibold m-3 text-black styledText">
                {data.title}
              </h2>
              <p className="text-center text-black">{data.text}</p>
            </div>
          );
        })}
      </div>
      {isPage && (
        <div className="px-36 mt-4">
          <p>
            Enjoy a wide selection of delicious dishes and refreshing beverages,
            served with care and attention to quality. Our food and beverages
            are sure to satisfy your taste buds and leave you feeling satisfied.
          </p>
          <p className="mt-2">
            Relax in our comfortable rooms and experience top-notch service that
            will make your stay truly enjoyable. Our accommodation is designed
            to provide you with the comfort and convenience you deserve.
          </p>
          <p className="mt-2">
            Experience exciting entertainment options that will keep you engaged
            and entertained throughout your visit. From live performances to
            interactive activities, there's something for everyone to enjoy.
          </p>
          <p className="mt-2">
            Whether you're here for a meal, a stay, or just to have fun, we're
            committed to providing you with the best experience possible.
          </p>
        </div>
      )}
    </>
  );
}
