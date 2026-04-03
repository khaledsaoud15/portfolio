import gsap from "gsap";
import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    gsap.fromTo(
      ".text",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.3,
        stagger: 0.3,
        ease: "power3.inOut",
      },
    );
  }, []);

  return (
    <section className="px-8 md:px-16  flex flex-col gap-10 lg:flex-row lg:items-center  h-fit lg:h-full lg:gap-0 lg:justify-between py-16">
      <div className="flex flex-col gap-3 lg:w-3/4">
        <span className="text-xs font-semibold text">PROJECTS</span>
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] text ">Explore</h1>
        <h1 className="dm-serif text-8xl  lg:text-[8rem] italic! text">
          The projects.
        </h1>
      </div>
      <p className="text-md md:text-lg lg:text-sm lg:w-2/5 lg:mt-auto text">
        I’m a full-stack developer specializing in the MERN stack, focused on
        building modern, scalable web applications. I work across both frontend
        and backend to create efficient systems and smooth user experiences.
      </p>
    </section>
  );
};

export default Header;
