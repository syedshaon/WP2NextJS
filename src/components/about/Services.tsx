import { MdCloudSync } from "react-icons/md";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { TfiSupport } from "react-icons/tfi";
import { FaFingerprint } from "react-icons/fa";
import { LuNetwork } from "react-icons/lu";
import { FaQuidditch } from "react-icons/fa";

const ServiceList = [
  { icon: MdCloudSync, name: "Cloud Services", details: "Our team specializes in crafting compelling brand identities that resonate with your audience." },
  { icon: RiShoppingBag2Fill, name: "E-Commerce", details: "Our team specializes in crafting compelling brand identities that resonate with your audience." },
  ,
  { icon: TfiSupport, name: "Technical Support", details: "Our team specializes in crafting compelling brand identities that resonate with your audience." },
  { icon: FaFingerprint, name: "Internet of Things", details: "Our team specializes in crafting compelling brand identities that resonate with your audience." },
  { icon: LuNetwork, name: "Network Security", details: "Our team specializes in crafting compelling brand identities that resonate with your audience." },
  { icon: FaQuidditch, name: "UI/UX Development", details: "Our team specializes in crafting compelling brand identities that resonate with your audience." },
];

const Services = () => {
  return (
    <div className="container animate-in slide-in-from-bottom-60 duration-500 my-20 bg-slate-100 px-4 py-20">
      <h3 className="text-5xl lg:w-2/3 mb-10 text-center mx-auto font-bold  font-jakartaSans  ">Our Services</h3>
      <p className="mb-10 lg:w-2/3 mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <div className=" px-10 xl:px-5 xl:flex flex-wrap gap-5 justify-between items-start">
        {ServiceList.map((serv, id) => {
          return (
            <div key={id} className=" hover:scale-105 transition-all duration-200 bg-white text-gray-700 text-center rounded-lg p-7 lg:w-[30%]">
              <div className="bg-blue-500 mx-auto mb-10  w-20 h-20 rounded-full flex justify-center items-center">
                {serv.icon && (
                  <serv.icon
                    className="text-white  text-4xl 
                "
                  />
                )}{" "}
                {/* Placeholder for missing icons */}
              </div>
              <h4 className="text-2xl font-semibold ">{serv.name}</h4>
              <p className="my-5 text-base">{serv.details}</p>
              <a className="text-lg underline" href="#">
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
