import hotelInteriorImg from "/interior1.webp";
import hotelInteriorImg1 from "/interior.png";
import barImg from "/bar.webp";
import viewImg from "/view.jpg";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isPage, setIsPage] = useState(false);

  const imageRef = useRef();

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

  return (
    <div className="relative">
      {isPage && (
        <div className="h-[500px] relative overflow-hidden">
          <img
            src={viewImg}
            alt=""
            className="w-full z-0 transform -top-3/4 absolute"
            ref={imageRef}
          />
          <h2 className="font-heading mb-4 font-bold tracking-tight text-white text-3xl sm:text-5xl w-full h-full absolute flex items-center justify-center top-0 bg-[#0000006b] styledText">
            About Us
          </h2>
        </div>
      )}
      <div className="px-32 flex flex-wrap py-24 justify-center items-start">
        <div
          id="images"
          className="relative flex-1 min-h-[50vh] flex justify-center items-center mr-3 border border-black w-[1000px]"
        >
          <div className="perspective-hover-container">
            <img
              src={hotelInteriorImg}
              alt=""
              className="absolute w-[500px] top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 rounded-md perspective-hover-item"
            />
            <img
              src={hotelInteriorImg1}
              alt=""
              className="absolute w-[500px] top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-1/2 rounded-md perspective-hover-item"
            />
            <img
              src={barImg}
              alt=""
              className="absolute w-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 rounded-md perspective-hover-item"
            />
            <img
              src={viewImg}
              alt=""
              className="absolute w-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 rounded-md perspective-hover-item"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-around">
          {!isPage && (
            <h1 className="title-font md:text-lg sm:text-2xl lg:text-2xl text-xl mb-4 font-bold text-[#8c2455] ">
              About Us
            </h1>
          )}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            delectus nulla explicabo dicta placeat, dolorum aperiam aut aliquam
            illo laudantium nemo fuga quos libero beatae quo quibusdam odio
            nostrum sint dolor nobis accusamus dolores dolorem? Vitae
            necessitatibus dolores laudantium aliquam consequuntur numquam aut
            fugiat. Quam similique omnis id cupiditate rem? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Dolorum aperiam unde eligendi
            voluptas magnam natus repellat, possimus nesciunt nisi illum,
            praesentium provident, dolore eaque ducimus mollitia tempora?
            Asperiores doloremque ut commodi earum rerum modi reprehenderit
            itaque sit quibusdam assumenda nostrum voluptatem nisi, rem aperiam,
            repellat, dolores corporis. Labore, ducimus sint.
          </p>{" "}
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            similique quis voluptates animi nisi officia blanditiis repellat
            consectetur. Ab rerum aut perspiciatis. Ab, deserunt? Repellendus
            facilis dolorem laboriosam nesciunt iure ipsam dolorum ducimus
            magnam sed neque maiores eveniet, saepe rerum odit assumenda
            corrupti, fugiat quis porro minima itaque deleniti doloribus.
          </p>
        </div>
      </div>
    </div>
  );
}
