import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Hamburger from "hamburger-react";
import HamMenu from "./hamMenu";

export default function Header() {
  const header = useRef();

  const [isOpen, setOpen] = useState(false);

  const [ham, setHam] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        header.current.setAttribute(
          "style",
          "background: rgba(0,0,0,0.7); box-shadow: 0px 5px 50px -20px black; backdrop-filter: blur(10px)"
        );
      } else {
        header.current.setAttribute(
          "style",
          "background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)); backdrop-filter: blur(0px)"
        );
      }
    }
    handleScroll();

    function handleScreenSize() {
      if (window.innerWidth < 1200) {
        setHam(true);
      } else {
        setHam(false);
      }
    }

    handleScreenSize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScreenSize);
  }, []);

  return (
    <header
      className="flex justify-between items-center px-10 md:px-16 lg:px-32 p-3 fixed top-0 z-50 w-full text-white transition-all duration-300"
      ref={header}
    >
      <div
        id="logo"
        className="text-3xl lg:text-5xl font-bold flex justify-center items-center z-[101]"
      >
        <div className="text-yellow-400 mr-2">METRO</div>
        <div className="flex flex-col">
          <div className="text-lg lg:text-xl">GUEST</div>
          <div className="text-lg lg:text-xl">HOUSE</div>
        </div>
      </div>
      {ham ? (
        <>
          <div className="z-[101]">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          {isOpen && <HamMenu setOpen={setOpen} />}
        </>
      ) : (
        <>
          <nav className="flex-[0.3] text-xl font-semibold flex justify-between">
            <Link to="/" className="mx-3">
              Home
            </Link>
            <Link to="/services" className="mx-3">
              Services
            </Link>
            <Link to="/about" className="mx-3">
              About
            </Link>
            <Link to="/contact" className="mx-3">
              Contact
            </Link>
          </nav>
          <button className="border border-black p-3 rounded-md bg-green-700 text-xl font-semibold text-white shadow-md shadow-green-950 text-nowrap">
            SIGN IN
          </button>
        </>
      )}
    </header>
  );
}
