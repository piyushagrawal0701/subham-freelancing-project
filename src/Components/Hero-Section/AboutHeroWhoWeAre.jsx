import React from "react";
import AboutImg from "../../assets/Images/About/aboutus.svg";

const AboutHeroWhoWeAre = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 sm:py-12 pt-12 pb-12 md:flex-row flex-col items-center max-w-6xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p
              className="px-2 font-medium"
              data-aos="zoom-in-up"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              Who we are
            </p>
            <h1
              className="title-font sm:text-4xl text-2xl mb-4 font-bold text-gray-900"
              data-aos="zoom-in-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              Shaping the Future of
              <br className="lg:inline-block" />
              <span className="text-blue-500">Trading </span>Excellence
            </h1>
            <p
              className="mb-8 leading-relaxed font-normal"
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
          ZenTruGrit AE+ is redefining the landscape of trading with a fusion of advanced AI, psychological insight, and legendary market wisdom. Our mission is to empower traders, asset managers, and investors
            </p>
            <div className="flex justify-center">
              <button
                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-full text-lg  font-medium"
                data-aos="zoom-in-up"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                Learn More
              </button>
              <button
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg font-medium"
                data-aos="zoom-in-up"
                data-aos-delay="450"
                data-aos-duration="1000"
              >
                Contact us
              </button>
            </div>
          </div>
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={AboutImg}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeroWhoWeAre;
