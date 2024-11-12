import { Route, Routes } from "react-router-dom";
import NavbarFinal from "./Components/Navbar/Navbar_Final";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import ScrollToTop from "./Components/Scroll to top/ScrollToTop";
import Services from "./Pages/Services/Services";
import Footer2 from "./Components/Footer/Footer2";
import Whatsapp from "./Components/Whatsapp-icon/Whatsapp";
// ..
AOS.init();
function App() {
  return (
    <>
      <div className="my-app">
        <NavbarFinal />
        <Whatsapp/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        {/* <Footer /> */}
        <Footer2/>
      </div>

      <ScrollToTop />
    </>
  );
}

export default App;
