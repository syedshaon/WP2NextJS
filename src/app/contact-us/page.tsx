import type { Metadata } from "next";
import { Navbar } from "@/components/nav";
import Together from "@/components/contact/Together";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Sky Enterprise | Contact Us",
  description: "Get in touch with Sky Enterprise for expert WordPress to Next.js conversions and tailored web solutions. Whether you have questions or need a custom solution, our team is here to help. Reach out today!",
};

const page = () => {
  return (
    <>
      <Navbar />
      <hr className="my-5  border-gray-120  w-full  " />

      <div className="flex flex-wrap container gap-10 lg:gap-0 items-stretch mb-10">
        <div className="w-full xl:w-1/2 px-5 bg-gray-100 flex items-center justify-center ">
          <Together />
        </div>

        <Contact />
      </div>

      <div className="container animate-in slide-in-from-bottom-60 duration-500 mb-10 relative overflow-hidden" style={{ overflow: "hidden", position: "relative" }}>
        <div style={{ paddingTop: "1px !important" }}>
          <iframe src="https://maps.google.com/maps?q=37.320605,-121.992445&hl=en;z=14&output=embed" width="100%" frameBorder={0} title="Our Location in google map" style={{ height: 400, width: "100%", padding: "0 !important" }} allowFullScreen />
        </div>
      </div>
    </>
  );
};

export default page;
