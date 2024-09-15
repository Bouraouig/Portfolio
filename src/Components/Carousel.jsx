import React from "react";
import Slider from "react-slick";
import ProjectCard from "./Reusible/Card";
import { projects } from "../constants";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {projects.map((project, index) => {
          return (
            <div className="p-2">
              <ProjectCard
                index={index}
                key={`project-${index}`}
                {...project}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default MultipleItems;
