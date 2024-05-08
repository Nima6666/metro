import { serviceData } from "../../assets/imageData";

export default function Services() {
  return (
    <div className="flex px-32 justify-center mt-6 flex-wrap  ">
      {serviceData.map((data, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center m-6 p-5 mb-3 w-[450px] rounded-md cusShadow  text-yellow-500 transition-all duration-300 hover:text-green-500 hover:cursor-pointer hover:-translate-y-2"
          >
            <div className="">{data.elem}</div>
            <h2 className="text-xl font-semibold m-3 text-black styledText">
              {data.title}
            </h2>
            <p className="text-center text-black">{data.text}</p>
          </div>
        );
      })}
    </div>
  );
}
