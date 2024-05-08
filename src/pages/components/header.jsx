import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const header = useRef();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        header.current.setAttribute(
          "style",
          "background: rgba(0,0,0,0.7); box-shadow: 0px 5px 50px -20px black"
        );
      } else {
        header.current.setAttribute(
          "style",
          "background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));"
        );
      }
    }
    handleScroll();

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="flex justify-between items-center px-32 p-3 fixed top-0 z-50 w-full text-white transition-all duration-300"
      ref={header}
    >
      <div
        id="logo"
        className="text-5xl font-bold flex justify-center items-center"
      >
        <div className="text-yellow-400 mr-2">METRO</div>
        <div className="flex flex-col">
          <div className="text-lg">GUEST</div>
          <div className="text-lg">HOUSE</div>
        </div>
      </div>
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
      <button className="border border-black p-3 rounded-md bg-green-700 text-xl font-semibold text-white shadow-md shadow-green-950">
        SIGN IN
      </button>
    </header>
  );
}
