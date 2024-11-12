import React from "react";

const Footer2 = () => {
  return (
    <>
      <footer className="bg-[#e2ebfa]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
          <div className=" place-items-center mx-auto">
            <div className="py-6 place-items-center mx-auto text-center">
              <ul className="flex flex-wrap gap-4 text-md font-medium max-md:text-center max-md:justify-center text-xl">
                <li>
                  <a
                    href="https://www.instagram.com/zentrugrit/"
                    className="text-gray-500 transition hover:text-blue-500"
                  >
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/company/zentrugrit"
                    className="text-gray-500 transition hover:text-blue-500"
                  >
                    {" "}
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li>
                  <a
                    href="https://x.com/zentrugrit"
                    className="text-gray-500 transition hover:text-blue-500"
                  >
                    {" "}
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61567600814351"
                    className="text-gray-500 transition hover:text-blue-500"
                  ><ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@zentrugrit"
                    className="text-gray-500 transition hover:text-blue-500"
                  >
                    {" "}
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.reddit.com/user/zentrugrit/"
                    className="text-gray-500 transition hover:text-blue-500"
                  >
                    {" "}
                    <ion-icon name="logo-reddit"></ion-icon>
                  </a>
                </li>
              </ul>
              {/* <ul className="flex flex-wrap gap-4 text-md font-medium max-md:text-center max-md:justify-center">
                <li>
                  <a
                    href="https://www.instagram.com/zentrugrit/"
                    className="text-gray-500 transition hover:text-blue-500"
                  >
                    Instagram
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/company/zentrugrit"
                    className="text-gray-500 transition hover:text-blue-500"
                  >
                    {" "}
                    LinkedIn
                  </a>
                </li>

                <li>
                  <a
                    href="https://x.com/zentrugrit"
                    className="text-gray-500 transition hover:text-blue-500"
                  >
                    {" "}
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61567600814351"
                    className="text-gray-500 transition hover:text-blue-500"
                  >
                    Facebook
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@zentrugrit"
                    className="text-gray-500 transition hover:text-blue-500"
                  >
                    {" "}
                    Youtube
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.reddit.com/user/zentrugrit/"
                    className="text-gray-500 transition hover:text-blue-500"
                  >
                    {" "}
                    Reddit
                  </a>
                </li>
              </ul> */}

              <p className="mt-4 text-sm text-gray-500">
                &copy; 2024. Zentrugrit Alpha Edge Pvt Ltd. Hyderabad,
                Telangana, 502319
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
