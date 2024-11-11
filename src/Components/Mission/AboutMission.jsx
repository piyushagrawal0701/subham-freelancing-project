import React from "react";
import { Link } from "react-router-dom";

const AboutMission = () => {
  return (
    <>
      {" "}
      <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/duqtesyku/image/upload/v1726203514/team-goals-animate_p60ajl.svg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Our Mission & <span className="text-blue-500">Vision</span>
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed font-medium">
            Our mission is to transform trading standards through innovation, expertise, and a relentless commitment to sustainable growth for our clients.
              <br /> <br />
              Our vision is to reshape the financial landscape by merging human intelligence with advanced AI, setting a new standard for intelligent, ethical, and strategic financial services. We aim to empower traders and investors to navigate the markets with clarity, precision, and resilience, fostering a future where finance is accessible, equitable, and innovative.
            </p>

            <div className="flex justify-center">
              <Link to="/contact">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                 Contact us
                </button>
              </Link>
           
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMission;
