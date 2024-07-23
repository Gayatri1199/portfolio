import React from "react";
import { projects } from "../data";
import Slider from "react-slick";
const Projects = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="projects" className="lg:pt-[200px] md:pt-[250px] pt-[200px]">
      <h2 className="text-6xl font-bold">Projects</h2>
      <span className="text-emerald-400	font-bold mb-5 block">
        CREATIVE ABILITY
      </span>
      <div className="projects mt-10">
        <Slider {...settings}>
          {projects.map((project, index) => {
            return (
              <a
                className="project-wrapper block p-2 text-center"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <span className="block w-20 h-20 m-auto">
                  <img src={project.image} alt={project.title} />
                </span>

                <span className="block text-emerald-400	font-bold mb-3 uppercase mt-5">
                  {project.title}
                </span>
                <span className="block mb-5">{project.subtitle}</span>
                <span className="block text-xs">{project.description}</span>
              </a>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
