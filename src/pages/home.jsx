import About from "./components/about";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import ContactComp from "./components/contact";
import Services from "./components/service";
import Reviews from "./components/reviews";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Services />
      <About />
      <Reviews />
      <ContactComp />
    </div>
  );
}
