import hotelInteriorImg from "/interior1.webp";
import hotelInteriorImg1 from "/interior.png";
import barImg from "/bar.webp";
import viewImg from "/view.jpg";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isPage, setIsPage] = useState(false);

  const imageRef = useRef();
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();
  const image4Ref = useRef();

  const hoverImageRef = useRef();

  useEffect(() => {
    if (location.pathname === "/about") {
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

  console.log(isPage);

  // function handleHover(e) {
  //   // console.log(e.clientX, e.clientY);

  //   const imageCoordinates = hoverImageRef.current.getBoundingClientRect();
  //   // console.log(
  //   //   "X: ",
  //   //   e.clientX - imageCoordinates.left - imageCoordinates.width / 2
  //   // );

  //   const midX = imageCoordinates.width / 2;

  //   const x = e.clientX - imageCoordinates.left - imageCoordinates.width / 2;

  //   const midY = imageCoordinates.height / 2;

  //   const y = e.clientY - imageCoordinates.top - imageCoordinates.height / 2;

  //   const xPer = (x / midX) * 10;

  //   const yPer = (y / midY) * 10;

  //   hoverImageRef.current.setAttribute(
  //     "style",
  //     `transform: perspective(2000px) rotateX(${yPer}deg) rotateY(${xPer}deg)`
  //   );

  //   image1Ref.current.setAttribute("style", "transform: translateZ(-100px)");
  //   image2Ref.current.setAttribute("style", "transform: translateZ(-200px)");
  //   image3Ref.current.setAttribute(
  //     "style",
  //     "transform: perspective(2000px) translateZ(-300px)"
  //   );
  //   image4Ref.current.setAttribute(
  //     "style",
  //     "transform: perspective(1000px) translateZ(-500px)"
  //   );
  // }

  const handleHover = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      hoverImageRef.current.getBoundingClientRect();
    const xPer = ((clientX - left) / width - 0.5) * 15;
    const yPer = ((clientY - top) / height - 0.5) * -15;

    hoverImageRef.current.setAttribute(
      "style",
      `transform: perspective(2000px) rotateX(${yPer}deg) rotateY(${xPer}deg)`
    );
  };

  return (
    <div className="relative">
      {isPage && (
        <div className="h-[500px] relative overflow-hidden">
          <img
            src={viewImg}
            alt=""
            className="h-full w-full object-cover z-0"
            ref={imageRef}
          />
          <h2 className="font-heading mb-4 font-bold tracking-tight text-white text-3xl sm:text-5xl w-full h-full absolute flex items-center justify-center top-0 bg-[#0000006b] styledText">
            About Us
          </h2>
        </div>
      )}
      <div className="px-2 md:px-4 lg:px-32 flex flex-col xl:flex-row lg:mt-10 lg:mb-10 mb-2 mt-2 justify-center items-start">
        <div
          id="images"
          className="mr-4 transition-all duration-100"
          ref={hoverImageRef}
          onMouseMoveCapture={(e) => handleHover(e)}
        >
          <img
            src={hotelInteriorImg}
            ref={image1Ref}
            alt=""
            className="hoverImg"
            style={{ transform: "translateZ(-100px)" }}
          />
          <img
            src={hotelInteriorImg1}
            ref={image2Ref}
            alt=""
            className="hoverImg imageAb"
            style={{ transform: "translateZ(-200px)" }}
          />
          <img
            src={barImg}
            alt=""
            className="hoverImg imageAb"
            ref={image3Ref}
            style={{ transform: "translateZ(-300px)" }}
          />
          <img
            src={viewImg}
            alt=""
            className="hoverImg imageAb"
            ref={image4Ref}
            style={{ transform: "translateZ(-500px)" }}
          />
        </div>

        <div className="flex-1 flex flex-col justify-around p-2 text-justify">
          {!isPage && (
            <h1 className="title-font md:text-lg sm:text-2xl lg:text-2xl text-xl mb-4 font-bold text-[#8c2455] ">
              About Us
            </h1>
          )}
          Welcome to Metro Guest House Metro Guest House offers a warm and
          inviting stay in the heart of the city. Located in a bustling area,
          our guest house provides a peaceful retreat for travelers seeking
          comfort and convenience. Whether you're here for business or leisure,
          our friendly staff is dedicated to making your stay enjoyable and
          memorable. Our Mission At Metro Guest House, our mission is to provide
          exceptional hospitality and a home-away-from-home experience for our
          guests. We strive to create a welcoming environment where every guest
          feels valued and cared for. Our Accommodation Our guest house features
          cozy and well-appointed rooms designed to meet the needs of modern
          travelers. Each room is tastefully furnished and equipped with
          amenities to ensure a comfortable stay. Whether you're traveling solo,
          with family, or on a business trip, we have the perfect accommodation
          for you. Explore the City Situated in a prime location, Metro Guest
          House offers easy access to the city's main attractions, shopping
          centers, and dining venues. Our staff is happy to provide
          recommendations and assistance with arranging transportation and tours
          to help you make the most of your stay. Book Your Stay Experience the
          comfort and convenience of Metro Guest House. Book your stay with us
          and enjoy a relaxing and memorable visit to our vibrant city.
        </div>
      </div>
    </div>
  );
}
