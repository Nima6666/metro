import About from "./components/about";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import ContactComp from "./components/contact";
import Services from "./components/service";
import Reviews from "./components/reviews";
import Rooms from "./components/rooms";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <div>
      <Carousel />
      <Services />
      <About />
      <Reviews />
      <Rooms />
      <ContactComp />
    </div>
  );
}
