import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import BlueLinkButton from "../../Component/BlueLinkButton";
import Url1 from "../../Assests/restaurent-marketing/Group-525.png.png";
import Url2 from "../../Assests/restaurent-marketing/Group-530.png.png";
import Url3 from "../../Assests/restaurent-marketing/Group-529.png.png";
import Url4 from "../../Assests/restaurent-marketing/Group-526.png.png";
import Url5 from "../../Assests/restaurent-marketing/Group-528.png.png";
import Url6 from "../../Assests/restaurent-marketing/Group-525.png.png";
// import { motion } from "framer-motion";

function Section3() {
  const data = [
    {
      title: "Boost Visibility",
      description: `Improve your search engine visibility through our
      effective restaurant marketing strategies. `,
      url: Url1,
    },
    {
      title: "Showcase Your Menu",
      description: `Display your mouth-watering dishes, enticing
      customers to visit your restaurant.`,
      url: Url2,
    },
    {
      title: "Location and Contact Information",
      description: `Provide accurate information, making it easy for
      customers to find and reach your restaurant.`,
      url: Url3,
    },
    {
      title: "Online Reservation",
      description: `Allow customers to conveniently book tables online,
      enhancing the customer experience and driving
      more bookings.`,
      url: Url4,
    },
    {
      title: "Customer Reviews",
      description: `Showcase positive reviews and testimonials,
      building trust and credibility among potential
      customers.`,
      url: Url5,
    },
    {
      title: "Highlight Special Offers",
      description: `Promote special deals, discounts, and events to
      entice customers and create a sense of urgency.`,
      url: Url6,
    },
  ];
  return (
    <div className="web-dev-section-1 py-5">
      <div className="container py-2">
        <h2 className="h2-lg text-center ff-p c-fw-6 text-gray5">
          Why do Your Restaurants need a Website?
        </h2>
      </div>
      <div className="container">
        <div className="text-center">
          <p className="ff-p c-fw-4 p-text-lg px-2 px-lg-0 text-clr-scorpion text-sm-justify">
            In today’s digital age, having a strong online presence is crucial
            for restaurants to thrive. Fielmente, the leading restaurant
            marketing agency in india's, understands the importance of
            restaurant marketing and the role it plays in attracting and
            engaging potential customers.
          </p>
        </div>
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
                  <div className="m-auto" style={{ width: "7rem" }}>
                    <img
                      src={item.url}
                      className="img-top img-fluid"
                      alt={item.alt}
                    />
                  </div>
                  <div className="card-body " style={{ height: "12rem" }}>
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

export default Section3;
