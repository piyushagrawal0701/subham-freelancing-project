import React from "react";

const Misson1 = () => {
  return (
    <>
      <section class="text-gray-600 body-font bg-[#f0f7fe]">
        <div class="container px-5 sm:py-24 py-12 mx-auto ">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-semibold title-font text-gray-900 mb-4">
              Our Mission
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
              eligendi voluptas repudiandae!
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <p className="text-3xl flex justify-center items-center">
                  <ion-icon name="search-outline"></ion-icon>
                </p>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Research Suburbs
                </h2>
                <p class="leading-relaxed text-base">
                  Wonder twenty hunted and put income set desire expect. Am
                  cottage calling.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <p className="text-3xl flex justify-center items-center">
                  <ion-icon name="bulb-outline"></ion-icon>
                </p>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Instant Valuation
                </h2>
                <p class="leading-relaxed text-base">
                  Conveying or northward offending admitting perfectly my.
                  Colonel gravit and moonlight.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <p className="text-3xl flex justify-center items-center">
                  <ion-icon name="business-outline"></ion-icon>
                </p>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Track Property
                </h2>
                <p class="leading-relaxed text-base">
                  Moderate children at of outweigh it. Unsatiable it considered
                  invitation he travelling insensible.
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
