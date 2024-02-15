import React from "react";
import underline from "../../Assests/Landigpage2/Vector 1.png";
import btnSvg from "../../Assests/Landigpage2/Chevron_Left.svg";
import img1 from '../../Assests/Landigpage2/11.png'
import img2 from '../../Assests/Landigpage2/22.png'
import img3 from '../../Assests/Landigpage2/333.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

function Impact() {
  const cardData = [
    {
      titile: "Direct Bookings",
      desc: "Boost direct bookings with our strategic campaigns. Drive guests to your official website and increase revenue and reduce third-party commission costs.",
      url: img1,
    },
    {
      titile: "Increase Occupancy Rate",
      desc: "Grow your hotel's occupancy rate through targeted marketing solutions, ensuring consistent guest bookings and maximising revenue potential.",
      url: img2,
    },
    {
      titile: "Boost Foot Traffic",
      desc: "Increase restaurant revenue by driving higher customer visits through targeted strategies. Create a bustling, thriving atmosphere.",
      url: img3,
    },
    {
      titile: "Direct Bookings",
      desc: "Boost direct bookings with our strategic campaigns. Drive guests to your official website and increase revenue and reduce third-party commission costs.",
      url: img1,
    },
    {
      titile: "Increase Occupancy Rate",
      desc: "Grow your hotel's occupancy rate through targeted marketing solutions, ensuring consistent guest bookings and maximising revenue potential.",
      url: img2,
    },
    {
      titile: "Boost Foot Traffic",
      desc: "Increase restaurant revenue by driving higher customer visits through targeted strategies. Create a bustling, thriving atmosphere.",
      url: img3,
    },
  ];
  return (
    <section className="py-4 impact-section">
      <div className="container">
        <div className="container">
          <h2 className="c-fw-400 fs-6 ff-m text-blue-2 text-center">
            <span
              style={{
                backgroundImage: `url(${underline})`,
                backgroundPosition: "bottom",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                padding: ".1rem 2rem",
              }}
            >
              Impact
            </span>
          </h2>
          <h3 className="text-center h2-lg text-blue-2 c-fw-5">
            Strategies that Translate
          </h3>
        </div>
        <div className="d-flex gap-2 align-items-center justify-content-evenly mt-1">
          <div>
            <button className="slider-btn btn-y-active prev-impact">
              <img
                src={btnSvg}
                alt="icon"
                style={{ transform: "rotate(180deg)" }}
              />
            </button>
          </div>
          <div className="" style={{ width: "80%" }}>
            <Swiper
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".prev-impact",
                nextEl: ".next-impact",
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
              {cardData.map((item, i) => (
                <SwiperSlide>
                  <div
                    style={{
                      //   width: "28.53425rem",
                      height: "21.52263rem",
                      flexShrink: 0,
                      borderRadius: "0.48775rem",
                      backgroundImage:`url(${item.url})`,
                      backgroundPosition:"center",
                      backgroundRepeat:"no-repeat",
                      backgroundSize:"cover"
                    }}
                  >
                    <div
                      className="h-100 w-100 d-flex flex-column justify-content-end p-3 gap-1"
                      style={{
                        borderRadius: "0.48775rem",
                        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.74) 44.44%, #000 100%)`,
                      }}
                    >
                      <h3 className="text-white fs-5 c-fw-7 text-start">
                        {item.titile}
                      </h3>
                      <p className="text-white fs-6 c-fw-4 text-start">
                        {item.desc}
                      </p>
                      <Link
                        className="text-white fs-5 c-fw-5 text-start text-d-none contact-link"
                        to="/contact/"
                      >
                        Contact us
                        {/* <img src={arrow} alt="icon" style={{width:"11rem",height:"1.6rem"}}/> */}
                        <FaLongArrowAltRight />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <button className="slider-btn btn-y-active next-impact">
              <img src={btnSvg} alt="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;
