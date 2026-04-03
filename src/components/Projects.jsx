import React, { useEffect, useState } from "react";
import { projects } from "../projects";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [data, setData] = useState(projects);

  useEffect(() => {
    const filterData = () => {
      const filteredData = projects.filter((p) => p.category === filter);
      if (filter === "all") return setData(projects);
      return setData(filteredData);
    };
    filterData();
  }, [filter]);

  return (
    <section className="flex flex-col gap-6 h-fit px-8 md:px-16 py-16">
      <div className="flex flex-col gap-3 w-full md:flex-row md:justify-between md:items-center">
        <div className="flex items-center gap-5 w-full justify-between">
          <h4 className="text-lg font-semibold">Filter by</h4>
          <div className="hidden md:flex items-center gap-5">
            <span
              className="hover:underline hover:font-semibold hover:text-yellow-500 transition-all duration-200 cursor-pointer"
              onClick={() => setFilter("all")}
            >
              All
            </span>
            <span
              className="hover:underline hover:font-semibold hover:text-yellow-500 transition-all duration-200 cursor-pointer"
              onClick={() => setFilter("blog")}
            >
              Blog
            </span>
            <span
              className="hover:underline hover:font-semibold hover:text-yellow-500 transition-all duration-200 cursor-pointer"
              onClick={() => setFilter("landing")}
            >
              Landing page
            </span>
            <span
              className="hover:underline hover:font-semibold hover:text-yellow-500 transition-all duration-200 cursor-pointer"
              onClick={() => setFilter("ecommerce")}
            >
              Ecommerce
            </span>
            <span
              className="hover:underline hover:font-semibold hover:text-yellow-500 transition-all duration-200 cursor-pointer"
              onClick={() => setFilter("saas")}
            >
              Saas
            </span>
          </div>
          <span className="md:ml-auto underline hover:font-semibold hover:text-yellow-500 transition-all duration-200 cursor-pointer">
            See more
          </span>
        </div>
        <select
          className="w-full border-b border-gray-300 py-1 px-3 outline-0 md:hidden"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="blog">Blog</option>
          <option value="landing">Landing page</option>
          <option value="ecommerce">Ecommerce</option>
          <option value="saas">Saas</option>
        </select>
      </div>
      <div className="grid grid-cols-3 w-full gap-8 h-fit">
        {data.length === 0 ? (
          <p className="text-center text-gray-500 col-span-3">
            No projects found.
          </p>
        ) : (
          data.map((project) => (
            <div
              key={project.id}
              className="col-span-3 md:col-span-1 flex flex-col gap-3 shadow p-4 h-100"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.description}</p>
              <div className="flex items-center gap-3">
                <a
                  href={project.links.github}
                  target="_blank"
                  className="text-sm text-gray-500 hover:text-yellow-500 transition-all duration-200"
                >
                  Github
                </a>
                <a
                  href={project.links.live}
                  target="_blank"
                  className="text-sm text-gray-500 hover:text-yellow-500 transition-all duration-200"
                >
                  Live
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
