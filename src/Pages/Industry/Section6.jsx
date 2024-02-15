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
// import { motion } from "framer-motion";

function Section6() {
  const heading = "our services";
  const text = `Wanna taste the ultimate hospitality success? Rocket your hotel’s visibility with our expert SEO, captivating website development, social media magic, targeted Google Ads, and influencer prowess.
  Industries we serve trust our hospitality digital marketing!`;
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
    // {
    //   imgUrl: Img5,
    //   alt: "restaurent-png",
    //   title: "Influencer Marketing",
    //   text: "Win your consumer’s heart via influencer's.",
    //   link: "#",
    //   linkText: "know more",
    // },
  ];

  return (
    <section
      initial={{ scale: 0.3 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.9, delay: 0.1 }}
      viewport={{ once: true }}
      className="web-dev-secton-4 py-lg-5 py-3"
      style={{ background: "#0F110F" }}
    >
      <div className="container web-dev-secton-4-content-wrap p-lg-2 p-1 text-center">
        <h2 className="mb-3 text-white text-capitalize c-fw-6 ff-p h2-lg">
          {heading}
        </h2>
        <div className=" m-auto" style={{ maxWidth: "85%" }}>
          <p className="text-center text-white p-text-lg ff-p c-fw-4">{text}</p>
        </div>
      </div>

      <div className="container">
        <div className="m-auto" style={{ maxWidth: "87%" }}>
          <div className="d-none d-sm-none d-md-none d-lg-block">
            <div className="row m-0 ">
              {cardData.map((item, i) => (
                <div className="col-lg col-md-6 p-1" key={i}>
                  <WebCard
                    h3style={{ minHeight: "4.5rem" }}
                    cardStyle={{ height: "22rem" }}
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
                  imgdiv={{ width: "10rem" }}
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

export default Section6;
