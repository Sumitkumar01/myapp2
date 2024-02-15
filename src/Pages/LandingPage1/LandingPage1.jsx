import React from "react";
import { Link } from "react-router-dom";
import "./Landingpage1.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import mapimg from "../../Assests/Images/contactPic.png";
import logo from "../../Assests/landing-page-1/cropped-logos-02-e1649751269591.png";
import moblogo from "../../Assests/Images/cropped-fielmente-logo.webp";

import btnSvg from "../../Assests/Images/svg/arrow-right-349-svgrepo-com.svg";
// section 1 img
import cloudK from "../../Assests/landing-page-1/food-delivery.jpg";
import rest from "../../Assests/landing-page-1/restaurent.jpeg";
import kits from "../../Assests/landing-page-1/kits.jpeg";
import hotel from "../../Assests/landing-page-1/hotel.jpeg";
import cafe from "../../Assests/landing-page-1/lex.jpeg";
import hostel from "../../Assests/landing-page-1/hostel.jpeg";

// Why choose us
import webprogimg from "../../Assests/Images/web-programming.webp";
import searchengine from "../../Assests/Images/searchengine.webp";
import Expertise from "../../Assests/Images/Expertise.webp";
import paidAdd from "../../Assests/Images/paidAdd.webp";
import hospitalitymrketing from "../../Assests/Images/hospitalitymrketing.webp";
import StrategicSocialMedia from "../../Assests/Images/StrategicSocialMedia.webp";

import screen from "../../Assests/landing-page-1/Screen.png";
import Camera from "../../Assests/landing-page-1/Group 912.svg";
import network from "../../Assests/landing-page-1/Group 913.svg";
import battery from "../../Assests/landing-page-1/Group 914.svg";

import seo from "../../Assests/landing-page-1/seo_3867185 1.svg";
import socialMedia from "../../Assests/landing-page-1/social-media_9059777 1.svg";
import appDev from "../../Assests/landing-page-1/app-development_8004045 1.svg";

import usaUrl from "../../Assests/landing-page-1/united states.png";
import ukUrl from "../../Assests/landing-page-1/united kingdom.png";
import canadaUrl from "../../Assests/landing-page-1/canada.png";
import indiaUrl from "../../Assests/landing-page-1/india.png";
import omanUrl from "../../Assests/landing-page-1/oman.png";
import nepalUrl from "../../Assests/landing-page-1/nepal.png";
import ScrollTop from "../../Component/ScrollTop";

// clients img
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

