import React from "react";
import Faq from "../../Components/Faq/Faq";

const Contact = () => {
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-28 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 grayscale-1 opacity-40 contrast-[1.2]"
              frameborder="0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14597.04749071276!2d77.9429042!3d23.844833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397957ee368596bd%3A0xbe8ae077cb18a43f!2sHITKARNI%20DHARM%20SHALA!5e0!3m2!1sen!2sin!4v1725131657472!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 font-medium">
                  Near Hitkarni Dharamshala, Mill road, Ganj Basoda (M.P)
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:sample@gmail.com"
                  className="text-blue-500 leading-relaxed"
                >
                  sample@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">
                  <a href="tel:123-456-789">123-456-789</a>,{" "}
                  <a href="tel:987-654-321">987-654-321</a>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-bold title-font">
              Contact us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600 font-medium">
              Feel free to contact us !
            </p>
            <form
              action="https://formsubmit.co/agrawal777piyush@gmail.com"
              method="post"
            >
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Mobile no.
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-blue-500 hover:bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-[#3737b5]rounded text-lg rounded-md w-full font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
};

export default Contact;
