import Image from "next/image";

const Partners = () => {
  return (
    <div className="animate-in zoom-in-75 duration-500 my-20">
      <h3 className=" container text-xl lg:text-2xl lg:w-2/3 mb-10 text-center mx-auto font-semibold  font-jakartaSans  ">Showcasing Our Valued Partners: A Comprehensive Display of Collaboration and Mutual Success</h3>
      <div className="flex flex-wrap md:flex-nowrap  justify-evenly items-center gap-10">
        <Image alt="partners-1" src="/extra/brand_1.png" width={334} height={103} className="h-auto hover:scale-105 transition-all duration-200 w-1/3  md:w-[11%] " />
        <Image alt="partners-2" src="/extra/brand_2.png" width={334} height={103} className="h-auto hover:scale-105 transition-all duration-200 w-1/3  md:w-[11%] " />
        <Image alt="partners-3" src="/extra/brand_3.png" width={334} height={103} className="h-auto hover:scale-105 transition-all duration-200 w-1/3  md:w-[11%] " />
        <Image alt="partners-4" src="/extra/brand_4.png" width={334} height={103} className="h-auto hover:scale-105 transition-all duration-200 w-1/3  md:w-[11%] " />
        <Image alt="partners-5" src="/extra/brand_5.png" width={334} height={103} className="h-auto hover:scale-105 transition-all duration-200 w-1/3  md:w-[11%] " />
        <Image alt="partners-3" src="/extra/brand_3.png" width={334} height={103} className="h-auto hover:scale-105 transition-all duration-200 w-1/3  md:w-[11%] " />
      </div>
    </div>
  );
};

export default Partners;
