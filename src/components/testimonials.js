import React from "react";
import { testimonials } from "../data";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
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
    <div
      id="testimonials"
      className="lg:pt-[200px] md:pt-[250px] pb-10 pt-[200px]"
    >
      <h2 className="text-6xl font-bold">Reviews</h2>
      <span className="text-emerald-400	font-bold block mb-10">YOUR WORDS</span>

      <Slider {...settings}>
        {testimonials.map((val, index) => {
          return (
            <div key={index} className="review-wrapper pr-5">
              <div className="upper-sec flex gap-5">
                <span className="img block h-20 w-20">
                  <img
                    src={val.image}
                    alt={val.name}
                    className="rounded-full"
                  />
                </span>
                <span className="name mt-5 block">
                  <span>{val.name}</span>
                  <span className="block text-emerald-400	font-bold">
                    {val.company.toUpperCase()}
                  </span>
                </span>
              </div>
              <p className="mt-5 text-xs">{val.quote}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonials;
