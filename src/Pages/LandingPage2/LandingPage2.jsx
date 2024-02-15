import React from "react";
import "../../Style/Landinpage2.css";
import logo from "../../Assests/Images/cropped-fielmente-logo.webp";
import { Link } from "react-router-dom";
import { useState } from "react";
import Rectangle from "../../Assests/Images/landingpage2/Rectangle 6(1).png";

import footLogo from "../../Assests/Images/cropped-logo2.png";
import { Autoplay, Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


// icons start

import icon1 from "../../Assests/Images/landingpage2/icons/Frame.png";
import icon2 from "../../Assests/Images/landingpage2/icons/Frame (8).png";
import icon3 from "../../Assests/Images/landingpage2/icons/Frametrust.png";
import icon4 from "../../Assests/Images/landingpage2/icons/Frameengine.png";
import icon5 from "../../Assests/Images/landingpage2/icons/Frame (21).png";
import icon6 from "../../Assests/Images/landingpage2/icons/Frame (20).png";

import Vector from "../../Assests/Landigpage2/Vector.png";
import btnSvg from "../../Assests/Landigpage2/Chevron_Left.svg";

import tpsliderImg from "../../Assests/Landigpage2/Rectangle3.png";
import tpsliderImg1 from "../../Assests/Landigpage2/Rectangle4.png";
import tpsliderImg2 from "../../Assests/Landigpage2/Rectangle41.png";

// Images start

import image1 from "../../Assests/Images/landingpage2/Rectangle 6.png";
import image2 from "../../Assests/Images/landingpage2/greeting-guests 1.png";
import image3 from "../../Assests/Images/landingpage2/Rectangle 6 (1).png";
import image4 from "../../Assests/Images/landingpage2/image_1-removebg-preview 1.png";
import image5 from "../../Assests/Images/landingpage2/Rectangle 6 (2).png";
import image6 from "../../Assests/Images/landingpage2/Rectangle 6 (3).png";

import offercardimg1 from "../../Assests/Images/landingpage2/icons/offercard1.png";
import offercardimg2 from "../../Assests/Images/landingpage2/icons/offercard2.png";

// Client Images

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
import TestimonialCard from "./TestimonialCard";
import { ServiceSection } from "./ServiceSection";
import { SectorSection } from "./SectorSection";

import contactBnrImg from "../../Assests/Landigpage2/Frame-87.png";
import Impact from "./Impact";
import clientImg1 from "../../Assests/Landigpage2/Image.png";
import clientImg2 from "../../Assests/Landigpage2/Image (1).png";
import clientImg3 from "../../Assests/Landigpage2/Image (2).png";
import bgImg from "../../Assests/Landigpage2/bg-img.png";
import bgQuote from "../../Assests/Landigpage2/left-quote (Traced).png";
import ScrollTop from "../../Component/ScrollTop";

const LandingPage2 = (props) => {
  ScrollTop();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const topslider = [
    {
      url: tpsliderImg,
      btnName: "Hotel Marketing",
    },
    {
      url: tpsliderImg1,
      btnName: "Resort Marketing",
    },
    {
      url: tpsliderImg2,
      btnName: "Restaurant Marketing",
    },
    {
      url: tpsliderImg,
      btnName: "Hotel Marketing",
    },
    {
      url: tpsliderImg1,
      btnName: "Resort Marketing",
    },
    {
      url: tpsliderImg2,
      btnName: "Restaurant Marketing",
    },
  ];
  const webdevdata = [
    {
      heading: "Are you looking for Hotel Website Development?",
      img: image1,
      text: "As a Hotel Marketing Agency every day, we build trust through communication, transparency, and results.",
      img1: icon1,
      img2: icon2,
      img3: icon3,
      img4: icon4,
      img5: icon5,
      img6: icon6,
      text1: "Online Presence",
      text2: "Showcase your hotel",
      text3: "Build Trust",
      text4: "Search Engine Visibility",
      text5: "Direct Bookings",
      text6: "Enhanced Customer Service",
    },
    {
      heading: "Why Choose Us?",
      img: image2,
      text: "Force of 18+ Hospitality Marketing Experts.",
      img1: icon1,
      img2: icon2,
      img3: icon3,
      img4: icon4,
      img5: icon5,
      img6: icon6,
      text1: "Expertise in Hospitality",
      text2: "Effective Paid Advertising Campaigns",
      text3: "Strategic Social Media Management",
      text4: "Customized Marketing Solution",
      text5: "Optimized for Search Engines",
      text6: "Exceptional Website Development",
    },
    {
      heading: "Looking for Search Engine Optimization?",
      img: image3,
      text: "Improve your hotel’s online visibility and attract more guests with effective hotel SEO (Search Engine Optimization) services.",
      img1: icon1,
      img2: icon2,
      img3: icon3,
      img4: icon4,
      img5: icon5,
      img6: icon6,
      text1: "Technical SEO",
      text2: "Off Page SEO",
      text3: "On Page SEO",
      text4: "Keywords Research",
      text5: "Google My Business",
      text6: "Local SEO",
    },
    {
      heading: "Looking for Social Media Management?",
      img: image4,
      text: "Elevate guest engagement and draw potential with our Social Media Strategies?",
      img1: icon1,
      img2: icon2,
      img3: icon3,
      img4: icon4,
      img5: icon5,
      img6: icon6,
      text1: "Engage Guests",
      text2: "Reputation Management",
      text3: "Direct Bookings",
      text4: "Showcase Your Hotel",
      text5: "Visual Appeal",
      text6: "Reach a Wider Audience",
    },
    {
      heading: "Are you looking for Hotel Influencer Marketing?",
      img: image5,
      text: "Elevate guest engagement and draw potential with our Social Media Strategies?",
      img1: icon1,
      img2: icon2,
      img3: icon3,
      img4: icon4,
      img5: icon5,
      img6: icon6,
      text1: "Increased Brand Awareness",
      text2: "Trusted Recommendations",
      text3: "Reach a Targeted Audience",
      text4: "Unique Experiences",
      text5: "Storytelling and Engagement",
      text6: "Differentiation and Competitive Edge",
    },
    {
      heading: "Need help with Google Ads to increase your Hotel Revenue?",
      img: image6,
      text: "Elevate guest engagement and draw potential with our Social Media Strategies?",
      img1: icon1,
      img2: icon2,
      img3: icon3,
      img4: icon4,
      img5: icon5,
      img6: icon6,
      text1: "Increased Visibility",
      text2: "Targeted Advertising",
      text3: "Cost-Effective Results",
      text4: "Drive Direct Bookings",
      text5: "Compete Effectively",
      text6: "Real-Time Optimization",
    },
  ];
  const OfferCardData = [
    {
      heading: "Hotel Website Design & Development",
      imageUrl: offercardimg1,
      btnUrl: "/",
    },
    {
      heading: "Social Media Management",
      imageUrl: offercardimg2,
      btnUrl: "/",
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

  const testimonialCard = [
    {
      url: clientImg1,
      name: "Shashank",
      hotelName: "Tridev Hotels",
      story: `Fielmente has delivered us an incredible ROI. Our average occupancy rate has increased by 50%`,
    },
    {
      url: clientImg2,
      name: "Shravan",
      hotelName: "Cloud Kitchen",
      story: `They helped us unleash our potential through creative marketing campaigns for our cloud kitchen.`,
    },
    {
      url: clientImg3,
      name: "Neha",
      hotelName: "Cloud Kitchen",
      story: `Since partnering with Fielmente, our average footfall is up by 100%. They have delivered more than their promise.`,
    },
    {
      url: clientImg1,
      name: "Shashank",
      hotelName: "Tridev Hotels",
      story: `Fielmente has delivered us an incredible ROI. Our average occupancy rate has increased by 50%`,
    },
    {
      url: clientImg2,
      name: "Shravan",
      hotelName: "Cloud Kitchen",
      story: `They helped us unleash our potential through creative marketing campaigns for our cloud kitchen.`,
    },
    {
      url: clientImg3,
      name: "Neha",
      hotelName: "Cloud Kitchen",
      story: `Since partnering with Fielmente, our average footfall is up by 100%. They have delivered more than their promise.`,
    },
  ];
  return (
    <>
      <nav className="landing-navDiv">
        <div className="container landing-nav">
          <img src={logo} alt="Fielmente Logo" />
          <div className="nav-phone">
            <span>Dial Now:</span>
            <Link className="call text-d-none btn-y-active">
              <i className="fa-solid fa-phone"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M11.0225 1.6429C12.624 1.81165 14.1199 2.52195 15.2629 3.65635C16.4059 4.79075 17.1274 6.28129 17.3082 7.88147M11.0225 4.78576C11.7953 4.93813 12.5044 5.31928 13.0578 5.87971C13.6113 6.44015 13.9835 7.154 14.1261 7.92861M17.269 13.3658V15.7229C17.2698 15.9417 17.225 16.1583 17.1374 16.3588C17.0497 16.5593 16.9211 16.7393 16.7599 16.8872C16.5986 17.0352 16.4083 17.1478 16.201 17.2179C15.9937 17.288 15.774 17.314 15.5561 17.2943C13.1383 17.0316 10.8159 16.2054 8.77538 14.8822C6.87696 13.6758 5.26743 12.0663 4.0611 10.1679C2.73322 8.11813 1.90686 5.78439 1.64896 3.35576C1.62932 3.13848 1.65514 2.9195 1.72478 2.71275C1.79441 2.506 1.90633 2.31601 2.05341 2.15489C2.2005 1.99376 2.37952 1.86503 2.57908 1.77688C2.77864 1.68873 2.99437 1.6431 3.21253 1.6429H5.56967C5.95098 1.63915 6.32065 1.77417 6.60977 2.02282C6.89889 2.27146 7.08773 2.61675 7.1411 2.99433C7.24059 3.74867 7.42509 4.48933 7.6911 5.20218C7.79681 5.48341 7.81969 5.78905 7.75702 6.08288C7.69436 6.37671 7.54878 6.64641 7.33753 6.86004L6.33967 7.8579C7.45818 9.82497 9.08688 11.4537 11.054 12.5722L12.0518 11.5743C12.2654 11.3631 12.5351 11.2175 12.829 11.1548C13.1228 11.0922 13.4284 11.115 13.7097 11.2208C14.4225 11.4868 15.1632 11.6713 15.9175 11.7708C16.2992 11.8246 16.6478 12.0168 16.8969 12.3109C17.1461 12.605 17.2785 12.9804 17.269 13.3658Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              <span>+919501868775</span>
            </Link>
          </div>
        </div>
      </nav>

      <section className="contact-form-divland">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 landing-contact-left">
              <h2
                className="c-fw-7 banner-h1-lg text-justify"
                style={{ color: "#000" }}
              >
                India’s Leading Hospitality Marketing Agency Catering to{" "}
                <span
                  className="py-1"
                  style={{
                    backgroundImage: `url(${Vector})`,
                    backgroundRepeat: " no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "bottom",
                  }}
                >
                  Your Needs
                </span>{" "}
                !
              </h2>

              <p className="text-justify text-blue-2 c-fw-4">
                Partner with India’s leading hospitality marketing agency to
                transform your business into a brand. Deploy tried and tested
                marketing strategies to increase your ROI.
              </p>
              <div className="d-flex justify-content-between flex-column">
                <div className="d-flex justify-content-between align-items-center flex-wrap h-max">
                  <div>
                    <h3 className="c-fw-5 fs-5 ff-p text-blue-2 mb-0 text-justify">
                      Boost your marketing strategies with Fielmente
                    </h3>
                    <p className="c-fw-4 fs-6 ff-p text-blue-2 mb-0 text-justify">
                      Boost your marketing strategies with Fielmente
                    </p>
                  </div>
                  <div className="d-flex h-lg-100 gap-2 py-3 py-lg-0">
                    <button className="slider-btn btn-y-active prev ">
                      <img
                        src={btnSvg}
                        alt="icon"
                        style={{ transform: "rotate(180deg)" }}
                      />
                    </button>
                    <button className="slider-btn btn-y-active next">
                      <img src={btnSvg} alt="icon" />
                    </button>
                  </div>
                </div>

                <div className="container py-2 px-0">
                  <Swiper
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      prevEl: ".prev",
                      nextEl: ".next",
                    }}
                    modules={[Autoplay, Navigation]}
                    // slidesPerView={2}
                    // spaceBetween={10}
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
                    {topslider.map((item, i) => (
                      <SwiperSlide>
                        <div
                          className="rounded-4"
                          style={{
                            // width: "16.25rem",
                            height: "11.75rem",
                            backgroundImage: `url(${item.url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <div
                            className="d-flex justify-content-center align-items-end w-100 h-100 p-2 rounded-4"
                            style={{ background: "rgba(0,0,0,.4)" }}
                          >
                            <button className="py-1 px-2 rounded-2 btn-active">
                              {item.btnName}
                            </button>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-lg-6 landing-contact-form p-lg-5 p-md-4 p-4">
              <div className="d-flex flex-column">
                <h3>
                  Want to remain a business or become a brand? Contact us for
                  the latter.
                </h3>

                <form>
                  <div className="row p-0 m-0">
                    <div className="col-lg-6 p-1 m-0">
                      <input
                        type="text"
                        className="form-control rounded-1 bg-blue"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="col-lg-6 p-1 m-0">
                      <input
                        type="text"
                        className="form-control rounded-1 bg-blue"
                        placeholder="Enter your Email"
                      />
                    </div>
                    <div className="col-lg-6 p-1 m-0">
                      <input
                        type="text"
                        className="form-control rounded-1"
                        placeholder="Your Company Name"
                      />
                    </div>
                    <div className="col-lg-6 p-1 m-0">
                      <input
                        type="text"
                        className="form-control rounded-1"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="p-1">
                    <textarea
                      className="form-control rounded-1 mb-1"
                      id=""
                      cols="10"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center justify-content-lg-start">
                    <button
                      type="button"
                      className="landing-submit btn-y-active ms-1"
                    >
                      Partner with Us
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectorSection />

      <section className="serving-div">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6 col-sm-12">
              <img src={Rectangle} alt="" />
            </div>
            <div className="col-md-12 col-lg-6 col-sm-12 landing-about">
              <h6>About Company</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="348"
                height="2"
                viewBox="0 0 348 2"
                fill="none"
              >
                <path
                  d="M0 1.28174H348"
                  stroke="url(#paint0_linear_1014_1917)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1014_1917"
                    x1="0"
                    y1="1.28174"
                    x2="348"
                    y2="1.28174"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <h3>Exit the Rat Race. It is time to Stand Out!</h3>
              <p>
                What’s so unique about Fielmente? To start with one, we are a
                team of hospitality-rooted experts. We are not just the masters
                of marketing, we outshine in crafting strategic campaigns for
                hospitality i.e Hotels, Restaurants, Cloud kitchens, and you
                name it.
              </p>
              <p>How do our numbers look?</p>
              <div className="circle-div justify-content-center align-items-center gap-lg-0 gap-md-0 gap-2">
                <div className="circle circle1">
                  <span className="circle-head">10+</span>
                  <span>
                    Years of <br /> Industry <br /> Excellence
                  </span>
                </div>
                <div className="circle circle2">
                  <span className="circle-head">40+</span>
                  <span>
                    Active <br /> Partners
                  </span>
                </div>
                <div className="circle circle3">
                  <span className="circle-head">200+</span>
                  <span>Collaborations</span>
                </div>
                <div className="circle circle4">
                  <span className="circle-head">10+</span>
                  <span>
                    YEARS OF <br /> EXPERIENCE
                  </span>
                </div>
              </div>
              <div className="contact-btn-div justify-content-center justify-content-lg-start">
                <Link
                  to="/contact-page"
                  className="contactus-btn btn-y-active text-d-none"
                >
                  Partner with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceSection />

      {/* <section className="advertisements">
        {webdevdata.map((data, index) => {
          return (
            <Section
              heading={data.heading}
              text={data.text}
              image={data.img}
              icon1={data.img1}
              icon2={data.img2}
              icon3={data.img3}
              icon4={data.img4}
              icon5={data.img5}
              icon6={data.img6}
              text1={data.text1}
              text2={data.text2}
              text3={data.text3}
              text4={data.text4}
              text5={data.text5}
              text6={data.text6}
              index={index % 2 !== 0 ? "row-reverse" : "row"}
            />
          );
        })}
      </section> */}

      <Impact />
      <section
        className="testimonial py-4 "
        style={{ background: `url(${bgImg})`, color: "#fff" }}
      >
        <div className="container">
          <div
            className="testimonial-wrapper justify-content-between flex-column flex-lg-row m-auto"
            style={{ width: "80%" }}
          >
            <div className="inner-testimonial">
              <span>Testimonials</span>
              <h3>The Voices of Delight</h3>
              <p>
                Testimonials Sharing Stories of Success and Satisfaction - A
                Glimpse into Fulfilled Collaborations.
              </p>
            </div>
            <div className="d-none d-lg-block d-md-none">
              <img src={bgQuote} className="img-fluid" alt="quote" />
            </div>
          </div>

          <div className="testimonial-cards d-flex gap-2 justify-content-evenly align-items-center">
            <button className="slider-btn btn-y-active prev-testimonial">
              <img
                src={btnSvg}
                alt="icon"
                style={{ transform: "rotate(180deg)" }}
              />
            </button>
            <div style={{ width: "80%" }}>
              <Swiper
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: ".prev-testimonial",
                  nextEl: ".next-testimonial",
                }}
                modules={[Autoplay, Navigation]}
                // slidesPerView={2}
                // spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
                className="mySwiper"
              >
                {testimonialCard.map((item, i) => (
                  <SwiperSlide key={i}>
                    <TestimonialCard
                      name={item.name}
                      hotelName={item.hotelName}
                      story={item.story}
                      img={item.url}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div>
              <button className="slider-btn bg-blue btn-y-active next-testimonial">
                <img src={btnSvg} alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-wrapper partners_section my-2 py-2">
        <h2 className="text-center">We are part of their Success Stories!</h2>
        <p className="text-center">
          Nurturing Success Together with  Commitment, Exemplifying Excellence
          in Every Step.
        </p>
        <div className="container p-0">
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
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          className="mySwiper align-items-center justify-content-center"
        >
          {client.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{}}
              >
                <img src={item.img} alt="client-img" className="img-fluid" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </section>
      {/* contact section */}
      <section className="landing-page-2-contact py-lg-5 bg-blue">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 landing-contact-form p-5" style={{backgroundColor:"transparent"}}>
              <div className="d-flex flex-column">
                <h3 className="text-justify">
                  Want to remain a business or become a brand? Contact us for
                  the latter.
                </h3>

                <form >
                  <div className="row p-0 m-0">
                    <div className="col-lg-6 p-1 m-0">
                      <input
                        type="text"
                        className="form-control rounded-1 bg-blue"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="col-lg-6 p-1 m-0">
                      <input
                        type="text"
                        className="form-control rounded-1 bg-blue"
                        placeholder="Enter your Email"
                      />
                    </div>
                    <div className="col-lg-6 p-1 m-0">
                      <input
                        type="text"
                        className="form-control rounded-1"
                        placeholder="Your Company Name"
                      />
                    </div>
                    <div className="col-lg-6 p-1 m-0">
                      <input
                        type="text"
                        className="form-control rounded-1"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="p-1">
                    <textarea
                      className="form-control rounded-1 mb-1"
                      id=""
                      cols="10"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center justify-content-lg-start pt-3">
                    <button
                      type="button"
                      className="landing-submit btn-y-active ms-1"
                    >
                      Partner with Us
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <img
                  src={contactBnrImg}
                  className="img-fluid"
                  alt="contactBnrImg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="p-0">
        <div className="py-2" style={{backgroundColor:"#030217"}}>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="footer-img-div">
                <img src={footLogo} alt="fielmente logo" />
              </div>
              <div className="policy-div">
                <Link>Privacy Policy</Link>
                <Link>Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage2;
