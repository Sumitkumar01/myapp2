import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../Assests/Marketing/young-confident-head-manager.png";
import Img2 from "../../Assests/Marketing/young-smiling-hotel-worker-uniform-holding-digital-tablet.png";
import Img3 from "../../Assests/Marketing/happy-businesswoman-standing.png";
import Img4 from "../../Assests/Marketing/bellboy-hotel.png";
import Img5 from "../../Assests/Marketing/portrait-cheerful-vietnamese-hotel-concierge-making-welcoming.png";
import Img6 from "../../Assests/Marketing/portrait-male-receptionist-hotel.png";
// import { motion } from "framer-motion";

function Section3() {
  const heading1 =
    "Are you ready to unlock the full potential of your business's online presence width our Hospitality Marketing Services?";
  const peraText1 =
    "Go online and take your hospitality business to new heights! With the leading hospitality consultants in india and the best hospitality marketing agency, today";

  const heading2 = "Why Choose Us";
  const peraText2 =
    "Your business's success is with Fielmente, your ultimate hospitality consultant, offering tailored and result-driven hospitality marketing services in India, crafted precisely for your needs!";

  const data = [
    {
      heading: "Expertise",
      description:
        "Benefit from our extensive experience and expertise in digital marketing for hotels, ensuring effective strategies tailored to your specific needs.",
      url: Img1,
    },
    {
      heading: "Results-Driven Approach",
      description:
        "We are dedicated to delivering tangible results, maximizing your online presence, and driving increased bookings and revenue for your hotel.",
      url: Img2,
    },
    {
      heading: "industry focus",
      description:
        "Specializing on the hotel sector, we understand the unique challenges and opportunities, enabling us to provide solutions for a competitive edge.",
      url: Img3,
    },
    {
      heading: "customized solutions",
      description:
        "We take the time to understand your hotel's goals and objectives, crafting customized strategies and solutions that align with your brand and resonate with your target audience.",
      url: Img4,
    },
    {
      heading: "integrated services",
      description:
        "From SEO and web design to social media and paid advertising, our comprehensive suite of services ensures a cohesive and holistic approach to your digital marketing efforts.",
      url: Img5,
    },
    {
      heading: "Exception client service",
      description:
        "Enjoy a seamless and personalized experience with our attentive and dedicated client service team, ensuring your satisfaction and success throughout our partnership.",
      url: Img6,
    },
  ];
  return (
    <>
      <div className="container web-dev-section-3 my-4 p-2 ">
        <div className="container">
          <h2 className="h2-lg ff-p c-fw-6 text-clr-gray5 text-center">
            {heading1}
          </h2>
        </div>
        <div className="container  p-0" style={{ maxWidth: "85%" }}>
          <p className="p-text-lg ff-p c-fw-4 text-clr-scorpion text-lg-center text-md-center text-sm-justify">
            {peraText1}
          </p>
        </div>
        <div className="text-center py-3">
          <Link
            to="/contact/"
            className="px-4 py-2 bg-black text-white rounded m-auto hover-black"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Contact us
          </Link>
        </div>

        <div className="container ">
          <h2 className="h2-lg ff-p c-fw-6 text-clr-gray5 text-center">
            {heading2}
          </h2>
        </div>
        <div className="container text-center  p-0" style={{ maxWidth: "85%" }}>
          <p className="p-text-lg ff-p c-fw-4 text-clr-scorpion text-lg-center text-md-center text-sm-justify">
            {peraText2}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row g-3">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-12 p-2">
              <div className="card border-0 overflow-hidden">
                <div
                  style={{
                    height: "23rem",
                    backgroundImage: `url(${item.url})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>

                <div
                  className="card-body text-center"
                  style={{ height: "10rem" }}
                >
                  <h3 className="fs-5 text-clr-gray5 ff-p c-fw-5 card-title text-capitalize">
                    {item.heading}
                  </h3>
                  <p className="fs-7 ff-p c-fw-4 text-clr-scorpion card-text">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Section3;
