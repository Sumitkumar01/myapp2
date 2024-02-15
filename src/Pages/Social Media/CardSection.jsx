import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import WebCard from "../../Component/WebCard";
import Img1 from "../../Assests/industries-we-serve/asset-2.png";
import Img2 from "../../Assests/industries-we-serve/asset-3.png";
import Img3 from "../../Assests/industries-we-serve/asset-4.png";

function CardSection() {
  const cardData = [
    {
      imgUrl: Img1,
      alt: "hotel-png",
      title: "hotel website",
      text: "If you are looking for the best hotel seo, look no further.",
      link: "/hospitality-marketing-services/seo-agency/",
      linkText: "know more",
    },
    {
      imgUrl: Img2,
      alt: "kitchen-png",
      title: "cloud kitchen website",
      text: "If you are looking for the best cloud kitchen promotion, look no further.",
      link: "/industries-we-serve/cloud-kitchen-marketing-agency/",
      linkText: "know more",
    },
    {
      imgUrl: Img3,
      alt: "restaurent-png",
      title: "restaurant website",
      text: "If you are looking for the best restaurant, look no further.",
      link: "/industries-we-serve/restaurant-marketing-agency/",
      linkText: "know more",
    },
  ];
  return (
    <div>
      {" "}
      <div className="container py-4">
        <div
          className=" border-top border-bottom m-auto"
          style={{ maxWidth: "85%" }}
        >
          <div className="d-none d-sm-none d-md-none d-lg-block">
            <div className="row m-0 ">
              {cardData.map((item, i) => (
                <div className="col-lg-4 col-md-6 p-1" key={i}>
                  <WebCard
                    title={item.title}
                    imgUrl={item.imgUrl}
                    imgdiv={{ width: "7rem" }}
                    text={item.text}
                    link={item.link}
                    linkText={item.linkText}
                    classBtn="text-white"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* slider */}
          <Swiper
            autoplay={{
              delay: 2300,
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
            }}
            className="d-lg-none"
          >
            {cardData.map((item, i) => (
              <SwiperSlide key={i} className="p-1">
                <WebCard
                  cardStyle={{ height: "20rem" }}
                  title={item.title}
                  imgUrl={item.imgUrl}
                  imgdiv={{ width: "7rem" }}
                  text={item.text}
                  link={item.link}
                  linkText={item.linkText}
                  classBtn="text-white"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
