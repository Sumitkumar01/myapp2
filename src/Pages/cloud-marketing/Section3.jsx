import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import BlueLinkButton from "../../Component/BlueLinkButton";
import Url1 from "../../Assests/cloud-kitichen/Group-540.png.png";
import Url2 from "../../Assests/cloud-kitichen/Group-540-1.png.png";
import Url3 from "../../Assests/cloud-kitichen/Group-545.png.png";
import Url4 from "../../Assests/indus-we-serv/asset-7.png";
import Url5 from "../../Assests/service/asset 6.png";
import Url6 from "../../Assests/cloud-kitichen/Group-543.png.png";
// import { motion } from "framer-motion";

function Section3() {
  const data = [
    {
      title: "Customer Feedback",
      description: `Update menu and seasonal specials, and
      promotions or discounts to keep customers informed
      and excited about offerings.`,
      url: Url1,
    },
    {
      title: "Menu Presentation",
      description: `An organized and visually appealing menu on the
      website entices customers to explore and order from
      the cloud kitchen.`,
      url: Url2,
    },
    {
      title: "Search Engine Visibility",
      description: `With our expertise in cloud kitchen SEO services,
      we can optimize your website to rank higher in
      search engine results. `,
      url: Url3,
    },
    {
      title: "Customer Trust",
      description: `A website builds trust and credibility among
      customers, assuring them of the quality and
      reliability of your cloud kitchen.`,
      url: Url4,
    },
    {
      title: "Online Ordering",
      description: `Provide a convenient and seamless online ordering
      experience for customers, increasing sales and
      customer satisfaction.`,
      url: Url5,
    },
    {
      title: `Brand Identity`,
      description: `Establish a strong brand identity showcasing unique
      offerings through compelling visuals, enticing
      descriptions, and website design.`,
      url: Url6,
    },
  ];
  return (
    <div className="web-dev-section-1 py-4">
      <div className="container text-center">
        <h2 className="h2-lg ff-p c-fw-6 text-gray5">
          Why Cloud Kitchen Require a Website to expand
        </h2>
      </div>

      <div className="container">
        <div className="d-none d-sm-none d-md-none d-lg-block">
          <div className="row g-3 ">
            {data.map((item, i) => (
              <div className="col-lg-4 col-md-6 col-12 p-2" key={i}>
                <div className="card card-clr">
                  <div className="m-auto" style={{ width: "7rem" }}>
                    <img
                      src={item.url}
                      className="img-top img-fluid"
                      alt={item.title}
                    />
                  </div>
                  <div className="card-body " style={{ height: "11rem" }}>
                    <h3 className="fs-6 ff-p c-fw-5 text-clr-gray5 card-title text-capitalize text-center">
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
                  <div className="m-auto" style={{ width: "7rem" }}>
                    <img
                      src={item.url}
                      className="img-top img-fluid"
                      alt={item.alt}
                    />
                  </div>
                  <div className="card-body " style={{ height: "11rem" }}>
                    <h3 className="h3-1 ff-p c-fw-4 text-clr-gray5 card-title text-capitalize text-center">
                      {item.title}
                    </h3>
                    <p className="fs-7 ff-p c-fw-4 card-text text-center">
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

export default Section3;
