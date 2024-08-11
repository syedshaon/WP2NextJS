import Image from "next/image";
import { Navbar } from "@/components/nav";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <div className="home relative h-[60vh] overflow-hidden flex justify-center items-center flex-col gap-3">
      <div className="absolute top-0 left-0 w-full">
        <div className="container mx-auto text-white">
          <Navbar />
        </div>
      </div>
      <Image width={3000} height={2000} className=" w-full h-auto absolute -z-20" alt="Sky Enterprise" priority={true} src="/pageImg/banner_2.jpg" />
      <div className="absolute w-full h-full  -z-10 bg-[rgba(0,0,0,.5)]"></div>
      <h3 className="text-white text-3xl lg:text-7xl font-bold  font-jakartaSans text-center container animate-in  spin-in-90 duration-500 ">Advance and Thrive with Sky Enterprise</h3>
      <p className=" my-5 text-white text-base lg:text-lg container text-center lg:w-1/2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Button>Get Started Today</Button>
    </div>
  );
};

export default Hero;
