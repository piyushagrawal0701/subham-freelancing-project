import React from "react";
const Hero1 = () => {
  return (
    <>
      <section className="bg-hero-section-1 text-white">
        <div className="mx-auto sm:px-4 px-2 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto text-center">
            <div className="flex justify-center items-center">
              <h1 className=" text-2xl font-extrabold sm:text-5xl">
                Master the Markets with
                <strong className="font-extrabold text-blue-500 sm:block pt-1">
                  {"  "}
                  ZenGrit AlphaEdge
                  {"  "}
                </strong>
              </h1>
            </div>

            <p className="mt-4 sm:text-xl/relaxed max-w-xl">
              Experience cutting-edge trading with expert guidance and
              innovative tools
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full max-md:max-w-[80%] rounded-full bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Get Free Proposal
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero1;
