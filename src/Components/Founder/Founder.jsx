import React from "react";
import { Link } from "react-router-dom";
import founderImg from "../../assets/Images/About/founderImg.jpg"
const Founder = () => {
  return (
    <>
    
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={founderImg}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
            Meet Our Founder
              <br class="hidden lg:inline-block" />
             
            </h1>
            <p class="mb-8 leading-relaxed font-normal">
            ZenTruGrit AE+ was founded by <b>Vinod Yadav Mettu</b>, a seasoned trader with deep expertise in both <b>Indian and U.S. financial</b> markets. With a BBA in Finance from ICFAI Business School, Vinod has excelled in equity and derivatives analysis, trading U.S. commodities, and mastering geopolitical insights. His dedication to innovation and integrity guides ZenTruGrit’s mission.
            </p>
            <div class="flex justify-center ">
              <Link to="/contact">
              <button class="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg max-md:w-full">
                Contact us
              </button></Link>
              {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Founder;