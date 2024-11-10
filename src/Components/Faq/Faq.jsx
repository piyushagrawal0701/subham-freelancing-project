import React from "react";
import "./faq.css";

const Faq = () => {
  return (
    <>
      <section className="faq-section">
        <div className="accordion ">
          <h1
            className="sm:pb-10 pb-6 max-md:pt-10 font-semibold"
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            Frequently Asked <span className="text-blue-500"> Questions</span>
          </h1>
          <div
            className="accordion-item "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <input type="checkbox" id="accordion1" />
            <label htmlFor="accordion1" className="accordion-item-title">
              <span className="icon"></span>What services does ZenGrit AlphaEdge
              offer?
            </label>
            <div className="accordion-item-desc">
              ZenGrit AlphaEdge provides expert-guided trading, advanced market
              analysis tools, and personalized investment strategies to enhance
              your trading experience.
            </div>
          </div>

          <div
            className="accordion-item"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <input type="checkbox" id="accordion2" />
            <label htmlFor="accordion2" className="accordion-item-title">
              <span className="icon"></span>How can I start trading with expert
              guidance?
            </label>
            <div className="accordion-item-desc">
              Simply contact us for a free proposal. Our team will guide you
              through the setup process and tailor a trading plan based on your
              goals.
            </div>
          </div>

          <div
            className="accordion-item"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <input type="checkbox" id="accordion3" />
            <label htmlFor="accordion3" className="accordion-item-title">
              <span className="icon"></span>Is my investment safe with ZenGrit
              AlphaEdge?
            </label>
            <div className="accordion-item-desc">
              Yes, we prioritize the safety of your funds by diversifying
              investments across creditworthy assets to protect your purchasing
              power.
            </div>
          </div>

          <div
            className="accordion-item"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <input type="checkbox" id="accordion4" />
            <label htmlFor="accordion4" className="accordion-item-title">
              <span className="icon"></span>What makes your trading tools
              innovative?
            </label>
            <div className="accordion-item-desc">
              Our platform harnesses cutting-edge technology for in-depth market
              analysis, providing real-time insights and advanced tools to
              maximize your trading potential.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
