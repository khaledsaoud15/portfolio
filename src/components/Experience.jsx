import gsap from "gsap";
import React, { useEffect } from "react";

const Experience = () => {
  return (
    <section className="flex flex-col gap-6 h-screen px-8 md:px-16 py-16 w-full mb-40">
      <h1 className="text-4xl font-bold dm-serif text-center italic!">
        Experience
      </h1>
      <div className="justify-center flex items-center h-fit relative">
        <div className="h-180 w-1 bg-linear-to-b from-yellow-500 absolute lg:left-1/2 left-0 top-1/2 rounded"></div>
        <div className="flex flex-col gap-2 h-fit absolute top-15 lg:left-50 left-5 lg:w-90 w-80">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold">Code 213</h1>
            <p className="text-sm text-gray-700">- Fullstack coach</p>
          </div>
          <span className="text-xs text-gray-500">2023 - Present</span>
          <p className="text-sm text-gray-700">
            Teaching young generations the skills of web development, including
            HTML, CSS, JavaScript, and React. Providing guidance and mentorship
            to help students build their own projects and prepare for careers in
            tech.
          </p>
        </div>
        <div className="flex flex-col gap-2 h-fit absolute top-70 lg:left-170 left-5 lg:w-90 w-80">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold">GomyCode</h1>
            <p className="text-sm text-gray-700">- Fullstack coach</p>
          </div>
          <span className="text-xs text-gray-500">2021 - 2023</span>
          <p className="text-sm text-gray-700">
            Teaching young generations the skills of web development, including
            HTML, CSS, JavaScript, and React. Providing guidance and mentorship
            to help students build their own projects and prepare for careers in
            tech.
          </p>
        </div>
        <div className="flex flex-col gap-2 h-fit absolute  top-110 lg:left-50 left-5 lg:w-90 w-80">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold">Web agency</h1>
            <p className="text-sm text-gray-700">- Frontend developer</p>
          </div>
          <span className="text-xs text-gray-500">2019 - 2022</span>
          <p className="text-sm text-gray-700">
            Developing and maintaining websites for various clients, ensuring
            high performance and responsiveness. Collaborating with designers
            and backend developers to create seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
