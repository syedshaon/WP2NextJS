import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="text-md bg-[#07041b]  text-gray-50   py-4 md:py-6">
      <div className=" container mx-auto ">
        <div className="my-10 flex flex-wrap gap-5 justify-center lg:justify-between items-center text-lg">
          <p>Empower your digital presence, take action with our expertise!</p>
          <Button>Get Started Today</Button>
        </div>
        <hr className="h-[1px]  border-gray-800  w-full  " />

        {/* Second Line */}
        <div className=" my-4 flex-col flex items-center  lg:grid lg:grid-cols-4    lg:items-start gap-5 ">
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/" className=" text-3xl flex  font-jakartaSans  items-center hover:text-green-400 transition-all duration-300 font-semibold ">
              Sky Enterprise
            </Link>
            <p className="mt-5 text-center lg:text-left  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

            <ul className="flex items-center gap-3 my-5">
              <li>
                <a aria-label="Instagram" className=" flex justify-center items-center w-[40px] h-[40px]   rounded-full bg-white text-black " href="#">
                  <FaInstagram className="text-2xl" />
                </a>
              </li>
              <li>
                <a aria-label="Facebook" className=" flex justify-center items-center w-[40px] h-[40px]   rounded-full bg-white text-black " href="#">
                  <FaFacebookF className="text-2xl" />
                </a>
              </li>
              <li>
                <a aria-label="Twitter" className=" flex justify-center items-center w-[40px] h-[40px]   rounded-full bg-white text-black " href="#">
                  <FaXTwitter className="text-2xl" />
                </a>
              </li>
              <li>
                <a aria-label="Linkedin" className=" flex justify-center items-center w-[40px] h-[40px]   rounded-full bg-white text-black " href="#">
                  <FaLinkedinIn className="text-2xl" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="font-bold text-lg">Company</p>
            <ul className="flex flex-col items-center lg:items-start gap-3 my-5">
              <li>
                <a aria-label="Instagram" className=" flex justify-center items-center   rounded-full text-white transition-all duration-200 hover:text-[#87c14e]" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a aria-label="Instagram" className=" flex justify-center items-center   rounded-full text-white transition-all duration-200 hover:text-[#87c14e]" href="#">
                  Policy
                </a>
              </li>
              <li>
                <a aria-label="Instagram" className=" flex justify-center items-center   rounded-full text-white transition-all duration-200 hover:text-[#87c14e]" href="#">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a aria-label="Instagram" className=" flex justify-center items-center   rounded-full text-white transition-all duration-200 hover:text-[#87c14e]" href="#">
                  Career
                </a>
              </li>
              <li>
                <a aria-label="Instagram" className=" flex justify-center items-center   rounded-full text-white transition-all duration-200 hover:text-[#87c14e]" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a aria-label="Instagram" className=" flex justify-center items-center   rounded-full text-white transition-all duration-200 hover:text-[#87c14e]" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="font-bold text-lg">Services</p>
            <ul className="flex flex-col items-center lg:items-start gap-3 my-5">
              <li>
                <a aria-label="Instagram" className=" flex justify-center items-center   rounded-full text-white transition-all duration-200 hover:text-[#87c14e]" href="#">
                  Brand Building
                </a>
              </li>
              <li>
                <a aria-label="Instagram" className=" flex justify-center items-center   rounded-full text-white transition-all duration-200 hover:text-[#87c14e]" href="#">
                  UI/UX Development
                </a>
              </li>
              <li>
                <a aria-label="Instagram" className=" flex justify-center items-center   rounded-full text-white transition-all duration-200 hover:text-[#87c14e]" href="#">
                  Content Writing
                </a>
              </li>
              <li>
                <a aria-label="Instagram" className=" flex justify-center items-center   rounded-full text-white transition-all duration-200 hover:text-[#87c14e]" href="#">
                  SEO
                </a>
              </li>
              <li>
                <a aria-label="Instagram" className=" flex justify-center items-center   rounded-full text-white transition-all duration-200 hover:text-[#87c14e]" href="#">
                  Startup Ideas
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <p className="font-bold text-lg">Contact Us</p>
            <p>14th Street, Caltech, New Jersey, Alabama</p>
            <p>Monday – Friday8:00 a.m. – 5:00 p.m.</p>
            <p>email@example.com</p>
            <p>+1 (012) 345-6780</p>
          </div>
        </div>
        {/* Third Line */}
        <div className="  w-full text-center  ">
          <hr className="h-[1px]  border-gray-800  w-full  " />
          <div className=" mt-4 flex justify-center gap-5">
            <p>© 2024 Sky Enterprise. All Rights Reserved.</p>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
