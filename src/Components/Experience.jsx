import React from "react";

import { experiences } from "../constants";
import ExperienceCard from "./Reusible/ExperienceCard";
const Experience = () => {
  return (
    <div>
      <h2 className={"p-2 text-5xl font-semibold my-2 "}> Work Experience</h2>
      {experiences.map((experience, index) => {
        return <ExperienceCard experience={experience} />;
      })}
    </div>
  );
};

export default Experience;
