import React from "react";
import heroImg3 from "../../assets/Images/Hero-Section/Hero3.png";
import { Link } from "react-router-dom";

const Hero3 = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 sm:py-20 py-12 mx-auto">
          <div
            className="text-center mb-10"
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-2">
              Advanced Trading Tools
            </h1>
            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>
          <div className="container mx-auto flex justify-between sm:px-10 px-5 border-2 border-blue-400 rounded-md py-12 flex-wrap-reverse items-center max-w-6xl bg-blue-100">
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mt-10 md:mb-0 items-center text-center">
              <h1
                className="title-font sm:text-4xl text-2xl mb-4 font-bold text-gray-900"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                Harness cutting-edge technology for
                <br className="lg:inline-block" />
                <span className="text-blue-500">market</span> analysis
              </h1>
              <p
                className="mb-8 leading-relaxedf font-normal"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                Your money’s safety is our priority. We’ll invest your funds
                across various creditworthy assets per your investment policy to
                protect your purchasing power.
              </p>
              <div
                className="flex justify-center"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <Link to="/contact">
                  <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-full text-lg font-medium">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://a5537b8c.rocketcdn.me/wp-content/uploads/2024/02/akr2da91ryhr1y6b-1024x585.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero3;
