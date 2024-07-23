import React from "react";

const About = () => {
  return (
    <div className="about-wraper lg:pt-[200px] md:pt-0 ">
      <div className="name bg-sky-950 h-[300px] w-[300px] rounded-full flex justify-center items-center font-bold text-5xl lg:ml-[-150px] md:mt-[-250px] ml-auto mr-auto mt-[-200px]">
        Joy David
      </div>
      <p className="my-5 py-5">
        Hello! I am Web Developer from United States, New York. I have rich
        experience in web site design and building, also I am good at wordpress.
        I love to talk with you about our unique.
      </p>
      <div className="p-5 text-sm mt-5 rounded-full inline-block cursor-pointer contact-btn">
        CONTACT ME
      </div>

      <div
        className="about-me mt-10  lg:pt-[200px] md:pt-[250px] pt-[200px]"
        id="about"
      >
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
          <div className="strip md:flex block gap-12 mt-5">
            <div className="strip-content w-full">
              <span>AGE:</span>
              <span className="text-emerald-400	font-bold ml-2">24</span>
            </div>
            <div className="strip-content w-full">
              <span>RESIDENCE:</span>
              <span className="text-emerald-400	font-bold ml-2">INDIA</span>
            </div>
          </div>
          <div className="strip md:flex block gap-12 mt-5">
            <div className="strip-content w-full">
              <span>EXPERIENCE:</span>
              <span className="text-emerald-400	font-bold ml-2">3 Yrs</span>
            </div>
            <div className="strip-content w-full">
              <span>ADDRESS:</span>
              <span className="text-emerald-400	font-bold ml-2">PUNE</span>
            </div>
          </div>
          <div className="strip md:flex block gap-12 mt-5">
            <div className="strip-content w-full">
              <span>PHONE:</span>
              <span className="text-emerald-400	font-bold ml-2">
                +1 23456 789
              </span>
            </div>
            <div className="strip-content w-full">
              <span>EMAIL:</span>
              <span className="text-emerald-400	font-bold ml-2">
                xyz@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
