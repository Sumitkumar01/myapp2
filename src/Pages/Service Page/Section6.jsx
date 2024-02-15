import React from "react";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bharirawaha from "../../Assests/Images/clients/bharirawaha.webp";
import burffs from "../../Assests/Images/clients/burffs.webp";
import burkey from "../../Assests/Images/clients/burkey.webp";
import desiBar from "../../Assests/Images/clients/desiBar.webp";
import dhruvees from "../../Assests/Images/clients/dhruvees.webp";
import donergyro from "../../Assests/Images/clients/donergyro.webp";
import doubletree from "../../Assests/Images/clients/doubletree.webp";
import ebc from "../../Assests/Images/clients/ebc.webp";
import fgdimg from "../../Assests/Images/clients/fgdimg.webp";
import gharsekhana from "../../Assests/Images/clients/gharsekhana.webp";
import goldentulip from "../../Assests/Images/clients/goldentulip.webp";
import HakkaClub from "../../Assests/Images/clients/HakkaClub.jpg";
import hotelmarriote from "../../Assests/Images/clients/hotelmarriote.webp";
import lakefront from "../../Assests/Images/clients/lakefront.webp";
import parkplaza from "../../Assests/Images/clients/parkplaza.webp";
import radission from "../../Assests/Images/clients/radission.webp";
import Vidli from "../../Assests/Images/clients/Vidli-Cloud-Kitchens.webp";

import reviewImg1 from "../../Assests/service/Ellipse-24-1.png";
import reviewImg2 from "../../Assests/service/Ellipse-24-2.png";
import reviewImg3 from "../../Assests/service/Ellipse-24.png";

function Section6() {
  const reviews = [
    {
      img: reviewImg1,
      name: "Naveen Sanga",
      desc: `"They implemented abandoned brand marketing strategies for me which saw an immediate response in additional conversion. I was very happy thus for.".`,
    },
    {
      img: reviewImg2,
      name: "Atinder Bajwa",
      desc: `"I have used Fielmente for our Restaurant’s marketing. They are thoroughly professional and have helped us right from the start. Be the SEO or general day to day marketing."`,
    },
    {
      img: reviewImg3,
      name: "Food Flatters",
      desc: `"Fielmente is highly personalized. Surveyed our outlets, checked and monitored our service area. They have provided dedicated support in every situation and strategy building."`,
    },
    {
      img: reviewImg1,
      name: "Naveen Sanga",
      desc: `"They implemented abandoned brand marketing strategies for me which saw an immediate response in additional conversion. I was very happy thus for.".`,
    },
    {
      img: reviewImg2,
      name: "Atinder Bajwa",
      desc: `"I have used Fielmente for our Restaurant’s marketing. They are thoroughly professional and have helped us right from the start. Be the SEO or general day to day marketing."`,
    },
    {
      img: reviewImg3,
      name: "Food Flatters",
      desc: `"Fielmente is highly personalized. Surveyed our outlets, checked and monitored our service area. They have provided dedicated support in every situation and strategy building."`,
    },
  ];

  const heading1 =
    "Hire us as your hospitality marketing agency and unlock the full potential of your business.";
  const peraText1 =
    "Experience our expertise, results-driven approach, and personalized hospitality marketing service that set us apart.";

  const client = [
    { img: bharirawaha },
    { img: burffs },
    { img: burkey },
    { img: desiBar },
    { img: dhruvees },
    { img: donergyro },
    { img: doubletree },
    { img: ebc },
    { img: fgdimg },
    { img: gharsekhana },
    { img: goldentulip },
    { img: HakkaClub },
    { img: hotelmarriote },
    { img: lakefront },
    { img: parkplaza },
    { img: radission },
    { img: Vidli },
  ];
  return (
    <div className="container web-dev-section-3 my-4 p-2 ">
      <div className="container text-center">
        <h2 className="ff-p h2-lg c-fw-6 text-clr-gray">{heading1}</h2>
      </div>
      <div className="container text-center  p-0">
        <p className="ff-p p-text-lg c-fw-4">{peraText1}</p>
      </div>
      <div className="text-center py-3">
        <Link
          to=""
          className="px-4 py-2 text-white rounded m-auto hover-green fs-5 c-fw-4"
          style={{ backgroundColor: "#2cbca5", textDecoration: "none" }}
        >
          {" "}
          Contact us
        </Link>
      </div>
      <div className="container py-lg-4 py-2">
        <h2 className="text-center text-capitalize ff-p c-fw-6 h2-lg text-clr-gray5">
          brand we work with
        </h2>
      </div>
      <div className="container">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
        >
          {client.map((item, i) => (
            <SwiperSlide
              key={i}
              // style={{width:"max-content"}}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "13rem" }}
              >
                <img src={item.img} alt="client-img" className="img-fluid" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container py-lg-5 py-4">
        <h2 className="text-center text-capitalize ff-p h2-lg text-gray5 c-fw-6 mb-2">
          what people say about us
        </h2>

        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="py-3"
        >
          {reviews.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-around">
                    <div
                      className="img-div-rev border rounded-circle"
                      style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "5rem",
                        height: "5rem",
                      }}
                    ></div>
                    <div className="content-wrap">
                      <h3 className="text-capitalize fs-6 c-fw-5">
                        {item.name}
                      </h3>
                      <ul className="d-flex p-0">
                        <li style={{ listStyle: "none" }}>⭐</li>
                        <li style={{ listStyle: "none" }}>⭐</li>
                        <li style={{ listStyle: "none" }}>⭐</li>
                        <li style={{ listStyle: "none" }}>⭐</li>
                        <li style={{ listStyle: "none" }}>⭐</li>
                      </ul>
                    </div>
                    <div>Trustpilot 🌟</div>
                  </div>
                </div>
                <div
                  className="card-body border border-1 border-top"
                  style={{ height: "10rem" }}
                >
                  <div className="">
                    <div className="card-text text-justify">{item.desc}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Section6;
