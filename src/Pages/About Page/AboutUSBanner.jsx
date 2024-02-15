import React from "react";
import "./Aboutuspage.css";
import { Link } from "react-router-dom";
import Sachin from "../../Assests/Images/Sachin.png.webp";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
// import { motion } from "framer-motion";

function AboutUSBanner() {
  const data = [
    {
      icon: <IoLogoLinkedin />,
      text: "Linkedin profile",
      link: "https://www.linkedin.com/in/sachinkapoor95/",
    },
    {
      icon: <AiFillInstagram />,
      text: "Instagram profile",
      link: "https://www.instagram.com/sachinkapoorrr/",
    },
  ];
  return (
    <div>
      <section className="container about-us-banner-section py-3">
        <div className="container text-center">
          <h1 className="about-us-banner-heading text-uppercase mt-1 mt-lg-5">
            Hospitality marketing agency in India
          </h1>
        </div>
        <div className="container mt-lg-5 py-lg-4">
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center justify-content-lg-start justify-content-center ">
              <div>
                <img src={Sachin} alt="Sachin" />
              </div>
            </div>
            <div className="col-lg-7 p-2 mt-2 mt-lg-0">
              <div>
                <p className="text-justify ff-p">
                  Welcome to Fielmente, your trusted hospitality marketing
                  company. I Sachin Kapoor founded Fielmente with a passion for
                  hospitality and marketing after completing my Masters in
                  Hospitality from WGSHA, Manipal, and gaining Sales & Marketing
                  experience from Marriott & Hyatt in September 2020. We are a
                  team of 15+ hospitality marketing experts who make sure about 
                  your business growth and take care about your Hospitality
                  venture online reputation.
                </p>
                <p className="text-justify">
                  Our strategic consulting services craft tailored marketing
                  strategies to boost bookings, build your brand, and expand
                  your reach, elevating your hospitality business with
                  results-driven, creative marketing.
                </p>
              </div>
              <div className="buttons-link d-flex align-items-center justify-content-center justify-content-lg-start gap-3 p-2">
                {data.map((item, i) => (
                  <div
                    className="d-flex align-items-center justify-content-start "
                    key={i}
                  >
                    <Link
                      to={item.link}
                      target="_blank"
                      className="d-flex align-items-center justify-content-center gap-1 px-3 py-2 rounded-3 text-d-none hover-black"
                    >
                      {item.icon} {item.text}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUSBanner;
