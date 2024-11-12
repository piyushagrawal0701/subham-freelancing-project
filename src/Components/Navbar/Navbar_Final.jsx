import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";

import logo from "../../assets/Logo/ZenTruGrit Logo-Only.png";

import { Link, NavLink, useLocation } from "react-router-dom";
import GlowBtn from "../Buttons/Glow Btn/GlowBtn";
// import { useAuth } from "../../Context/AuthContext";
// import Btn2 from "../Buttons/Btn2/Btn2";
// import { Bounce, ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const NavbarFinal = () => {
  const location = useLocation();

  // ---------- TOAST FUNCTION ------------
  // const LogoutSuccessNotify = () => {
  //   toast.success("Logout Successfully", {
  //     position: "top-right",
  //     autoClose: 4000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //     transition: Bounce,
  //   });
  // };

  // const LogoutFailNotify = () => {
  //   toast.error("Failed to logout. Please try again.", {
  //     position: "top-right",
  //     autoClose: 4000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //     transition: Bounce,
  //   });
  // };

  // ------- USER & LOGOUT --------------
  // const { user, logout } = useAuth();

  // ----------- LOGOUT FUNCTION -------
  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //     LogoutSuccessNotify();
  //   } catch (error) {
  //     LogoutFailNotify();
  //     console.error("Failed to logout", error);
  //   }
  // };

  const [isNavOpen, setIsNavOpen] = useState(false);
  const mediaSize = 991;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle("hidden-scrolling");
  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.classList.remove("hidden-scrolling");
  };

  const handleMenuItemClick = (event) => {
    if (
      event.target.getAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;

      if (menuItemHasChildren.classList.contains("active")) {
        collapseSubMenu();
      } else {
        if (document.querySelector(".menu-item-has-children.active")) {
          collapseSubMenu();
        }
        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  };

  const collapseSubMenu = () => {
    const activeSubMenu = document.querySelector(
      ".menu-item-has-children.active .sub-menu"
    );
    if (activeSubMenu) {
      activeSubMenu.removeAttribute("style");
    }
    const activeMenuItem = document.querySelector(
      ".menu-item-has-children.active"
    );
    if (activeMenuItem) {
      activeMenuItem.classList.remove("active");
    }
  };

  const resizeFix = () => {
    if (isNavOpen) {
      toggleNav();
    }
    if (document.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  };

  window.addEventListener("resize", function () {
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });

  // Close navbar on route change
  useEffect(() => {
    closeNav();
  }, [location]);

  // ------------ HIDING NAVBAR ON SCROLL DOWN ------------
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      {/* <ToastContainer /> */}
      <section className={visible ? "visible" : "hidden"}>
        <header className="header z-50">
          <div className="nav-container">
            <div className="header-main">
              <div className="logo sm:-ml-0 ml-0">
                <Link to="/" className="flex flex-row items-center w-[300px]">
                  <img
                    src={logo}
                    alt=""
                    className="sm:w-[5vw] w-[20vw] sm:pr-2 max-md:px-2 max-md:pl-3  "
                  />
                  <h1 className="sm:text-xl text-md text-black font-semibold">
                    ZenTruGrit AE+
                  </h1>
                </Link>
              </div>
              <div
                className={`open-nav-menu ${isNavOpen ? "active" : ""}`}
                onClick={toggleNav}
              >
                <span></span>
              </div>
              <div
                className={`menu-overlay ${isNavOpen ? "active" : ""}`}
                onClick={closeNav}
              ></div>
              {/* <!-- navigation menu start --> */}
              <nav className={`nav-menu ${isNavOpen ? "open" : ""}`}>
                <div className="close-nav-menu font-bold" onClick={closeNav}>
                  X
                </div>
                <ul className="menu">
                  <li
                    className="menu-item "
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                  >
                    <Link to="/home">
                      <div className="flex gap-1 items-center effect-underline ">
                        <p className="pt-1">
                          {" "}
                          <ion-icon name="home"></ion-icon>
                        </p>
                        Home
                      </div>
                    </Link>
                  </li>

                  <li
                    className="menu-item"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="150"
                  >
                    <Link to="/about">
                      <div className="flex gap-1 items-center effect-underline">
                        <p className="pt-1">
                          {" "}
                          <ion-icon name="person"></ion-icon>
                        </p>
                        About
                      </div>
                    </Link>
                  </li>
                  <li
                    className="menu-item"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="150"
                  >
                    <Link to="/services">
                      <div className="flex gap-1 items-center effect-underline">
                        <p className="pt-1">
                          {" "}
                          <ion-icon name="build"></ion-icon>
                        </p>
                        Services
                      </div>
                    </Link>
                  </li>
                  <li
                    className="menu-item"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="150"
                  >
                    <Link to="/contact">
                      <div className="flex gap-1 items-center effect-underline">
                        <p className="pt-1">
                          {" "}
                          <ion-icon name="call"></ion-icon>
                        </p>
                        Contact us
                      </div>
                    </Link>
                  </li>

                  <li className="menu-item ">
                    <div className="social-icons text-2xl sm:text-black text-white flex gap-4 hover:cursor-pointer pt-1 max-md:pl-4">
                      <a href="https://www.instagram.com/zentrugrit/">
                        <span className="hover:scale-105">
                          <ion-icon name="logo-instagram"></ion-icon>
                        </span>
                      </a>
                      <a href="https://www.linkedin.com/company/zentrugrit">
                        <span className="hover:scale-105">
                          <ion-icon name="logo-linkedin"></ion-icon>
                        </span>
                      </a>
                      <a href="https://x.com/zentrugrit">
                        <span className="hover:scale-105">
                          <ion-icon name="logo-twitter"></ion-icon>
                        </span>
                      </a>
                    </div>
                    {/* <Link to="/contact">
                      <div className="flex text-lg justify-center gap-1 items-center">
                        <GlowBtn text="Get in touch" />
                      </div>
                    </Link> */}
                  </li>
                </ul>
              </nav>
              {/* <!-- navigation menu end --> */}
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default NavbarFinal;
