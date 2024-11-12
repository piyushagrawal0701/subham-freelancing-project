import React from "react";
import { Link } from "react-router-dom";

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
                  Proprietary Trading Solutions
                </h2>
                <p class="leading-relaxed text-base text-gray-500">
                  <b>Crypto, Forex, Equities:</b> Advanced AI-driven strategies
                  for capturing high-potential opportunities across global
                  markets.
                  <br /> <br />
                  <b>Algorithmic Trading:</b> Automated systems designed for
                  precision and swift market response.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 text-2xl">
                <ion-icon name="cash-outline"></ion-icon>
                </div>
                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">
                  AI-Powered Investment Advisory
                </h2>
                <p class="leading-relaxed text-base text-gray-500">
                  <b>Smart Asset Rankings:</b> AI-based asset rankings for
                  data-driven decisions.
                  <br /> <br />
                  <b> Optimized Indices:</b> Custom indices aligned with client
                  goals and top-performing assets.
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
                  Intelligent Portfolio Management
                </h2>
                <p class="leading-relaxed text-base text-gray-500">
                  <b>Dynamic Rebalancing:</b> Real-time adjustments for optimal returns
                  and risk balance. 
                  <br /> <br />
                  <b>Risk Assessment:</b> Predictive analytics to
                  align portfolios with risk tolerance.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 text-2xl">
                <ion-icon name="bar-chart-outline"></ion-icon>
                </div>
                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">
                  AI-Powered Buy/Sell Signals
                </h2>
                <p class="leading-relaxed text-base text-gray-500">
                  <b>Market Movers Identification:</b> Key Buy/Sell signals for optimal
                  market entry and exit.
                  <br /> <br />
                  <b> Real-Time Signals:</b> Actionable signals
                  to maximize profit potential.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 text-2xl">
                <ion-icon name="people-outline"></ion-icon>
                </div>
                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">
                  Training and Mentorship
                </h2>
                <p class="leading-relaxed text-base text-gray-500">
                  <b>Aspiring Trader Programs:</b> Market basics, AI strategies, and
                  resilience.
                  <br /> <br />
                   <b>Advanced Mentorship:</b> Guidance on advanced
                  techniques and risk management.
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
                <p class="leading-relaxed text-base text-gray-500">
                  Transparency and open communication are integral to our
                  approach. We provide clients with detailed insights into our
                  processes.
                </p>
              </div>
            </div>
          </div>
          <Link to="/contact">
            <button class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Contact us
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
