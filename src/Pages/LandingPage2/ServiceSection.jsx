import React, { useState } from "react";
import underline from "../../Assests/Landigpage2/Vector 1.png";
// import { motion } from "framer-motion";
import img from "../../Assests/Landigpage2/Rectangle-6.png";
import img1 from "../../Assests/Landigpage2/Asset1.png";
import img2 from "../../Assests/Landigpage2/Rectangle2.png";
import img3 from "../../Assests/Landigpage2/Frame 297.png";

const serviceDetails = [
  {
    title: "Elevate Ranking, Dominate Search.",
    desc: ` Ensure a prominent and lasting presence across online platforms
    with strategic SEO techniques curated for hospitality
    businesses.`,
    img: img,
  },
  {
    title: "Craft Websites that Captivate.",
    desc: `Elevate your digital presence with bespoke website designs that resonate with your brand’s offerings and unique features.`,
    img: img1,
  },
  {
    title: "Boost Presence, Conquer Social.",
    desc: `Transform your brand with strategic social media marketing, forge meaningful connections and foster brand growth.`,
    img: img2,
  },
  {
    title: "Capture Attention with Paid Ads.",
    desc: `Unlock the potential of your brand using expertly crafted paid ad campaigns to exponentially expand your reach and impact.`,
    img: img3,
  },
];

export const ServiceSection = () => {
  const [indexVal, setIndexVal] = useState(0);
  return (
    <section className="py-lg-4">
      <div className="container">
        <div>
          <h2 className="text-uppercase text-center c-fw-4 fs-6 text-blue-2">
            <span
              style={{
                backgroundImage: `url(${underline})`,
                backgroundPosition: "bottom",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                padding: ".1rem 2rem",
              }}
            >
              service
            </span>
          </h2>
          <h3 className="c-fw-7 h2-lg text-blue-2 text-center">
            Realise All Your <span style={{ color: "#625ACA" }}>Hotel</span>{" "}
            Marketing Goals Under One Roof!
          </h3>
        </div>
        <div>
          <div className="d-flex justify-content-center flex-wrap gap-lg-4 gap-md-3 gap-1 py-lg-2">
            <button
              value={0}
              onClick={(e) => {
                setIndexVal(e.target.value);
              }}
              className="rounded-5 landing-page2-btn text-capitalize fs-6 btn-active"
            >
              Serach Engine Optimise
            </button>
            <button
              value={1}
              onClick={(e) => {
                setIndexVal(e.target.value);
              }}
              className="rounded-5 landing-page2-btn text-capitalize fs-6 btn-active"
            >
              website Development
            </button>
            <button
              value={2}
              onClick={(e) => {
                setIndexVal(e.target.value);
              }}
              className="rounded-5 landing-page2-btn text-capitalize fs-6 btn-active"
            >
              social media marketing
            </button>
            <button
              value={3}
              onClick={(e) => {
                setIndexVal(e.target.value);
              }}
              className="rounded-5 landing-page2-btn text-capitalize fs-5 btn-active"
            >
              paid ads campaigns
            </button>
          </div>
          <div
            className={`flex-lg-row flex-md-row  row flex-column-reverse ${
              indexVal % 2 !== 0 ? "flex-lg-row-reverse" : "flex-row"
            }`}
          >
            <div className="col-lg-6 col-md-6 col-12 py-3 d-flex justify-content-center align-items-start flex-column">
              <h3 className="c-fw-7 fs-2 text-blue-2">
                {serviceDetails[indexVal].title}
              </h3>
              <p className="text-justify c-fw-4 ff-m">
                {serviceDetails[indexVal].desc}
              </p>
            </div>
            <div
              className={`col-lg-6 col-md-6 col-12 d-flex ${
                indexVal % 2 !== 0
                  ? "justify-content-start "
                  : "justify-content-end"
              }`}
            >
              <div>
                <img
                  src={serviceDetails[indexVal].img}
                  className="img-fluid"
                  alt="hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
