import React from "react";
import img1 from "../../assets/Images/About/WIthPartner1.png";
import img2 from "../../assets/Images/About/WithPartner2.png";
import img3 from "../../assets/Images/About/WithPartner3.png";
const OurClients = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 sm:pt-16 sm:pb-0 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-2">
            <h1
              className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900"
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Our <span className="text-blue-500">Partners</span>
            </h1>
            <p
              className="lg:w-2/3 mx-auto leading-relaxed sm:text-xl text-md font-medium mb-1"
              data-aos="zoom-in-up"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              ZenTruGrit AE+ partners with GTCFX and Aetram for access to MT4, MT5,
              and cTrader with 1,000+ assets.
            </p>
          </div>
          <section class="text-gray-600 body-font py-8">
            <div class="container  mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="p-4 lg:w-1/3">
                  <img src={img1} alt="" />
                </div>
                <div class="p-4 lg:w-1/3">
                  <img src={img2} alt="" />
                </div>
                <div class="p-4 lg:w-1/3">
                 <img src={img3} alt="" />
                </div>
              </div>
            </div>
          </section>
          {/* <div className="flex flex-wrap -m-4 text-center">

            <div
              className="sm:p-4 p-1 md:w-1/4 sm:w-1/2 w-1/2"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="aspect-square flex justify-center items-center border-gray-200 sm:px-4 px-1 sm:py-6 py-2 rounded-lg">
                <img src={img1} alt="" />
              </div>
            </div>
            <div
              className="sm:p-4 p-1 md:w-1/4 sm:w-1/2 w-1/2"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="aspect-square flex justify-center items-center border-gray-200 sm:px-4 px-1 sm:py-6 py-2 rounded-lg">
                <img className="w-28"
                  src={img2}
                  alt=""
                />
              </div>
            </div>
            <div
              className="sm:p-4 p-1 md:w-1/4 sm:w-1/2 w-1/2"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div className="aspect-square flex justify-center items-center border-gray-200 sm:px-4 px-1 sm:py-6 py-2 rounded-lg">
                <img className="w-28"
                  src={img3}
                  alt=""
                />
              </div>
            </div>
            <div
              className="sm:p-4 p-1 md:w-1/4 sm:w-1/2 w-1/2"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="aspect-square flex justify-center items-center border-gray-200 sm:px-4 px-1 sm:py-6 py-2 rounded-lg">
                <img
                  src="https://t4.ftcdn.net/jpg/04/88/52/39/360_F_488523992_FwQ8IAbJdENf6gvQgOKIeZSTvPmZXC2r.jpg"
                  alt=""
                />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default OurClients;
