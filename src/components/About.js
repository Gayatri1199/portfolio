import React from "react";

const About = () => {
  return (
    <div className="about-wraper pt-[200px]">
      <div className="name bg-sky-950 h-[300px] w-[300px] rounded-full flex justify-center items-center font-bold text-5xl mx-[-150px]">
        Joy David
      </div>
      <p className="my-5 py-5">
        Hello! I am Web Developer from United States, New York. I have rich
        experience in web site design and building, also I am good at wordpress.
        I love to talk with you about our unique.
      </p>
      <div className="">CONTACT ME</div>

      <div className="about-me mt-10 pt-10 pt-[200px]" id="about">
        <h2 className="text-6xl font-bold">About Me</h2>
        <span className="text-emerald-400	font-bold">MY STORY</span>
        <p className="pt-6">
          Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed
          cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor
          sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere,
          tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin
          urna dolor sagittis lacus.
        </p>

        <p className="pt-6">
          Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed
          cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor
          sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere,
          tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin
          urna dolor sagittis lacus.
        </p>
        <div className="intro">
          <div className="strip flex gap-12 mt-5">
            <div className="strip-content">
              <span>AGE:</span>
              <span className="text-emerald-400	font-bold">24</span>
            </div>
            <div className="strip-content">
              <span>AGE:</span>
              <span className="text-emerald-400	font-bold">24</span>
            </div>
          </div>
          <div className="strip flex gap-12 mt-5">
            <div className="strip-content">
              <span>AGE:</span>
              <span className="text-emerald-400	font-bold">24</span>
            </div>
            <div className="strip-content">
              <span>AGE:</span>
              <span className="text-emerald-400	font-bold">24</span>
            </div>
          </div>
          <div className="strip flex gap-12 mt-5">
            <div className="strip-content">
              <span>AGE:</span>
              <span className="text-emerald-400	font-bold">24</span>
            </div>
            <div className="strip-content">
              <span>AGE:</span>
              <span className="text-emerald-400	font-bold">24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
