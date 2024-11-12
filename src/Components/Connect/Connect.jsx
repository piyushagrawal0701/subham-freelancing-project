import React from "react";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center max-w-screen-xl">
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto  mb-10 md:mb-0"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/duqtesyku/image/upload/v1726153445/connected-world-animate_cenyiz.svg"
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pl-32 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1
              className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900"
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Careers
              <br className="hidden lg:inline-block" />
            </h1>
            <p
              className="mb-8 leading-relaxed text-xl"
              data-aos="zoom-in-up"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              <b className="">Join Our Trailblazing Team</b>

              <ul className="flex flex-col gap-3 mt-2">
                <li
                  className="flex gap-2 items-center"
                  data-aos="fade-up"
                  data-aos-delay="250"
                  data-aos-duration="1000"
                >
                  <p className="mt-2 text-blue-500 text-2xl">
                    <ion-icon name="navigate-circle"></ion-icon>
                  </p>{" "}
                  Innovative Culture
                </li>
                <li
                  className="flex gap-2 items-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <p className="mt-2 text-blue-500 text-2xl">
                    <ion-icon name="navigate-circle"></ion-icon>
                  </p>{" "}
                  Grow with us
                </li>
                <li
                  className="flex gap-2 items-center"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                >
                  <p className="mt-2 text-blue-500 text-2xl">
                    <ion-icon name="navigate-circle"></ion-icon>
                  </p>{" "}
                  Competitive Benefits
                </li>
                <li
                  className="flex gap-2 items-center"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                >
                  <p className="mt-2 text-blue-500 text-2xl">
                    <ion-icon name="navigate-circle"></ion-icon>
                  </p>
                  Remote Opportunities
                </li>
                <li
                  className="flex gap-2 items-center"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                >
                  <p className="mt-2 text-blue-500 text-2xl">
                    <ion-icon name="navigate-circle"></ion-icon>
                  </p>{" "}
                  Dynamic Roles
                </li>
              </ul>
            </p>
            <div
              className="flex justify-center"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1000"
            >
              <Link to="/contact">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-full text-lg font-medium">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
