import React from "react";

const Connect = () => {
  return (
    <section className="flex flex-col gap-4 h-fit w-full pb-15">
      <div className="flex flex-col gap-15 items-center  justify-center h-90 mt-10 relative px-8">
        <div className="pattern  absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-50"></div>
        <h1 className="text-xl font-semibold md:text-2xl lg:text-4xl">
          You have a project in mind?.
        </h1>
        <h2 className="text-5xl font-bold italic! dm-serif text-yellow-500  md:text-4xl lg:text-7xl ">
          Let's collaborate!
        </h2>
        <button className="text-white bg-black rounded px-12 py-5 cursor-pointer shadow hover:bg-yellow-500 transition-all duration-200 active:bg-black hover:-translate-y-1">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Connect;
