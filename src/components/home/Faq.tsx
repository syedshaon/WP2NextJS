const Questions = [
  { q: "What is Full Site Editing in WordPress?", a: "Full Site Editing in WordPress refers to a feature that allows users to create and edit their website’s entire layout, including the header, footer, and other structural elements, using a visual editor." },
  { q: "What are the benefits of Full Site Editing in WordPress?", a: "Full Site Editing in WordPress allows users to create and edit their website more efficiently and with more control. It enables users to create unique and custom designs without needing to have advanced coding skills." },
  { q: "How do I enable Full Site Editing in WordPress?", a: "To enable Full Site Editing in WordPress, you need to ensure that you are using a compatible WordPress theme that supports Full Site Editing. You will also need to install the latest version of WordPress and enable the Gutenberg editor." },
  { q: "What are some popular WordPress themes that support Full Site Editing?", a: "Some popular WordPress themes that support Full Site Editing include the FotaWP Theme, ReviveNews Theme, and the Hello Agency Theme. These themes have built-in support for Full Site Editing, allowing users to create custom designs without needing to know how to code." },
];

import { FaQuestion } from "react-icons/fa";

const Faq = () => {
  return (
    <div className="animate-in slide-in-from-bottom-60 duration-500 container my-20 bg-white">
      <h3 className="text-2xl lg:text-5xl lg:w-2/3 mb-10 text-center mx-auto  font-jakartaSans  ">Frequently Asked Question</h3>
      <div className="flex flex-wrap gap-10">
        {Questions.map((qst, i) => {
          return (
            <div key={i} className=" w-full xl:w-[45%] bg-gray-100 p-10 rounded-md">
              <div className="flex items-center justify-start gap-5">
                <div className="w-10 h-10 shrink-0 rounded-full bg-blue-500 flex justify-center items-center">
                  <FaQuestion className="text-xl  text-white" />
                </div>
                <p className="text-lg lg:text-xl font-semibold">{qst.q}</p>
              </div>

              <p className="text-base lg:text-lg">{qst.a}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
