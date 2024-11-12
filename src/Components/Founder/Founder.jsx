import React from "react";
import { Link } from "react-router-dom";
import founderImg from "../../assets/Images/About/founderImg.jpg";
import founderImgMobile from "../../assets/Images/About/founderImgMobile.png";

const Founder = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
          {/* ------------ FOR LAPTOP VERSION ---------------  */}

          <div
            class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 sm:hidden block"
            data-aos="zoom-in-up"
            data-aos-delay="0"
            data-aos-duration="1000"
          >
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={founderImgMobile}
            />
          </div>

          {/* ------------ FOR MOBILE VERSION ---------------  */}
          <div
            class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 sm:block hidden"
            data-aos="zoom-in-up"
            data-aos-delay="0"
            data-aos-duration="1000"
          >
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={founderImg}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1
              class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900"
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Meet Our Founder
              <br class="hidden lg:inline-block" />
            </h1>
            <p
              class="mb-8 leading-relaxed font-normal"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              ZenTruGrit AE+ was founded by <b>Vinod Yadav Mettu</b>, a seasoned
              trader with expertise in both{" "}
              <b>Indian and U.S. Financial</b> markets. With a BBA in Finance
              from ICFAI Business School, Vinod has excelled in equity and
              derivatives analysis, trading U.S. commodities, and mastering
              geopolitical insights. His dedication to innovation and integrity
              guides ZenTruGrit’s mission.
            </p>
            <div
              class="flex justify-center "
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              <div className="social-icons text-2xl text-black flex gap-4 hover:cursor-pointer pt-1 max-md:pl-4">
                <a href="https://www.instagram.com/vinodyadavmettu">
                  <span className="hover:scale-105">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/vinodyadavmettu/">
                  <span className="hover:scale-105">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </span>
                </a>
                <a href="https://x.com/vinodyadavmettu">
                  <span className="hover:scale-105">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </span>
                </a>
              </div>
              {/* <Link to="/contact">
                <button class="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg max-md:w-full">
                  Contact us
                </button>
              </Link> */}
              {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Founder;
