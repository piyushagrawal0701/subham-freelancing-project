import React from "react";

const WhatWeDo = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
              <div class="w-24 h-full bg-blue-500"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1
                class="sm:w-2/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0"
                data-aos="zoom-in-up"
                data-aos-delay="0"
                data-aos-duration="1000"
              >
                What We Do
              </h1>
              <p
                class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 font-medium"
                data-aos="zoom-in-up"
                data-aos-delay="0"
                data-aos-duration="1000"
              >
                Empowering trading, advisory, and mentorship with AI-driven
                strategies for optimal growth.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div
              class="p-4 md:w-1/3 sm:mb-0 mb-6"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://www.fxpipsguru.com/wp-content/uploads/2023/10/prop-firm-challenges.jpg"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Proprietary Trading
              </h2>
              <p class="text-base leading-relaxed mt-2">
                We execute proprietary trades in crypto, forex, and equities
                using our proprietary technology and strategies. These advanced
                tools combine AI and data-driven methods to optimize performance
                and seize high-value market opportunities.
              </p>
              
            </div>
            <div
              class="p-4 md:w-1/3 sm:mb-0 mb-6"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://i0.wp.com/eastgate-software.com/wp-content/uploads/2024/06/5-best-ai-trading-platforms.webp?fit=1920%2C1080&ssl=1"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                AI-Powered Advisory and Portfolio Management
              </h2>
              <p class="text-base leading-relaxed mt-2">
                We offer advisory services and smart portfolio management
                solutions that leverage AI to dynamically adjust portfolios,
                optimize asset allocation, and deliver data-backed
                recommendations.
              </p>
           
            </div>
            <div
              class="p-4 md:w-1/3 sm:mb-0 mb-6"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://www.brokerxplorer.com/upload/content/2023-03/how-to-learn-trading-facetoface-effectively-4220-1.jpg"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Training and Mentorship
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Our comprehensive training programs cater to both new and
                experienced traders, covering AI-driven trading techniques,
                psychology, and advanced risk management, preparing them to
                excel in any market environment.
              </p>
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
