import type { Metadata } from "next";
import { Navbar } from "@/components/nav";
import AboutUs from "@/components/about/AboutUs";
import Services from "@/components/about/Services";
import Team from "@/components/home/Team";
import WorkTogether from "@/components/about/WorkTogether";

export const metadata: Metadata = {
  title: "Sky Enterprise | About",
  description: "At Sky Enterprise, we are passionate about transforming websites and applications into high-performing, scalable platforms. With a focus on WordPress to Next.js conversion, we specialize in helping businesses achieve faster load times, improved security, and a seamless user experience.",
};

const page = () => {
  return (
    <>
      <Navbar />
      <hr className="my-5  border-gray-120  w-full  " />
      <AboutUs />
      <Services />
      <Team />
      <WorkTogether />
    </>
  );
};

export default page;
