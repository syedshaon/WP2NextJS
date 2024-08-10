import { Navbar } from "@/components/nav";
import AboutUs from "@/components/about/AboutUs";
import Services from "@/components/about/Services";
import Team from "@/components/home/Team";
import WorkTogether from "@/components/about/WorkTogether";

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
