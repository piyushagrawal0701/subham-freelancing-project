import React from "react";
import Faq from "../../Components/Faq/Faq";

const Services = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 sm:py-32 py-20 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
              Our <span className="text-blue-500">Services</span>
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 font-medium">
              We provides AI-driven precision, resilience, and adaptive
              strategies for sustainable growth.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">
                  Data-Driven Decision Making
                </h2>
                <p class="leading-relaxed text-base">
                  At ZenTruGrit AE+, we believe that data is at the core of
                  smart financial decisions. We utilize a robust data analytics
                  framework that gathers and analyzes real-time and historical
                  data across global markets. This data-driven approach provides
                  insights into market trends, volatility patterns, and risk
                  factors.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">
                  AI and Machine Learning Models
                </h2>
                <p class="leading-relaxed text-base">
                  We integrate AI and machine learning to continuously monitor
                  and interpret market data, using predictive analytics to
                  forecast price movements and identify profitable trading
                  opportunities. Our models learn and adapt with each market
                  cycle, refining strategies to align with the latest data and
                  trends, enhancing our accuracy and agility in decision-making.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">
                  Quantitative and Technical Analysis
                </h2>
                <p class="leading-relaxed text-base">
                  Our methodology emphasizes quantitative analysis, employing
                  algorithms that identify statistical patterns and
                  relationships within market data. By incorporating technical
                  indicators, we gauge market momentum, trends, and reversals,
                  ensuring that our trades are well-timed and strategically
                  positioned.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">
                  Psychological Resilience and Discipline
                </h2>
                <p class="leading-relaxed text-base">
                  Trading and investing are as much about mindset as they are
                  about strategy. Our methodology includes psychological
                  training and resilience-building practices that help our team
                  and clients remain disciplined under market stress. By
                  fostering a psychology-driven approach, we help minimize the
                  impact of emotional biases and make decisions rooted in
                  rational analysis and strategic goals.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">
                  Risk Management and Capital Preservation
                </h2>
                <p class="leading-relaxed text-base">
                  Our risk management framework is designed to protect capital
                  while allowing for growth. We set defined stop-loss levels,
                  diversify across assets, and monitor exposure to maintain
                  balanced portfolios. Our AI tools continuously assess risk
                  factors, adjusting our strategy dynamically to prevent
                  excessive drawdowns, safeguard investments, and maximize
                  return potential.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">
                  Transparency and Client Collaboration
                </h2>
                <p class="leading-relaxed text-base">
                  Transparency and open communication are integral to our
                  approach. We provide clients with detailed insights into our
                  processes, decisions, and performance, fostering trust and
                  collaborative relationships. Through regular updates and
                  performance reviews, we empower clients with a clear
                  understanding of their portfolios and strategies, creating a
                  foundation for long-term partnerships.
                </p>
              </div>
            </div>
          </div>
          <button class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Contact us
          </button>
        </div>
      </section>
      <Faq/>
    </>
  );
};

export default Services;
