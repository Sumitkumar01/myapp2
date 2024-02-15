import React from "react";
import Img1 from "../../Assests/indus-we-serv/card/young.png";
import Img2 from "../../Assests/indus-we-serv/card/woman.png";
import Img3 from "../../Assests/indus-we-serv/card/young-happy-waitress.png";
import Img4 from "../../Assests/indus-we-serv/card/teamworking.png";
import Img5 from "../../Assests/indus-we-serv/card/asian.png";
import Img6 from "../../Assests/indus-we-serv/card/profesional.png";
// import { motion } from "framer-motion";

function Section5() {
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
        <div className="container text-center">
          <h2 className="h2-lg ff-p c-fw-6">{heading2}</h2>
        </div>
        <div className="container text-center  p-0" style={{ maxWidth: "85%" }}>
          <p className="ff-p p-text-lg c-fw-4 text-balance text-sm-justify">
            {peraText2}
          </p>
        </div>
      </div>
      <div className="container my-4">
        <div className="row g-3">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-12 p-2">
              <div
                className="card border-0 overflow-hidden"
                style={{
                  borderRadius: "1.5rem",
                  background: "#FFF",
                  boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div
                  className=""
                  style={{
                    backgroundImage: `url(${item.url})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "14.1875rem",
                  }}
                ></div>
                <div
                  className="card-body text-center"
                  style={{ height: "11rem" }}
                >
                  <h3 className="card-title text-capitalize text-clr-gray5 ff-p c-fw-5 fs-sm">
                    {item.heading}
                  </h3>
                  <p className="card-text ff-p c-fw-4 text-clr-scorpion fs-7">
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

export default Section5;
