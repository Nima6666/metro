import hotelInteriorImg from "/interior1.webp";
import hotelInteriorImg1 from "/interior.png";
import barImg from "/bar.webp";
import viewImg from "/view.jpg";

import { IoFastFood } from "react-icons/io5";
import { MdOutlineRoomService } from "react-icons/md";
import { MdMovie } from "react-icons/md";

export const carouselData = [
  {
    image: hotelInteriorImg,
    text: "Experience Luxurious Accommodations & Exquisite Interior Design.",
  },
  {
    image: hotelInteriorImg1,
    text: "Discover The Perfect Blend Of Comfort & Style In Our Rooms.",
  },
  {
    image: barImg,
    text: "Relax & Unwind At Our Elegant Bar With A Wide Selection Of Beverages.",
  },
  {
    image: viewImg,
    text: "Enjoy Breathtaking Views & Create Lasting Memories.",
  },
];

export const serviceData = [
  {
    title: "Food & Beverages",
    elem: <IoFastFood size={50} />,
    text: "Delicious food and refreshing beverages served with care and quality.",
  },
  {
    title: "Accommodation",
    elem: <MdOutlineRoomService size={50} />,
    text: "Comfortable rooms and top-notch service to make your stay enjoyable.",
  },
  {
    title: "Entertainment",
    elem: <MdMovie size={50} />,
    text: "Exciting entertainment options to keep you entertained throughout your visit.",
  },
];
