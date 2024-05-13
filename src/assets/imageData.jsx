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

export const reviews = [
  {
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVQvMRtfCjBi0YAfdrNF3Uaf6D94-4LkzQ_WX3Z3ogtnVzA-AAbHw=w60-h60-p-rp-mo-ba3-br100",
    name: "Niraj Dhakal",
    review: "Wonderful and Budget friendly.",
  },
  {
    img: "https://lh3.googleusercontent.com/a-/ALV-UjXGN8x_83xiiifRjjIac7IPPT9He4Rm0VWhTjpS-J_09RXlVT6w=w60-h60-p-rp-mo-ba5-br100",
    name: "Nawaraj Jaisi",
    review:
      "It's well manage guest house to stay here and cost of the room and food is minimum but services are much better. This guest house offer only vegetarian foods only.",
  },
  {
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVdV4FN4oOTzNlzIbNpd-5P5HNaBWJtTaG3EJb19sSfv2gaQIg=w60-h60-p-rp-mo-br100",
    name: "Dr. Ram Krishna Acharya",
    review: "Clean, affordable with good food and plenty of parking space !",
  },
  {
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVP9-Selyq5GZEbisBsTCSRB9ek3UnEKSOlCr3IQfoZtfVlgdeHsA=w60-h60-p-rp-mo-ba5-br100",
    name: "Mala Kushya (Mk vlogs)",
    review:
      "Best place in biratnagar , good place under Budget safe and hygiene",
  },
  {
    img: "https://lh3.googleusercontent.com/a/ACg8ocKMqOLAIzZTNoO-er8kXTdbDruWTDOJKFxabMvKru8_nFSZNw=w60-h60-p-rp-mo-br100",
    name: "Surya Narayan Behera",
    review: "I love forest as well as lonely environment.",
  },
  // {
  //   img: "https://lh3.googleusercontent.com/a-/ALV-UjVQvMRtfCjBi0YAfdrNF3Uaf6D94-4LkzQ_WX3Z3ogtnVzA-AAbHw=w60-h60-p-rp-mo-ba3-br100",
  //   name: "",
  //   review: "Wonderful and Budget friendly.",
  // },
];
