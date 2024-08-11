import Button from "@/components/Button";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="animate-in slide-in-from-bottom-60 duration-500 bg-[rgb(224,224,224)] text-gray-800 py-12 min-h-[600px] flex justify-center items-center">
      <div className="container flex flex-col xl:flex-row justify-between items-center">
        <Image src={`/pageImg/pexels-divinetechygirl-1181487.jpg`} alt="person" width={640} height={427} className=" px-10 xl:px-0 w-full xl:w-1/2 h-auto" />
        <div className="w-full xl:w-1/2 px-10 xl:pr-0 xl:pl-10 mt-10 xl:mt-0   text-center xl:text-left">
          <h3 className="text-5xl font-bold  font-jakartaSans  ">Leading the Way in Technology for More Than a Decade</h3>
          <p className="my-5   text-base   ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-10 mt-10">
            <Button>Get Started Today</Button>
            <a className="text-3xl hover:text-[#87c14e]  transition-all ease-in-out   duration-300 font-bold cursor-pointe" href="tel:+(888) 123-4567">
              (888) 123-4567
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
