import { Link } from "react-router-dom";

export default function HamMenu({ setOpen }) {
  return (
    <div
      className="border border-black absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#000000e7] z-[100] flex justify-center items-center flex-col"
      onScroll={(e) => e.stopPropagation()}
    >
      <Link
        to="/"
        className="mx-3 font-semibold my-1 py-1 p-2 rounded-md transition-all duration-200 hover:bg-slate-700"
        onClick={() => setOpen(false)}
      >
        Home
      </Link>
      <Link
        to="/services"
        className="mx-3 font-semibold my-1 py-1 p-2 rounded-md transition-all duration-200 hover:bg-slate-700"
        onClick={() => setOpen(false)}
      >
        Services
      </Link>
      <Link
        to="/about"
        className="mx-3 font-semibold my-1 py-1 p-2 rounded-md transition-all duration-200 hover:bg-slate-700"
        onClick={() => setOpen(false)}
      >
        About
      </Link>
      <Link
        to="/contact"
        className="mx-3 font-semibold my-1 py-1 p-2 rounded-md transition-all duration-200 hover:bg-slate-700"
        onClick={() => setOpen(false)}
      >
        Contact
      </Link>
      <button className="border border-black p-3 rounded-md bg-green-700 text-xl font-semibold text-white shadow-md shadow-green-950 text-nowrap my-2">
        SIGN IN
      </button>
    </div>
  );
}
