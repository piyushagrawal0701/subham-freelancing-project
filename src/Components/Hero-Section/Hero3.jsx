import React from "react";
import heroImg3 from "../../assets/Images/Hero-Section/Hero3.png";

const Hero3 = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 sm:py-20 py-12 mx-auto">
          <div class="text-center mb-10">
            <h1 class="sm:text-3xl text-2xl font-semibold title-font text-gray-900 mb-2">
              Advanced Trading Tools
            </h1>
            <div class="flex mt-2 justify-center">
              <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>
          <div class="container mx-auto flex justify-between sm:px-10 px-5 border-2 border-blue-500 rounded-md py-12 flex-wrap-reverse items-center max-w-6xl bg-blue-200">
            <div class="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mt-10 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-2xl mb-4 font-semibold text-gray-900">
                Harness cutting-edge technology for
                <br class="lg:inline-block" />
                <span className="text-blue-500">market</span> analysis
              </h1>
              <p class="mb-8 leading-relaxed">
              Your money’s safety is our priority. We’ll invest your funds across various creditworthy assets per your investment policy to protect your purchasing power.
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Learn More
                </button>
              
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={heroImg3}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero3;