// button
import btnPng from "../../Assests/landing-page-1/arrow_right-[#349].png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function LandingPage1() {
  ScrollTop();

  const cardSection1 = [
    {
      img: hotel,
      title: "Hotels",
      color:
        "linear-gradient(0deg, rgba(9, 6, 151, 0.75) 0%, rgba(9, 6, 151, 0.75) 100%)",
      shadow: `0px 3.269px 13.074px 0px rgba(9, 6, 74, 0.10)`,
    },
    {
      img: rest,
      title: "Restaurants",
      color:
        "linear-gradient(0deg, rgba(0, 86, 114, 0.75) 0%, rgba(0, 86, 114, 0.75) 100%)",
      shadow: `0px 3.269px 13.074px 0px rgba(0, 0, 0, 0.10)`,
    },
    {
      img: cloudK,
      title: "Cloud Kitchens",
      color:
        "linear-gradient(0deg, rgba(175, 23, 23, 0.75) 0%, rgba(175, 23, 23, 0.75) 100%)",
      shadow: ``,
    },
    {
      img: kits,
      title: "Meal Kits",
      color:
        "linear-gradient(0deg, rgba(170, 115, 16, 0.75) 0%, rgba(170, 115, 16, 0.75) 100%)",
      shadow: ``,
    },
    {
      img: cafe,
      title: "cafe & Bakery",
      color:
        "linear-gradient(0deg, rgba(65, 33, 15, 0.75) 0%, rgba(65, 33, 15, 0.75) 100%)",
      shadow: ``,
    },
    {
      img: hostel,
      title: "hostels",
      color:
        "linear-gradient(0deg, rgba(181, 135, 17, 0.75) 0%, rgba(181, 135, 17, 0.75) 100%)",
      shadow: ``,
    },
  ];
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
  const cardSection2 = [
    { url: seo, title: "search engine opitmization" },
    { url: appDev, title: "hotel website design & development" },
    { url: socialMedia, title: "social media management" },
    { url: seo, title: "search engine opitmization" },
    { url: appDev, title: "hotel website design & development" },
    { url: socialMedia, title: "social media management" },
  ];
  const flags = [
    { flagName: "USA", flag: usaUrl },
    { flagName: "UK", flag: ukUrl },
    { flagName: "Canada", flag: canadaUrl },
    { flagName: "India", flag: indiaUrl },
    { flagName: "Oman", flag: omanUrl },
    { flagName: "Nepal", flag: nepalUrl },
  ];
  const WhyUsCardData = [
    {
      heading: "Expertise in Hospitality",
      imageUrl: Expertise,
      description:
        "With a decade of experience in the hospitality industry, we are the perfect partner to market your hotel, restaurant, or cloud kitchen",
    },
    {
      heading: "Strategic Social Media Management",
      imageUrl: StrategicSocialMedia,
      description:
        "Take advantage of the power of social media to boost your brand’s exposure engage your target audience",
    },
    {
      heading: "Optimized for Search Engines",
      imageUrl: searchengine,
      description:
        "Maximize your hotel’s online visibility and increase organic traffic through search engine optimization",
    },
    {
      heading: "Effective Paid Advertising Campaigns",
      imageUrl: paidAdd,
      description:
        "Get the best results with our impactful campaigns that bring in targeted visitors and maximize your return on investment",
    },
    {
      heading: "Customized Hospitality Marketing Solutions",
      imageUrl: hospitalitymrketing,
      description:
        "A compelling reason for you to choose our hospitality marketing agency is our commitment to providing tailored and customized marketing solutions.",
    },
    {
      heading: "Exceptional Hospitality Website Development",
      imageUrl: webprogimg,
      description:
        "Our website development expertise provides an outstanding user experience from design to funtionality",
    },
  ];

  const mobiImg = [{ url: screen }, { url: screen }];
  return (
    <>
      <nav className="d-flex d-md-none d-lg-none justify-content-between align-items-center px-4 py-2 ">
        <Link to='/' style={{ width: "8rem" }}>
          <img src={moblogo} alt="icon" />
        </Link>
        <Link to="https://wa.me/+919501868775" className="landingpage-call call text-d-none btn-active">
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16.5" cy="16.5" r="16.5" fill="#14113D" />
            <path
              d="M18.0225 8.6429C19.624 8.81165 21.1199 9.52195 22.2629 10.6564C23.4059 11.7908 24.1274 13.2813 24.3082 14.8815M18.0225 11.7858C18.7953 11.9381 19.5044 12.3193 20.0578 12.8797C20.6113 13.4401 20.9835 14.154 21.1261 14.9286M24.269 20.3658V22.7229C24.2698 22.9417 24.225 23.1583 24.1374 23.3588C24.0497 23.5593 23.9211 23.7393 23.7599 23.8872C23.5986 24.0352 23.4083 24.1478 23.201 24.2179C22.9937 24.288 22.774 24.314 22.5561 24.2943C20.1383 24.0316 17.8159 23.2054 15.7754 21.8822C13.877 20.6758 12.2674 19.0663 11.0611 17.1679C9.73322 15.1181 8.90686 12.7844 8.64896 10.3558C8.62932 10.1385 8.65514 9.9195 8.72478 9.71275C8.79441 9.506 8.90633 9.31601 9.05341 9.15489C9.2005 8.99376 9.37952 8.86503 9.57908 8.77688C9.77864 8.68873 9.99437 8.6431 10.2125 8.6429H12.5697C12.951 8.63915 13.3206 8.77417 13.6098 9.02282C13.8989 9.27146 14.0877 9.61675 14.1411 9.99433C14.2406 10.7487 14.4251 11.4893 14.6911 12.2022C14.7968 12.4834 14.8197 12.789 14.757 13.0829C14.6944 13.3767 14.5488 13.6464 14.3375 13.86L13.3397 14.8579C14.4582 16.825 16.0869 18.4537 18.054 19.5722L19.0518 18.5743C19.2654 18.3631 19.5351 18.2175 19.829 18.1548C20.1228 18.0922 20.4284 18.115 20.7097 18.2208C21.4225 18.4868 22.1632 18.6713 22.9175 18.7708C23.2992 18.8246 23.6478 19.0168 23.8969 19.3109C24.1461 19.605 24.2785 19.9804 24.269 20.3658Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </nav>
      <header className="bg-blue py-lg-4 py-md-4 py-3 landing-page-1-banner">
        <div className="container">
          <div className="row width m-auto">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex flex-column gap-4">
                <div className="logo-div d-none d-sm-none d-md-block d-lg-block">
                  <img src={logo} className="img-fluid" alt="logo" />
                </div>
                <div>
                  <h1 className="h2-lg text-center text-lg-start text-capitalize c-fw-7 landing-page-1-banner-heading ff-m text-lg-start ">
                    Innovative Hospitality Social Media Management
                  </h1>
                </div>
                <div className="h-max mb-3 mb-lg-0 d-flex justify-content-center justify-content-lg-start">
                  <Link
                    to="https://call.whatsapp.com/video/jq0pIJ0zcbPgheu9kLbV23"
                    className="text-capitalize text-d-none  ff-m c-fw-7 fs-4 landing-page-1-whats-app-btn btn-active"
                  >
                    WhatsApp us
                    <img src={btnSvg} alt="icon" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center justify-content-lg-end">
              <div
                className="d-flex flex-column justify-content-center align-items-center gap-3 bg-white "
                style={{
                  padding: "1.25rem 2.0625rem",
                  width: "24rem",
                  borderRadius: "1rem",
                }}
              >
                <div>
                  <h2 className="ff-m c-fw-7 fs-3 clr-dark-shade-blue text-center">
                    Connect with our Marketing Expert
                  </h2>
                </div>
                <form className="w-100 d-flex flex-column align-items-center justify-content-center gap-2">
                  <div className="w-100 px-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="w-100 px-1">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="w-100 px-1">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="w-100 px-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Brand Name"
                    />
                  </div>
                </form>
                <div className="w-100 px-1">
                  <button className="text-capitalize rounded-5 w-100 btn-active">
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="section-1 py-4">
          <div className="container">
            {/* <div className="d-flex"> */}
            <Swiper
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
              className="mySwiper"
            >
              {cardSection1.map((item, i) => (
                <SwiperSlide>
                  <div
                    className=""
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      // width: "13rem",
                      height: "15.687rem",
                      overflow: "hidden",
                      borderRadius: "0.84269rem",
                      boxShadow: item.shadow,
                    }}
                    key={i}
                  >
                    <div
                      className="w-100 h-100 d-flex align-items-center  justify-content-center"
                      style={{ background: item.color }}
                    >
                      <h3 className="text-capitalize text-white fs-5 text-center">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* </div> */}
          </div>
        </section>
        {/* section-2 */}
        <section>
          <div className="container">
            <div className="d-flex align-items-center justify-content-center gap-lg-3 gap-2 px-3">
              <div>
                <button className="next-mobile-slide mobile-slide btn-active">
                  <img
                    src={btnPng}
                    alt="btn-img"
                    style={{ transform: "rotate(180deg)" }}
                  />
                </button>
              </div>
              <div className="width">
                <Swiper
                  loop={true}
                  slidesPerView={1}
                  spaceBetween={10}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: ".next-mobile-slide",
                    prevEl: ".prev-mobile-slide",
                  }}
                  modules={[Autoplay, Navigation]}
                  className="mySwiper"
                >
                  {mobiImg.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div>
                        <div className="row p-0 m-0">
                          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-lg-start align-items-center justify-content-center mb-lg-0 mb-md-0 mb-2">
                            <div className="mobile-add ">
                              <div className="mobo-img-wrap ">
                                <div className="bg-white d-flex  overflow-hidden flex-column align-items-center justify-content-center p-0 m-0">
                                  <div className="d-flex gap-1 align-items-center justify-content-center m-auto bg-white w-75 p-0">
                                    <div>
                                      <small style={{ marginTop: "-.6rem" }}>
                                        9:41
                                      </small>
                                    </div>
                                    <div className="">
                                      <img
                                        src={Camera}
                                        alt="camera"
                                        className="img-fluid camera"
                                      />
                                    </div>
                                    <div>
                                      <img src={network} alt="network" />
                                    </div>
                                    <div>
                                      <small>5G</small>
                                    </div>
                                    <div>
                                      <img src={battery} alt="battry" />
                                    </div>
                                  </div>

                                  <div
                                    className="mobile-img-div"
                                    // style={{
                                    //   backgroundImage: `url(${item.url})`,
                                    // }}
                                  >
                                    <img
                                      src={item.url}
                                      alt="mobile-img"
                                      className="img-fluid "
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12  d-flex align-items-start justify-content-center flex-column">
                            <div>
                              <h2 className="h2-mob clr-dark-shade-blue ff-m c-fw-8">
                                Build your Hospitality Brands Online Presence
                                With Us
                              </h2>
                            </div>
                            <div>
                              <h3 className="ff-m clr-dark-shade-blue h3-mob c-fw-4">
                                Name/Hotel/Resort/Restaurant
                              </h3>
                              <p className="ff-m clr-dark-shade-blue c-fw-4 text-justify p-mob">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </div>
                            <div>
                              <h3 className="ff-m clr-dark-shade-blue h3-1 c-fw-4 h2-mob">
                                Lorem ipsum
                              </h3>
                              <p className="ff-m clr-dark-shade-blue c-fw-4 text-justify p-mob">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </div>
                            <div>
                              <h3 className="ff-m clr-dark-shade-blue h3-1 c-fw-4 h2-mob">
                                Lorem ipsum
                              </h3>
                              <p className="ff-m clr-dark-shade-blue c-fw-4 p-mob">
                                1000+
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div>
                <button className="prev-mobile-slide mobile-slide btn-active">
                  <img src={btnPng} alt="btn-img" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Make online presence banner start */}
        <section className="py-4">
          <div className="container ">
            <div
              className="bg-blue rounded-5 py-lg-5 py-4 m-auto px-3"
              style={{ maxWidth: "68rem" }}
            >
              <div>
                <h2 className="c-fw-8 ff-m h2-mob text-white text-center">
                  Make online presence with more impactful creatives.
                </h2>
              </div>
              <div className="h-max">
                <Link
                  to="#"
                  className="text-capitalize m-auto text-d-none ff-m c-fw-7 fs-4 landing-page-1-whats-app-btn btn-active"
                >
                  buy now
                  <img src={btnSvg} alt="icon" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ******************************************* */}
        {/* card slider 2 */}
        {/* ******************************************* */}
        <section className="bg-blue py-5">
          <div className="container">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <div>
                <button className="next-slide mobile-slide btn-active">
                  <img
                    src={btnPng}
                    alt="btn-img"
                    style={{ transform: "rotate(180deg)" }}
                  />
                </button>
              </div>
              <div className="" style={{ width: "84%" }}>
                <Swiper
                  loop={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: ".next-slide",
                    prevEl: ".prev-slide",
                  }}
                  modules={[Autoplay, Navigation]}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                  }}
                  className="mySwiper"
                >
                  {cardSection2.map((item, i) => (
                    <SwiperSlide>
                      <div
                        className="card d-flex flex-column align-items-center  justify-content-center gap-3 px-2 py-3"
                        key={i}
                        style={{ height: "18rem" }}
                      >
                        <div
                          className=""
                          style={{ width: "7rem", height: "8rem" }}
                        >
                          <img
                            src={item.url}
                            className="img-fluid"
                            alt={item.title}
                          />
                        </div>
                        <div className="d-flex flex-column gap-2 px-2">
                          <div className="title">
                            <h3 className="fs-3 text-capitalize clr-dark-shade-blue text-center c-fw-8">
                              {item.title}
                            </h3>
                          </div>
                          <div className="h-max">
                            <Link
                              to="#"
                              className="text-capitalize m-auto text-d-none  ff-m c-fw-7 fs-5 landing-page-1-link-btn btn-active"
                            >
                              know more
                              <img src={btnSvg} alt="icon" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div>
                <button className="prev-slide mobile-slide btn-active">
                  <img src={btnPng} alt="btn-img" />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* ******************************************* */}
        {/* card slider 2 */}
        {/* ******************************************* */}

        {/* ******************************************* */}
        {/* why choose */}
        {/* ******************************************* */}
        <section>
          <div className="container py-4">
            <div className="">
              <h2 className="text-center c-fw-8 ff-m h2-lg text-capitalize clr-dark-shade-blue">
                <span className="text-orange">why </span>choose us?
              </h2>
            </div>
            <div className="">
              <h3 className="text-center c-fw-7 ff-m clr-dark-shade-blue h3-lg">
                <span className="pe-2 ps-lg-5 py-lg-3 ps-md-5 py-md-3 ps-4 py-2 c-span">
                  Force{" "}
                </span>
                of 22+ Hospitality Marketing Experts
              </h3>
            </div>
          </div>
          <div className="container">
            <div className="landing-page-1-why_us d-none d-sm-none d-md-none d-lg-flex">
              {WhyUsCardData.map((data) => {
                return (
                  <div className="card text-start">
                    <div className="card_imgdiv">
                      <img
                        className=""
                        src={data.imageUrl}
                        alt={data.heading}
                      />
                    </div>

                    <div className="card-body">
                      <h4 className="card-title h3-1 ff-p c-fw-4 text-clr-gray5 card-title text-capitalize text-center">
                        {data.heading}
                      </h4>
                      <p className="card-text p-text-md ff-p c-fw-4 card-text text-center">
                        {data.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="d-lg-none d-block d-sm-block d-md-block">
              <Swiper
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                }}
              >
                {WhyUsCardData.map((data, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="card text-start p-2">
                        <div className="card_imgdiv text-center">
                          <img
                            className="w-25"
                            src={data.imageUrl}
                            alt={data.heading}
                          />
                        </div>

                        <div className="card-body">
                          <h4 className="card-title h3-1 ff-p c-fw-6 text-clr-gray5 card-title text-capitalize text-center">
                            {data.heading}
                          </h4>
                          <p className="card-text p-text-md ff-p c-fw-4 card-text text-center">
                            {data.description}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </section>
        {/* ******************************************* */}
        {/* why choose */}
        {/* ******************************************* */}

        {/* ******************************************* */}
        {/* Our Clients */}
        {/* ******************************************* */}
        <section className="py-4">
          <div className="container">
            <div className="container py-3">
              <h2 className="text-center ff-m c-fw-8 h2-lg clr-dark-shade-blue">
                <span className="text-orange">Our</span> Clients
              </h2>
            </div>
            <div className="container p-0">
              <div>
                <Swiper
                  loop={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  breakpoints={{
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 5,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 7,
                      spaceBetween: 20,
                    },
                  }}
                  className="mySwiper"
                >
                  {client.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ height: "18rem" }}
                      >
                        <img
                          src={item.img}
                          alt="client-img"
                          className="img-fluid"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        {/* ******************************************* */}
        {/* Our Clients */}
        {/* ******************************************* */}
        {/* ******************************************* */}
        {/* Fielmente Making Global */}
        {/* ******************************************* */}
        <section className="bg-blue py-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <img src={mapimg} alt="tham-img" />
                </div>
              </div>
              <div className="col-lg-6 p-0">
                <div>
                  <div>
                    <h2 className="text-white c-fw-8 ff-m text-center h2-lg">
                      Fielmente Making Global
                    </h2>
                  </div>
                  <div>
                    <h3
                      className="text-white c-fw-7 ff-m text-center fs-2 m-auto"
                      style={{ maxWidth: "35rem" }}
                    >
                      Empowered 60+ Clients Globally Now it's your turn!{" "}
                    </h3>
                    <p className="text-white c-fw-4 ff-m p-text-md text-uppercase text-center mt-2">
                      Countries Covered
                    </p>
                  </div>
                </div>
                <div>
                  <div className="country-flag-div m-auto">
                    {flags.map((item, i) => (
                      <div className="flag" key={i}>
                        <div style={{ width: "1.8rem" }}>
                          <img
                            src={item.flag}
                            className="img-fluid"
                            alt={item.flagName}
                          />
                        </div>
                        <div>
                          <h3 className="c-fw-4 fs-6 ff-m m-0 text-white">
                            {item.flagName}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ******************************************* */}
        {/* Fielmente Making Global */}
        {/* ******************************************* */}
        {/* contact form */}
        <section className="py-4 landing-page-1">
          <div className="container">
            <div class="row flex-column-reverse flex-lg-row justify-content-center align-items-center g-2">
              <div class="col-lg-6">
                <div>
                  <h2 className="c-fw-8 ff-m text-center fs-2 clr-dark-shade-blue">
                    Looking for free Brand & Marketing Audit Report and
                    consltation?
                  </h2>
                </div>
                <form className="form-group">
                  <div className="row p-0 m-0">
                    <div className="col-6 c-p-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-6 c-p-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="py-2 px-2">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="py-2 px-2">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="py-2 px-2">
                    <textarea
                      className="form-control"
                      id=""
                      cols="20"
                      rows="5"
                      placeholder="Message..."
                    ></textarea>
                  </div>
                  <div className="px-2">
                    <button
                      type="button"
                      className="landing-page-1-formbtn d-flex align-items-center justify-content-center w-100 py-2 text-capitalize rounded-3 btn-active"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
              <div class="col-lg-6">
                <div>
                  <img src={mapimg} alt="tham-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="p-0">
        <div className="bg-blue py-5 d-flex flex-column align-items-center justify-content-center">
          <div className="py-4">
            <img src={logo} alt={logo} />
          </div>
          <div className="py-2">
            <Link
              to="/landing-page2/"
              className="text-d-none landing-page-1-btn c-fw-6"
            >
              visit our website
            </Link>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center  gap-2">
            <Link to="tel:+919501868775" className="text-white text-d-none">
              <BiSolidPhoneCall /> +91 9501868775
            </Link>
            <Link
              to="mailto:sachin@fielmente.com"
              className="text-white text-d-none"
            >
              <MdMailOutline /> sachin@fielmente.com
            </Link>
            <Link
              to="https://example.com/gurgaon"
              className="text-white text-d-none text-uppercase"
            >
              <FaLocationArrow /> gurgaon
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage1;
