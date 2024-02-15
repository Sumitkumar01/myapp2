import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import blogimg1 from "../../../Assests/blog/asset-2.png";
import blogimg2 from "../../../Assests/blog/asset-3.png";
import blogimg3 from "../../../Assests/blog/asset-4.jpeg";


function LatestPosts() {
  const blogsData = [
    {
      url: blogimg1,
      imgtitle: "hotel",
      title: "How to Reply to Google business Profile and Facebook Feedback",
      month: "October ",
      date: "12, 2023",
      desc: `In recent times, opinions and reviews have become crucial for`,
      link:'/respond-to-facebook-google-reviews/'
    },
    {
      url: blogimg2,
      imgtitle: "hotel",
      title: "Why do you need Fielmente Hospitality Marketing Agency?",
      month: "October ",
      date: "11, 2023",
      desc: `A hospitality digital marketing agency brings its clients revenue with`,
      link:'/hospitality-consultants-in-india/'
    },
    {
      url: blogimg3,
      imgtitle: "Branding",
      title:
        "How to start Cloud Kitchen in India-Ultimate Guide to open the Cloud Kitchen",
      month: "August ",
      date: "26, 2023",
      desc: `Why is opening a cloud kitchen a good idea? Here’s`,
      link:'/how-to-start-cloud-kitchen-in-india-ultimate-guide-to-open-the-cloud-kitchen/'
    },
    {
      url: blogimg1,
      imgtitle: "hotel",
      title: "How to Reply to Google business Profile and Facebook Feedback",
      month: "October ",
      date: "12, 2023",
      desc: `In recent times, opinions and reviews have become crucial for`,
      link:'/respond-to-facebook-google-reviews/'
    },
    {
      url: blogimg2,
      imgtitle: "hotel",
      title: "Why do you need Fielmente Hospitality Marketing Agency?",
      month: "October ",
      date: "11, 2023",
      desc: `A hospitality digital marketing agency brings its clients revenue with`,
      link:'/hospitality-consultants-in-india/'
    },
    {
      url: blogimg3,
      imgtitle: "Branding",
      title:
        "How to start Cloud Kitchen in India-Ultimate Guide to open the Cloud Kitchen",
      month: "August ",
      date: "26, 2023",
      desc: `Why is opening a cloud kitchen a good idea? Here’s`,
      link:'/how-to-start-cloud-kitchen-in-india-ultimate-guide-to-open-the-cloud-kitchen/'
    },
  ];
  return (
    <section className="latest_posts_Section py-lg-4 px-3">
      <div className="container">
        <h2 className="text-center c-fw-7 ff-p">Latest Posts</h2>

        <div className="px-2">
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
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {blogsData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="card text-start overflow-hidden">
                  <Link
                    to={item.link}
                    className="text-d-none text-black"
                    style={{
                      // width: "315px",
                      height: "213.4px",
                      backgroundImage: `url(${item.url})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div
                      className="w-100 h-100 d-flex align-items-start justify-content-end p-3"
                      style={{
                        backgroundColor:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.74) 44.44%, #000 100%)",
                      }}
                    >
                      <span
                        className="text-uppercase px-2 py-1 rounded-5"
                        style={{
                          backgroundColor: "#F26633",
                          fontSize: ".8rem",
                        }}
                      >
                        {item.imgtitle}
                      </span>
                    </div>
                  </Link>
                  <div className="card-body">
                    <Link to={item.link}
                      className="card-title fs-6 c-fw-7 ff-p text-balance text-d-none text-black d-block"
                      style={{ height: "5rem" }}
                    >
                      {item.title}
                    </Link>
                    <Link
                      to={item.link}
                      className="text-d-none text-black text-uppercase"
                    >
                      read more <small>&gt;&gt;</small>
                    </Link>
                  </div>
                  <div className="d-flex border-1 border-top">
                    <p className="c-fw-3 ff-p ps-3 py-2 mb-0 fs-6 text-black">
                      {item.month} {item.date}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default LatestPosts;
