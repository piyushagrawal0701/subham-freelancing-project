import React from "react";

const Connect = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto  mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/duqtesyku/image/upload/v1726153445/connected-world-animate_cenyiz.svg"
            />
          </div>

          <div class="lg:flex-grow md:w-1/2 lg:pl-32 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
              Careers
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed text-xl">
              <b className="">Join Our Trailblazing Team</b>

              <ul className="flex flex-col gap-3 mt-2">
                <li className="flex gap-2 items-center">
                  <p className="mt-2 text-blue-500 text-2xl">
                    <ion-icon name="navigate-circle"></ion-icon>
                  </p>{" "}
                  Innovative Culture
                </li>
                <li className="flex gap-2 items-center">
                  <p className="mt-2 text-blue-500 text-2xl">
                    <ion-icon name="navigate-circle"></ion-icon>
                  </p>{" "}
                  Grow with us
                </li>
                <li className="flex gap-2 items-center">
                  <p className="mt-2 text-blue-500 text-2xl">
                    <ion-icon name="navigate-circle"></ion-icon>
                  </p>{" "}
                  Competitive Benefits
                </li>
                <li className="flex gap-2 items-center">
                  <p className="mt-2 text-blue-500 text-2xl">
                    <ion-icon name="navigate-circle"></ion-icon>
                  </p>
                  Remote Opportunities
                </li>
                <li className="flex gap-2 items-center">
                  <p className="mt-2 text-blue-500 text-2xl">
                    <ion-icon name="navigate-circle"></ion-icon>
                  </p>{" "}
                  Dynamic Roles
                </li>
              </ul>
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
