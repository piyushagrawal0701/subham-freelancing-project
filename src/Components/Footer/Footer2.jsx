import React from "react";

const Footer2 = () => {
  return (
    <>
      <footer className="bg-[#e2ebfa]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
          <div className=" place-items-center mx-auto">
            <div className="py-6 place-items-center mx-auto text-center">
             
                <ul className="flex flex-wrap gap-4 text-md font-medium">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:text-blue-500"
                    >
                     Instagram
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:text-blue-500"
                    >
                      {" "}
                      LinkedIn
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:text-blue-500"
                    >
                      {" "}
                      Twitter
                    </a>
                  </li>
                </ul>

                <p className="mt-8 text-sm text-gray-500">
                  &copy; 2024. ZenTruGrit AlphaEdge. All rights reserved.
                </p>
            
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
