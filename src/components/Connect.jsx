import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Connect = () => {
  const [active, setActive] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s3m5p89",
        "template_z1mm3aq",
        form.current,
        "9c8PJOISyUi2iELqh",
      )
      .then(
        () => {
          toast.success("Email sent successfully!", {
            position: "bottom-left",
            autoClose: 3000,
            theme: "light",
          });

          form.current.reset();
          setActive(false);
        },
        (error) => {
          toast.error("Failed to send email ❌", {
            position: "bottom-left",
            autoClose: 3000,
            theme: "light",
          });
        },
      );
  };
  return (
    <section className="flex flex-col gap-4 h-fit w-full pb-15">
      <div className="flex flex-col gap-4 lg:gap-15 items-center  justify-center h-full relative px-8 py-10">
        <div className="pattern  absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-50"></div>
        <h1 className="text-xl font-semibold md:text-2xl lg:text-4xl">
          You have a project in mind?.
        </h1>
        <h2 className="text-6xl text-center lg:leading-0 font-bold italic! dm-serif text-yellow-500   lg:text-7xl ">
          Let's collaborate!
        </h2>
        <button
          onClick={() => setActive(true)}
          className="text-white bg-black rounded px-12 py-5 cursor-pointer shadow hover:bg-yellow-500 transition-all duration-200 active:bg-black hover:-translate-y-1"
        >
          Get In Touch
        </button>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className={`flex flex-col gap-4 w-full px-8 md:px-16 py-10 h-fit  transition-all duration-300 ${active ? "block" : "hidden"}`}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your name"
          className="border border-gray-200 rounded p-2"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your email"
          className="border border-gray-200 rounded p-2"
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          className="border border-gray-200 rounded p-2"
          required
        />

        <button className="bg-black text-white p-2 hover:bg-yellow-500 cursor-pointer rounded transition-all duration-200 w-fit px-4">
          Send
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Connect;
