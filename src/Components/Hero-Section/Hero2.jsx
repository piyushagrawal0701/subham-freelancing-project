import React from "react";
import heroImg2 from "../../assets/Images/Hero-Section/Hero2Img.gif";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 sm:py-24 pt-12 pb-12 md:flex-row flex-col items-center max-w-6xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
            {/* <p
              className="px-2 font-medium"
              data-aos="zoom-in-up"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              About us
            </p> */}
            <h1
              className="title-font sm:text-4xl text-2xl sm:mb-4 mb-0 font-bold text-gray-900"
              data-aos="zoom-in-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              Mastering Markets with
              <br className="lg:inline-block" />
              <span className="text-blue-500">AI-driven</span> Smart Technology
            </h1>
            {/* <p
              className="mb-8 leading-relaxed font-normal"
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Brief narrative about the company’s history, values, and what sets
              it apart from the competition.
            </p> */}
            {/* <div className="flex justify-center">
              <Link to="/contact">
                <button
                  className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-full text-lg  font-medium"
                  data-aos="zoom-in-up"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                >
                  Learn More
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg font-medium"
                  data-aos="zoom-in-up"
                  data-aos-delay="450"
                  data-aos-duration="1000"
                >
                  Contact us
                </button>
              </Link>
            </div> */}
          </div>
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img
              className="object-cover object-center rounded h-full"
              alt="hero"
              src="https://tradeciety.com/hubfs/Backtesting-Trading.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
