import React from "react";
import heroImg2 from "../../assets/Images/Hero-Section/Hero2.png"

const Hero2 = () => {
  return (
    <>
      <section class="text-gray-600 body-font border-b-2 border-blue-500 ">
        <div class="container mx-auto flex px-5 sm:py-24 py-12 md:flex-row flex-col items-center max-w-6xl">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p class="px-2 font-medium">About us</p>
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Crafting Tomorrow’s
              <br class="lg:inline-block" />
              <span className="text-blue-500">Trading</span> Standards
            </h1>
            <p class="mb-8 leading-relaxed font-normal">
              Brief narrative about the company’s history, values, and what sets
              it apart from the competition.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-full text-lg">
                Learn More
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg">
                Contact us
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={heroImg2}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
