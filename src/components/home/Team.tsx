import Image from "next/image";

const Team = () => {
  return (
    <div className="container my-20">
      <h3 className="text-5xl lg:w-2/3 mb-10 text-center mx-auto font-bold  font-jakartaSans  ">Meet the Trailblazers Driving Our Success</h3>

      <div className=" px-10 md:px-0 md:flex gap-7 justify-between items-end">
        <div className="mb-10 md:mb-0 md:w-1/3 text-center text-gray-800 hover:scale-105 transition-all duration-500 ">
          <Image alt="team 1" src="/person/team_1.jpg" width={640} height={960} className="w-full h-auto" />
          <p className="text-2xl font-semibold   mt-4">Nabida Haque</p>
          <p className="text-base text-gray-600">Founder</p>
        </div>
        <div className="mb-10 md:mb-0 md:w-1/3 text-center text-gray-800 hover:scale-105 transition-all duration-500 ">
          <Image alt="team 1" src="/person/team_2.jpg" width={640} height={960} className="w-full h-auto" />
          <p className="text-2xl font-semibold   mt-4">Jane Doe</p>
          <p className="text-base text-gray-600">CTO</p>
        </div>
        <div className="mb-10 md:mb-0 md:w-1/3 text-center text-gray-800 hover:scale-105 transition-all duration-500 ">
          <Image alt="team 1" src="/person/team_3.jpg" width={640} height={960} className="w-full h-auto" />
          <p className="text-2xl font-semibold   mt-4">Alexis Joe</p>
          <p className="text-base text-gray-600">Project Manager</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
