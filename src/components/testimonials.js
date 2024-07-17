import React from "react";
import { skills } from "../data";
const Testimonials = () => {
  return (
    <div id="testimonials" className="pt-[200px]">
      <h2 className="text-6xl font-bold">Skills</h2>
      <span className="text-emerald-400	font-bold">WHAT I CAN DO</span>
      {skills.map((skill) => {
        return <h1>{skill}</h1>;
      })}
    </div>
  );
};

export default Testimonials;
