import { Navbar } from "@/components/nav";
import Form from "@/components/contact/Form";
import Together from "@/components/contact/Together";

const page = () => {
  return (
    <>
      <Navbar />
      <hr className="my-5  border-gray-120  w-full  " />

      <div className="flex flex-wrap container items-stretch mb-10">
        <div className="w-full xl:w-1/2 px-5 bg-gray-100 flex items-center justify-center ">
          <Together />
        </div>

        <Form />
      </div>

      <div className="container mb-10 relative overflow-hidden" style={{ overflow: "hidden", position: "relative" }}>
        <div style={{ paddingTop: "1px !important" }}>
          <iframe src="https://maps.google.com/maps?q=37.320605,-121.992445&hl=en;z=14&output=embed" width="100%" frameBorder={0} title="Our Location in google map" style={{ height: 400, width: "100%", padding: "0 !important" }} allowFullScreen />
        </div>
      </div>
    </>
  );
};

export default page;
