import React from "react";

const Features = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-14 mx-auto">
          <h1
            class="sm:text-3xl text-2xl font-bold title-font text-center text-gray-900 mb-20"
            data-aos="zoom-in-up"
            data-aos-delay="0"
            data-aos-duration="1000"
          >
            Features and <span className="text-[#2468d6]"> Benefits</span>
          </h1>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex">
              <div
                class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0 text-3xl"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <ion-icon name="trending-up-outline"></ion-icon>
              </div>
              <div class="flex-grow pl-6">
                <h2
                  class="text-gray-900 text-lg title-font font-semibold mb-2"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  Increased profits
                </h2>
                <p
                  class="leading-relaxed text-base font-normal"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
              Empower your investment strategies with tools designed to maximize returns. 
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0 text-3xl" data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000">
                <ion-icon name="bar-chart-outline"></ion-icon>
              </div>
              <div class="flex-grow pl-6" data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000">
                <h2 class="text-gray-900 text-lg title-font font-semibold mb-2">
                Risk Management
                </h2>
                <p class="leading-relaxed text-base font-normal" data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000">
                  Minimize potential losses with robust risk management tools that help you safeguard your investments and make balanced decisions.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0 text-3xl" data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000">
                <ion-icon name="cloud-upload-outline"></ion-icon>
              </div>
              <div class="flex-grow pl-6" data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000">
                <h2 class="text-gray-900 text-lg title-font font-semibold mb-2">
                Customized Strategies
                </h2>
                <p class="leading-relaxed text-base font-normal" data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000">
                Tailor your trading approach with strategies that adapt to your unique goals, ensuring alignment with your financial objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
