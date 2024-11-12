import React from "react";
const AboutHero1 = () => {
  return (
    <>
      <section className="relative bg-[url('https://libertex.org/sites/default/files/styles/news_detail_hero/public/news/immm.jpeg?itok=0K8k3Tsh')] bg-cover bg-center text-white">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className=" relative mx-auto sm:px-4 px-2 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto text-center">
            <div className="flex justify-center items-center">
              <h1
                className=" text-2xl font-bold sm:text-5xl"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                Master the Markets with
                <strong className="font-bold text-blue-500 sm:block pt-1">
                  {"  "}
                  AI-driven Smart Technology
                  {"  "}
                </strong>
              </h1>
            </div>

            <p
              className="mt-4 sm:text-xl/relaxed max-w-xl text-center"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              Experience cutting-edge trading with expert guidance and
              innovative tools
            </p>

            <div
              className="mt-8 flex flex-wrap justify-center gap-4 mx-auto items-center"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1000"
            >
              <a
                className="block w-full max-md:max-w-[80%] rounded-full bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto "
                href="https://wa.me/9311224234?text=Hello%20there!%20I%20would%20like%20to%20get%20in%20touch."
                target="_blank"
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

export default AboutHero1;
