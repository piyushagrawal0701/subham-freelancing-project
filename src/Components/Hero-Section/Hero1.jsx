import React from "react";
import { Link } from "react-router-dom";
import HeroSlider1 from "../Hero Slider/HeroSlider1";

const Hero1 = () => {
  return (
    <>
      <section className="relative text-white h-screen flex items-center justify-center  overflow-hidden">
        {/* Background slider */}
        <div className="absolute inset-0 z-0 h-[80vh] sm:h-[100vh] bg-white ">
          <HeroSlider1 />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 mx-auto sm:px-4 px-2 sm:py-32 pb-20 lg:flex lg:items-center text-center  ">
          <div className="mx-auto">
            <div className="flex justify-center items-center">
              <h1
                className="text-2xl font-bold sm:text-5xl"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                Master the Markets with
                <strong className="font-bold text-blue-500 sm:block pt-1">
                  {"  "}
                  ZenGrit AlphaEdge
                  {"  "}
                </strong>
              </h1>
            </div>

            <p
              className="mt-4 sm:text-xl/relaxed max-w-xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              Experience cutting-edge trading with expert guidance and
              innovative tools
            </p>

            <div
              className="mt-8 flex flex-wrap justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1000"
            >
              <Link
                className="block w-full max-md:max-w-[80%] rounded-full bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                to="/contact"
              >
                Get Free Proposal
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay for darker background effect */}
        <div className="absolute inset-0 bg-black opacity-60 z-5  h-[80vh] sm:h-[100vh]"></div>
      </section>
    </>
  );
};

export default Hero1;
