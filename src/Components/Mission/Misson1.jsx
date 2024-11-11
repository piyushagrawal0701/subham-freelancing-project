import React from "react";

const Misson1 = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-[#f0f7fe]">
        <div className="container px-5 sm:py-24 py-12 mx-auto ">
          <div className="text-center mb-20">
            <h1
              className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-2"
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Our Mission
            </h1>
            <div
              className="flex mb-2 justify-center"
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
            <p
              className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"
              data-aos="zoom-in-up"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              Our mission is to empower individuals and businesses to make
              data-informed decisions in finance and trading.
            </p>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div
                className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0 custom-blue-shadow"
                data-aos="flip-right"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <p className="text-3xl flex justify-center items-center">
                  <ion-icon name="search-outline"></ion-icon>
                </p>
              </div>

              <div className="flex-grow">
                <h2
                  className="text-gray-900 text-lg title-font font-medium mb-3"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  Research Markets
                </h2>
                <p
                  className="leading-relaxed text-base"
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="1000"
                >
                  Gain deep insights into emerging markets and trends with our
                  advanced research tools, helping you stay ahead of the curve
                  and make informed financial decisions.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div
                className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0 custom-blue-shadow"
                data-aos="flip-right"
                data-aos-delay="150"
                data-aos-duration="1000"
              >
                <p className="text-3xl flex justify-center items-center">
                  <ion-icon name="bulb-outline"></ion-icon>
                </p>
              </div>
              <div className="flex-grow">
                <h2
                  className="text-gray-900 text-lg title-font font-medium mb-3"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  Using Modern Tools
                </h2>
                <p
                  className="leading-relaxed text-base"
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="1000"
                >
                  Quickly assess asset values with our AI-driven valuation
                  tools, offering real-time, accurate insights for optimized
                  financial strategies
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div
                className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0 custom-blue-shadow"
                data-aos="flip-right"
                data-aos-delay="250"
                data-aos-duration="1000"
              >
                <p className="text-3xl flex justify-center items-center">
                  <ion-icon name="business-outline"></ion-icon>
                </p>
              </div>
              <div className="flex-grow">
                <h2
                  className="text-gray-900 text-lg title-font font-medium mb-3"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  Track Assets
                </h2>
                <p
                  className="leading-relaxed text-base"
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="1000"
                >
                  Stay informed on asset performance and market dynamics with
                  our advanced tracking systems, enabling proactive management
                  and strategic decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Misson1;
