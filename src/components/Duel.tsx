import Image from "next/image";

const Duel = () => {
  return (
    <div className="bg-gray-200">
      <div className="container flex justify-between items-center">
        <Image src={`/public/`} alt="person" width={100} height={100} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Duel;
