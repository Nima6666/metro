import { Link } from "react-router-dom";

export default function Rooms() {
  return (
    <div className="flex justify-center items-center flex-col container mx-auto my-4">
      <h1 className="title-font md:text-lg sm:text-2xl lg:text-2xl text-2xl mb-4 font-bold text-[#8c2455] ">
        Our Rooms
      </h1>
      <div className="flex justify-around w-full flex-wrap">
        <div className="card ">
          <div className="card-inner cusShadow">
            <div className="card-front flex-col relative overflow-hidden">
              <h2
                className="text-2xl font-semibold styledText z-20 text-white w-full h-full flex justify-center items-center"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                }}
              >
                Standard Room
              </h2>
              <img
                src="/interior.png"
                className="absolute h-full w-full object-cover"
              />
            </div>
            <div className="card-back cusShadow p-4 py-8 flex flex-col items-center justify-between bg-green-200">
              <p className=" text-xl text-justify">
                The standard rooms are small and comfortable. They are the most
                reasonably priced rooms out of all the other room categories.
                They all have an attached bathroom.
              </p>
              <Link
                to="/contact"
                className="bg-yellow-400 p-2 rounded-md shadow-md shadow-yellow-600 transition-all duration-200 hover:shadow-sm hover:shadow-green-800 hover:bg-green-500 hover:text-white "
              >
                Get Details
              </Link>
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="card-inner cusShadow">
            <div className="card-front flex-col relative overflow-hidden">
              <h2
                className="text-2xl font-semibold styledText z-20 text-white w-full h-full flex justify-center items-center"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                }}
              >
                Deluxe Room
              </h2>
              <img
                src="/interior1.webp"
                className="absolute h-full w-full object-cover"
              />
            </div>
            <div className="card-back cusShadow p-4 py-8 flex flex-col items-center justify-between bg-green-200">
              <p className=" text-xl text-justify">
                The deluxe room at Metro Guest House offers a spacious and
                comfortable accommodation with modern amenities. It is elegantly
                furnished and designed to provide a luxurious stay experience.
              </p>
              <Link
                to="/contact"
                className="bg-yellow-400 p-2 rounded-md shadow-md shadow-yellow-600 transition-all duration-200 hover:shadow-sm hover:shadow-green-800 hover:bg-green-500 hover:text-white "
              >
                Get Details
              </Link>
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="card-inner cusShadow">
            <div className="card-front flex-col relative overflow-hidden">
              <h2
                className="text-2xl font-semibold styledText z-20 text-white w-full h-full flex justify-center items-center"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                }}
              >
                Premium Room
              </h2>
              <img
                src="/interior.png"
                className="absolute h-full w-full object-cover"
              />
            </div>
            <div className="card-back cusShadow p-4 py-8 flex flex-col items-center justify-between bg-green-200">
              <p className=" text-xl text-justify ">
                The premium room at Metro Guest House is a top-tier
                accommodation option, offering a blend of luxury and comfort.
                These rooms are typically larger than deluxe rooms and feature
                enhanced amenities and services.
              </p>
              <Link
                to="/contact"
                className="bg-yellow-400 p-2 rounded-md shadow-md shadow-yellow-600 transition-all duration-200 hover:shadow-sm hover:shadow-green-800 hover:bg-green-500 hover:text-white "
              >
                Get Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
