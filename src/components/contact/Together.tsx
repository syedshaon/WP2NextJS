import Image from "next/image";
import Button from "@/components/Button";

const Together = () => {
  return (
    <div className="animate-in slide-in-from-bottom-60 duration-500 container mx-auto relative z-20 h-[40vh] overflow-hidden flex justify-center items-center flex-col gap-3 mb-10">
      <Image width={3000} height={2000} className=" w-full h-auto absolute -z-20" alt="Sky Enterprise" priority={true} src="/pageImg/banner_3.jpg" />
      {/* <div className="absolute w-full h-full  -z-10 bg-[rgba(0,0,0,.5)]"></div> */}
      <h3 className="text-white lg:w-2/3 text-2xl lg:text-4xl font-bold  font-jakartaSans text-center container bg-[rgba(0,0,0,.5)]">Let’s Work Together on Your Next Project</h3>
      <p className=" mt-5 text-white text-base lg:text-lg container text-center lg:w-1/2 bg-[rgba(0,0,0,.5)]">Frustrated by a slow website? We’ll help you tame those speed demons so you can keep visitors coming back for more!</p>
    </div>
  );
};

export default Together;
