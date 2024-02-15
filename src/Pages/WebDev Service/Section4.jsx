import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import WebCard from "../../Component/WebCard";
import Img1 from "../../Assests/industries-we-serve/asset-8.png";
import Img2 from "../../Assests/industries-we-serve/asset-9.png";
import Img3 from "../../Assests/industries-we-serve/asset-10.png";
import Img4 from "../../Assests/industries-we-serve/asset-11.png";
import Img5 from "../../Assests/industries-we-serve/asset-12.png";

function Section4() {
  const heading = "Explore our Hospitality Digital Marketing Services";
  const text =
    "Embark on a journey of digital success with our comprehensive hospitality marketing agency. Explore our tailored digital marketing services and unlock the full potential of your brand.";

  const cardData = [
    {
      imgUrl: Img1,
      alt: "hotel-png",
      title: "Website Design and Development",
      text: "Elevate your business’s success with a website.",
      link: "/hospitality-marketing-services/website-development-agency/",
      linkText: "know more",
    },
    {
      imgUrl: Img2,
      alt: "kitchen-png",
      title: "Search Engine Optimization & Analytics",
      text: "Rank higher with search engine optimization.",
      link: "/hospitality-marketing-services/seo-agency/",
      linkText: "know more",
    },
    {
      imgUrl: Img3,
      alt: "restaurent-png",
      title: "Social Media Marketing",
      text: "Build your brand with social media marketing.",
      link: "/hospitality-marketing-services/social-media-marketing-agency/",
      linkText: "know more",
    },
    {
      imgUrl: Img4,
      alt: "restaurent-png",
      title: "Paid Ads and Marketing",
      text: "Increase your business revenue by running ads.",
      link: "/hospitality-marketing-services/google-ads-agency/",
      linkText: "know more",
    },
    {
      imgUrl: Img5,
      alt: "restaurent-png",
      title: "Influencer Marketing",
      text: "Win your consumer’s heart via influencer's.",
      link: "/industries-we-serve/hotel-marketing-agency/",
      linkText: "know more",
    },
  ];
  return (
    <section className="web-dev-secton-4 py-lg-5 py-3">
      <div className="container web-dev-secton-4-content-wrap p-lg-2 p-1">
        <div className="text-center">
          <h2 className="text-white h2-lg ff-p c-fw-6 ">{heading}</h2>
        </div>
        <div className="m-auto" style={{ maxWidth: "95%" }}>
          <p className="text-lg-center m-0 text-white text-justify p-text-lg ff-p c-fw-4">
            {text}
          </p>
        </div>
      </div>

      <div className="container">
        <div className="m-auto" style={{ maxWidth: "95%" }}>
          <div className="d-none d-sm-none d-md-none d-lg-block">
            <div className="row m-0 ">
              {cardData.map((item, i) => (
                <div className="col-lg p-1" key={i}>
                  <WebCard
                    cardStyle={{ height: "22rem" }}
                    h3style={{ minHeight: "4.5rem" }}
                    title={item.title}
                    imgUrl={item.imgUrl}
                    imgdiv={{ width: "8rem" }}
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
                  cardStyle={{ height: "22rem" }}
                  title={item.title}
                  imgUrl={item.imgUrl}
                  imgdiv={{ width: "8rem" }}
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
    </section>
  );
}

export default Section4;
