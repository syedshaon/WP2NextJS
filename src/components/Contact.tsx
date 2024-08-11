"use client";

import { useState } from "react";

export default function Contact() {
  const [showValidation, setShowValidation] = useState(false);
  const [nameVal, setNameVal] = useState("");
  const [msgVal, setMsgVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  const handleEmailChange = (e) => {
    setEmailVal(e.target.value);
    setEmailValid(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target.value));
  };

  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendFail, setSendFail] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setShowValidation(true);
    setTimeout(() => {
      setShowValidation(false);
    }, 3000);
    // Check if all fields are valid
    if (nameVal && msgVal && emailValid) {
      const formData = new FormData(event.target);
      try {
        const response = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nameVal,
            email: emailVal,
            message: msgVal,
          }),
        });
        if (response.ok) {
          setSendSuccess(true);

          setShowValidation(false);
          setNameVal("");
          setMsgVal("");
          setEmailVal("");
          setEmailValid(true);

          // console.log("Email sent successfully!");
          // Reset form fields and validation state after timeout
          setTimeout(() => {
            setSendSuccess(false);
          }, 15000);
        } else {
          setSendFail(true);
          // console.error("Failed to send email. Please retry!");
          setTimeout(() => {
            setSendFail(false);
          }, 15000);
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  return (
    <form className="w-full xl:w-1/2 px-5" onSubmit={handleFormSubmit}>
      <div className=" mb-3">
        <label htmlFor="senderName" className="block ml-2 font-medium ">
          Your Name
        </label>
        <input value={nameVal} onChange={(e) => setNameVal(e.target.value)} required placeholder="Your name" type="text" id="senderName" name="senderName" className="mt-1 p-2 block w-full rounded-md border border-gray-300" />

        {showValidation && nameVal.length < 1 && <p className="text-sm mt-1 ml-3 text-orange-500">Name must be at least one character.</p>}
      </div>
      <div className="mx-auto mb-3">
        <label htmlFor="recipientEmail" className="ml-2 block font-medium ">
          Your Email
        </label>
        <input type="email" required value={emailVal} onChange={handleEmailChange} placeholder="someone@something.com" id="recipientEmail" name="recipientEmail" className="mt-1 p-2 block w-full rounded-md border border-gray-300   " />

        {showValidation && !emailValid && <p className="text-sm mt-1 ml-3 text-orange-500">Please enter a valid email.</p>}
      </div>
      <div className="mx-auto mb-10 lg:mb-14">
        <label htmlFor="message" className="block ml-2 font-medium ">
          Your Message
        </label>
        <textarea value={msgVal} onChange={(e) => setMsgVal(e.target.value)} rows={5} required placeholder="Your message..." id="message" name="message" className="mt-1 p-2 block w-full rounded-md border border-gray-300 dark:border-csWhite   text-csGray dark:bg-csWhite  " />

        {showValidation && msgVal.length < 1 && <p className="text-sm mt-1 ml-3 text-orange-500">Name must be at least one character.</p>}
      </div>
      <div className="mx-auto text-center">
        <button className=" w-full rounded-lg  text-lg   bg-[#49bbe0]    text-white  text-center py-4 px-8 hover:bg-[#87c14e] hover:text-white transition-all ease-in-out   duration-500 cursor-pointer">Submit</button>
      </div>

      <div className="w-full  min-h-14 pt-3 inline-flex flex-nowrap overflow-hidden lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        {(sendSuccess || sendFail) && (
          <ul className="w-full   flex items-center justify-start  animate-infinite-scroll">
            {sendSuccess && <li className="text-orange-500  text-nowrap ">Email sent successfully!</li>}
            {sendFail && <li className="text-orange-500   text-nowrap">Failed to send email. Please retry!</li>}
          </ul>
        )}
      </div>
    </form>
  );
}
