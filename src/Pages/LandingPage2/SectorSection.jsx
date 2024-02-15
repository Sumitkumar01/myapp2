import React, { useState } from "react";
// import { motion } from "framer-motion";
import underline from "../../Assests/Landigpage2/Vector 1.png";
import img from "../../Assests/Landigpage2/Frame 289.png";
import img2 from "../../Assests/Landigpage2/Frame288.png";
import img3 from "../../Assests/Landigpage2/Frame 290.png";

import { Link } from "react-router-dom";
const sectorDetails = [
  {
    title: `
    Draw Guests to Your Hotel`,
    desc: `Turn your hotel into the talk beyond the town. Increase your occupancy with our multi-fold marketing avenues and stand out as a preferred stay. Execute the hotel marketing magic!`,
    img: img,
    btnName: "Hotel",
    link: {
      name: "Explore Hotel Marketing",
      src: "/",
    },
  },
  {
    title: `Pull Customers to Your Restaurant`,
    desc: `Focus on making delicious cuisines at your restaurant. We will shout out to the world about your amazing taste. Drive engagement and amplify your brand’s reach with Fielmente.`,
    img: img2,
    btnName: "Resturant",
    link: {
      name: "Explore Hotel Marketing",
      src: "/",
    },
  },
  {
    title: "The City Should Taste Your Culinary Fusions",
    desc: `Make dining at home or the office a memorable experience. Increase order count with targeted marketing strategies and foster customer engagement, resulting in an influential marketing impact.`,
    img: img3,
    link: {
      name: "Explore Hotel Marketing",
      src: "/",
    },
    btnName: "cloud kitchen",
  },
];

export const SectorSection = () => {
  const [indexVal, setIndexVal] = useState(0);

  return (
    <section className="py-4 sector-section">
      <div className="container">
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
            sectors
          </span>
        </h2>
        <h3 className="text-center h2-lg c-fw-6 text-blue-2">
          Fielmente, the Right Marketing Partner to Turn Your Business into a
          Brand!
        </h3>
        <div className="row">
          <div className="col-lg-3">
            <div className="d-flex flex-lg-column justify-content-center gap-lg-4 gap-1  w-100 h-100">
              {sectorDetails.map((b, index) => {
                return (
                  <button
                    // className=" py-2 rounded-5 landing-page2-btn text-capitalize fs-6 btn-active"
                    className={`py-2 rounded-5 landing-page2-btn text-capitalize fs-6 btn-active ${
                      indexVal === index ? "active" : ""
                    }`}
                    onClick={() => {
                      setIndexVal(index);
                    }}
                  >
                    {b.btnName}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div>
                  <img src={sectorDetails[indexVal].img} alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center gap-2 ">
                <h3 className=" text-blue-2 fs-1 c-fw-7">
                  {sectorDetails[indexVal].title}
                </h3>
                <p className="text-blue-2 fs-5 c-fw-4 text-justify">
                  {sectorDetails[indexVal].desc}
                </p>
                <div className="d-flex  justify-content-center justify-content-lg-start">
                  <Link
                    to="/"
                    className="text-blue-2 text-d-none fs-5 c-fw-4 rounded-3 btn-y-active"
                  >
                    Explore Hotel Marketing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
