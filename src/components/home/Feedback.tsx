import { FaStar } from "react-icons/fa";
import Image from "next/image";
const Feedback = () => {
  return (
    <div className="bg-[rgb(224,224,224)] text-gray-800 py-20 min-h-[800px]  ">
      <h3 className=" container text-5xl lg:w-2/3 mb-10 text-center mx-auto font-semibold  font-jakartaSans  ">Listen to the Stories of Our Satisfied Clients</h3>
      <div className="flex flex-wrap justify-between items-start gap-10 container  ">
        <div className="w-full lg:w-[30%]">
          <div className="bg-white p-10 rounded-lg  hover:scale-105 shadow-md cursor-pointer transition-all duration-200">
            <div className="flex gap-2 text-orange-400 text-sm">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <p className="mt-5 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <div className="flex mt-5">
              <Image className="w-12 h-12" alt="feedback-2" width={200} height={200} src="/extra/testimonial_2.jpg" />
              <div className=" ml-5 ">
                <p>Liyana Torq</p>
                <p className="text-lg">Yoga Coach</p>
              </div>
            </div>
          </div>
          <div className="bg-white mt-10 p-10 rounded-lg  hover:scale-105 shadow-md cursor-pointer transition-all duration-200">
            <div className="flex gap-2 text-orange-400 text-sm">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <p className="mt-5 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <div className="flex mt-5">
              <Image className="w-12 h-12" alt="feedback-3" width={200} height={200} src="/extra/testimonial_3.jpg" />
              <div className=" ml-5 ">
                <p>John Doe</p>
                <p className="text-lg">Fitness Coach</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[30%]">
          <div className=" bg-white p-10 rounded-lg  hover:scale-105 shadow-md cursor-pointer transition-all duration-200">
            <div className="flex gap-2 text-orange-400 text-sm">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <p className="mt-5 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="flex mt-5">
              <Image className="w-12 h-12" alt="feedback-1" width={200} height={200} src="/extra/testimonial_1.jpg" />
              <div className=" ml-5 ">
                <p>Robert Linken</p>
                <p className="text-lg">Counseller</p>
              </div>
            </div>
          </div>
          <div className="bg-white  mt-10 p-10 rounded-lg   hover:scale-105 shadow-md cursor-pointer transition-all duration-200">
            <div className="flex gap-2 text-orange-400 text-sm">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <p className="mt-5 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <div className="flex mt-5">
              <Image className="w-12 h-12" alt="feedback-3" width={200} height={200} src="/extra/testimonial_3.jpg" />
              <div className=" ml-5 ">
                <p>Henry Benzamin Clark</p>
                <p className="text-lg">Fitness Coach</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[30%]">
          <div className="bg-white   p-10 rounded-lg  hover:scale-105 shadow-md cursor-pointer transition-all duration-200">
            <div className="flex gap-2 text-orange-400 text-sm">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <p className="mt-5 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <div className="flex mt-5">
              <Image className="w-12 h-12" alt="feedback-1" width={200} height={200} src="/extra/testimonial_1.jpg" />
              <div className=" ml-5 ">
                <p>Henry Benzamin Clark</p>
                <p className="text-lg">Fitness Coach</p>
              </div>
            </div>
          </div>
          <div className="bg-white mt-10 p-10 rounded-lg  hover:scale-105 shadow-md cursor-pointer transition-all duration-200">
            <div className="flex gap-2 text-orange-400 text-sm">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <p className="mt-5 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <div className="flex mt-5">
              <Image className="w-12 h-12" alt="feedback-2" width={200} height={200} src="/extra/testimonial_2.jpg" />
              <div className=" ml-5 ">
                <p>Henry Benzamin Clark</p>
                <p className="text-lg">Fitness Coach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
