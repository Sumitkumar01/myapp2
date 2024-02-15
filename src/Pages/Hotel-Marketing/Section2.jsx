import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import BlueLinkButton from "../../Component/BlueLinkButton";
import Url2 from "../../Assests/indus-we-serv/Group-434.png";
import Url1 from "../../Assests/indus-we-serv/Group-43.png";
import Url3 from "../../Assests/indus-we-serv/asset-7.png";
import Url4 from "../../Assests/indus-we-serv/asset-8.png";
import Url5 from "../../Assests/indus-we-serv/customer-care_6012594 1 (1).svg";
import Url6 from "../../Assests/indus-we-serv/Group-435.png";
// import { motion } from "framer-motion";

function Section2() {
  const data = [
    {
      title: "Online Presence",
      description: "Be discoverable 24/7, reaching potential guests globally.",
      url: Url1,
      alt: "",
    },
    {
      title: "Showcase Your Hotel",
      description: "Highlight unique features and amenities.",
      url: Url2,
      alt: "",
    },
    {
      title: "Build Trust",
      description: "Establish credibility and professionalism.",
      url: Url3,
      alt: "",
    },
    {
      title: "Direct Bookings",
      description: "Boost revenue with a seamless booking experience.",
      url: Url4,
      alt: "",
    },
    {
      title: "Enhanced Customer Service",
      description: "Provide important information and assistance",
      url: Url5,
      alt: "",
    },
    {
      title: "Search Engine Visibility",
      description: "Improve visibility in online searches.",
      url: Url6,
      alt: "",
    },
  ];
  return (
    <div className="web-dev-section-1 py-4">
      <div className="container text-center">
        <h2 className="h2-lg ff-p c-fw-6 text-gray5">
          Why do Your Hotel needs Website?
        </h2>
      </div>
      <div className="container">
        <div className="text-center m-auto" style={{ maxWidth: "80%" }}>
          <p className="ff-p c-fw-4 p-text-lg text-clr-scorpion text-sm-justify">
            Find a team of digital marketers you can rely on. As a Hotel
            Marketing Agency every day, we build trust through communication,
            transparency, and results.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="d-none d-sm-none d-md-none d-lg-block">
          <div className="row g-3 ">
            {data.map((item, i) => (
              <div className="col-lg-4 col-md-6 col-12 p-2" key={i}>
                <div
                  className="card p-2"
                  style={{ backgroundColor: "#E8FFF9" }}
                >
                  <div
                    className="m-auto rounded-circle p-1"
                    style={{
                      width: "7rem",
                      backgroundColor: "#110D3C",
                      height: "7rem",
                    }}
                  >
                    <img src={item.url} className=" img-fluid" alt={item.alt} />
                  </div>
                  <div className="card-body " style={{ height: "9rem" }}>
                    <h3 className="h3-1 ff-p c-fw-4 text-clr-gray5 card-title text-capitalize text-center">
                      {item.title}
                    </h3>
                    <p className="p-text-md ff-p c-fw-4 card-text text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* slider section */}
        <div className="py-3 d-sm-block d-md-block d-lg-none text-center">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="card">
                  {/* <div className="m-auto" style={{ width: "7rem" }}>
                    <img
                      src={item.url}
                      className="img-top img-fluid"
                      alt={item.alt}
                    />
                  </div> */}
                  <div style={{ height: "9rem" }} className="py-3 ">
                    <div
                      className="m-auto rounded-circle p-1"
                      style={{
                        width: "7rem",
                        backgroundColor: "#110D3C",
                        height: "7rem",
                      }}
                    >
                      <img
                        src={item.url}
                        className=" img-fluid"
                        alt={item.alt}
                      />
                    </div>
                  </div>
                  <div className="card-body p-2" style={{ height: "9rem" }}>
                    <h3 className="h3-1 ff-p c-fw-4 text-clr-gray5 card-title text-capitalize text-center">
                      {item.title}
                    </h3>
                    <p className="p-text-md ff-p c-fw-4 card-text text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="text-center py-lg-4">
        <BlueLinkButton
          className="px-5 text-capitalize rounded-5"
          url="/contact/"
          text="contact us"
        />
      </div>
    </div>
  );
}

export default Section2;
