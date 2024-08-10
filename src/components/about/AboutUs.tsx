import Button from "@/components/Button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="  text-gray-800 py-12 min-h-[600px] flex justify-center items-center">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <Image src={`/pageImg/pexels-olly-926390.jpg`} alt="person" width={640} height={427} className=" px-10 md:px-0 w-full md:w-1/2 h-auto" />
          <div className="w-full md:w-1/2 px-10 md:pr-0 md:pl-10 mt-10 md:mt-0   text-center md:text-left">
            <h3 className="text-5xl font-semibold font-jakartaSans  ">Accurate Targeting for Exceptional Brand Growth</h3>
            <p className="my-5   text-base   ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <Button>Explore More</Button>
          </div>
        </div>
      </div>

      <div className="  text-gray-800 py-12 min-h-[600px] flex justify-center items-center">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="order-2 md:order-1 w-full md:w-1/2  mt-10 md:mt-0   text-center md:text-left">
            <h3 className="text-5xl font-semibold font-jakartaSans  ">Accurate Targeting for Exceptional Brand Growth</h3>
            <p className="my-5   text-base   ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <Button>Explore More</Button>
          </div>

          <Image src={`/pageImg/pexels-pixabay-265125.jpg`} alt="person" width={640} height={427} className=" order-1 md:order-2 px-10 md:pr-0 md:pl-10 w-full md:w-1/2 h-auto" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
