import React from "react";
import { skills } from "../data";
const Skills = () => {
  return (
    <div id="skills" className="lg:pt-[200px] md:pt-[250px] pt-[200px]">
      <h2 className="text-6xl font-bold">Skills</h2>
      <span className="text-emerald-400	font-bold">WHAT I CAN DO</span>
      {skills?.map((skill, index) => {
        return <h1 key={index}>{skill}</h1>;
      })}
    </div>
  );
};

export default Skills;
