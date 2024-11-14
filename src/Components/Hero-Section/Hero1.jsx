import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroSlider1 from "../Hero Slider/HeroSlider1";

const Hero1 = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slideContent = [
    {
      heading: "Master the Markets with",
      subheading: "ZenTruGrit AE+",
      description:
        "Unlock the Secrets of Algorithmic Trading and enhance your strategies.",
    },
    {
      heading: "WHO WE ARE",
      subheading: "At ZenTruGrit AE+",
      description:
        "ZenTruGrit AE+ is dedicated to transforming financial markets through innovation, grit, and strategic insights.",
    },
    {
      heading: "WHAT WE DO",
      subheading: "Trading. Research. Technology.",
      description:
        "ZenTruGrit AE+ is a proprietary trading firm and global liquidity provider that combines advanced quantitative analysis",
    },
    {
      heading: "OUR CULTURE",
      subheading: "Trading. Research. Technology.",
      description:
        "ZenTruGrit AE+ is a proprietary trading firm and global liquidity provider that combines advanced quantitative analysis",
    },
    {
      heading: "JOIN ZENTRUGRIT AE+",
      subheading: "",
      description: "Are you ready to redefine the future of finance?",
    },
  ];

  return (
    <>
      <section className="relative text-white sm:h-screen h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background slider */}
        <div className="absolute inset-0 z-0 h-[80vh] sm:h-[100vh] bg-white">
          <HeroSlider1 setActiveSlide={setActiveSlide} />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 mx-auto sm:px-4 px-2 sm:py-32 pb-4 lg:flex lg:items-center text-center">
          <div className="mx-auto">
            <div className="flex justify-center items-center">
              <h1
                className="text-2xl font-bold sm:text-5xl"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                {slideContent[activeSlide]?.heading}
                <strong className="font-bold text-blue-500 block pt-1">
                  {slideContent[activeSlide]?.subheading}
                </strong>
              </h1>
            </div>

            <p
              className="mt-4 sm:text-xl/relaxed max-w-xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              {slideContent[activeSlide]?.description}
            </p>

            <div
              className="mt-8 flex flex-wrap justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1000"
            >
              <a
                href="https://wa.me/9311224234?text=Hello%20there!%20I%20would%20like%20to%20get%20in%20touch."
                target="_blank"
                className="block w-full max-md:max-w-[80%] rounded-full bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        {/* Overlay for darker background effect */}
        <div className="absolute inset-0 bg-black opacity-60 z-5 h-[80vh] sm:h-[100vh]"></div>
      </section>
    </>
  );
};

export default Hero1;
