import React from "react";
import img1 from "../../assets/Images/About/clientlogo1.png";
// import img2 from "../../assets/Images/About/clientlogo2.png";
// import img3 from "../../assets/Images/About/clientlogo3.png";
const OurClients = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 sm:pt-16 py-12 mx-auto">
          <div class="flex flex-col text-center w-full mb-2">
            <p class="lg:w-2/3 mx-auto leading-relaxed text-xl font-medium mb-1">
              Our Clients
            </p>
            <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
              TRUSTED BY <span className="text-blue-500">20,000+ </span>
              <br className="max-md:inline-block hidden" />
              ORGANIZATIONS WORLDWIDE
            </h1>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class="sm:p-4 p-1 md:w-1/4 sm:w-1/2 w-1/2">
              <div class="aspect-square flex justify-center items-center border-gray-200 sm:px-4 px-1 sm:py-6 py-2 rounded-lg">
                <img src={img1} alt="" />
              </div>
            </div>
            <div class="sm:p-4 p-1 md:w-1/4 sm:w-1/2 w-1/2">
              <div class="aspect-square flex justify-center items-center border-gray-200 sm:px-4 px-1 sm:py-6 py-2 rounded-lg">
                <img src="https://t3.ftcdn.net/jpg/06/52/77/88/360_F_652778840_33dElK3dH5ryZgUb6aGLwC7q5G3p2DxD.jpg" alt="" />
              </div>
            </div>
            <div class="sm:p-4 p-1 md:w-1/4 sm:w-1/2 w-1/2">
              <div class="aspect-square flex justify-center items-center border-gray-200 sm:px-4 px-1 sm:py-6 py-2 rounded-lg">
                <img src="https://www.shutterstock.com/image-vector/financial-bull-logo-design-trade-600nw-2099164435.jpg" alt="" />
              </div>
            </div>
            <div class="sm:p-4 p-1 md:w-1/4 sm:w-1/2 w-1/2">
              <div class="aspect-square flex justify-center items-center border-gray-200 sm:px-4 px-1 sm:py-6 py-2 rounded-lg">
                <img src="https://t4.ftcdn.net/jpg/04/88/52/39/360_F_488523992_FwQ8IAbJdENf6gvQgOKIeZSTvPmZXC2r.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurClients;
