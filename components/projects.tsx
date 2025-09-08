"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Fragment, useState } from "react";
import { projects } from "@/data/projects";

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(4);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, projects.length));
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-montserrat uppercase font-bold text-heading text-center">
          Projects
        </h2>

        <hr className="border-2 border-gray-300 w-32 mx-auto my-6" />

        <p className="text-lg text-center font-normal text-ink mb-12 max-w-3xl mx-auto">
          A selection of projects I’ve built, showcasing my skills in modern
          frontend development and clean, scalable solutions.
        </p>

        <div className="flex flex-col">
          {projects.slice(0, visibleCount).map((project, index) => (
            <Fragment key={project.title}>
              {/* CARD */}
              <div
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* LEFT CONTENT */}
                <div className="w-full md:w-1/2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1000}
                    height={600}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 1000px"
                    className="rounded-lg shadow-md shadow-gray-500/40 object-cover w-full h-auto"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-heading mb-4">
                    {project.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-md"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <p className="text-base text-ink mb-6">
                    {project.description}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-accent/10 text-accent hover:bg-accent/70 hover:text-[#ffffff] duration-300"
                    >
                      Resources <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-accent text-[#ffffff] hover:bg-accent/70 duration-300"
                    >
                      View Demo <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* SEPARATOR */}
              {index < visibleCount - 1 && (
                <hr className="border-t-2 border-gray-300 my-12" />
              )}
            </Fragment>
          ))}
        </div>

        {/* SHOW MORE BUTTON */}
        {visibleCount < projects.length && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center w-full max-w-3xl">
              <div className="flex-1 border-t-2 border-gray-300"></div>

              <button
                onClick={showMore}
                className="flex items-center gap-2 rounded-full px-5 py-2 mx-6 text-sm font-medium cursor-pointer bg-accent text-[#ffffff] hover:bg-accent/70 duration-300"
                aria-label="Show more projects"
              >
                Show more projects <ArrowDown className="w-4 h-4" />
              </button>

              <div className="flex-1 border-t-2 border-gray-300"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
