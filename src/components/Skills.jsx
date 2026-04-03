import React from "react";
import { skills } from "../projects";

const Skills = () => {
  return (
    <section className="flex flex-col gap-8 h-fit px-8 md:px-16 py-16 w-full">
      <h1 className="text-4xl font-bold dm-serif text-center italic!">
        Skills
      </h1>
      <div className="flex flex-wrap w-full lg:w-3/4 gap-4 h-fit mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center gap-3 px-4 py-2 rounded shadow"
            style={{ background: skill.background }}
          >
            <div className="flex items-center gap-2">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-5 object-cover"
              />
              <span className="text-sm font-semibold text-white">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
