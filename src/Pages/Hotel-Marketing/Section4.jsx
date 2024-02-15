import React from "react";

import TwoColumn from "../../Component/TwoColumn";
import Img7 from "../../Assests/service/asset 9.png";
import BlueLinkButton from "../../Component/BlueLinkButton";

import Url1 from "../../Assests/resto/Group.png";
import Url2 from "../../Assests/resto/Group (1).png";
import Url3 from "../../Assests/resto/Group (2).png";
import Url6 from "../../Assests/resto/Group (3).png";
import Url4 from "../../Assests/resto/stats_2285660 1.png";
import Url5 from "../../Assests/resto/Group 521.png";
// import { motion } from "framer-motion";

function Section4() {
  const data = [
    {
      url: Url1,
      title: `Engage Guests`,
      description: `Connect directly with guests, build relationships, and foster loyalty.`,
    },
    {
      url: Url2,
      title: `Reputation Management`,
      description: `Monitor and respond to guest reviews, ensuring a positive online reputation.`,
    },
    {
      url: Url3,
      title: `Direct Bookings`,
      description: `Boost revenue with a seamless booking experience.`,
    },
    {
      url: Url4,
      title: `Reach a Wider Audience`,
      description: `Expand your reach and attract new guests through targeted advertising and viral content.`,
    },
    {
      url: Url5,
      title: `Visual Appeal`,
      description: `Share captivating visuals to create desire and inspire travel`,
    },
    {
      url: Url6,
      title: `Showcase Your Hotel`,
      description: `Highlight unique features and amenities.`,
    },
  ];
  const heading = "Why does your hotel need to have social media presence?";
  const description1 = `Boost guest engagement and attract potential guests with an impactful social media presence, customized by Fielmente, a renowned hotel marketing agency in India.`;
  const Section = "web-dev-section-3 py-lg-4";
  const containerClass = "my-4";
  const rowClass = "";
  const colClass1 =
    "col-lg-4 col-12 d-flex align-items-center justify-content-center justify-content-lg-start justify-content-center";
  const colClass2 = "col-lg-8 col-12 ";
  const colLeftData = (
    <div className="web-dev-section-3-img-div pb-lg-0 pb-3">
      <img
        src={Img7}
        className="img-fluid "
        alt="avatar"
        style={{ height: "35rem" }}
      />
    </div>
  );
  const ColRightData = (
    <div>
      <h2 className="h2-lg ff-p c-fw-6 text-gray5 px-2 px-lg-0">{heading}</h2>

      <p className="c-fw-4 ff-p p-text-lg text-justify px-2 px-lg-0">
        {description1}
      </p>
      <div className="row p-0 m-0">
        {data.map((item, i) => (
          <div className="col-lg-6 col-md-6 col-12  m-0" key={i}>
            <div className="row">
              <div className="col-lg-2 px-1 py-0 d-flex">
                <img
                  src={item.url}
                  className="img-fluid"
                  alt={item.title}
                  style={{ width: "4rem", height: "4rem" }}
                />
              </div>
              <div className="col-lg-10 px-1 py-1">
                <h3 className="h3-1 ff-p c-fw-6 text-clr-gray5 mb-0 text-capitalize">
                  {item.title}
                </h3>
                <p className="p-text-md ff-p c-fw-4 text-justify mb-o">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-2">
        <BlueLinkButton
          className="px-5 text-capitalize rounded-5"
          url="/contact/"
          text="contact us"
        />
      </div>
    </div>
  );
  return (
    <div>
      <TwoColumn
        Section={Section}
        containerClass={containerClass}
        rowClass={rowClass}
        colClass1={colClass1}
        colClass2={colClass2}
        colLeftData={colLeftData}
        ColRightData={ColRightData}
      />
    </div>
  );
}

export default Section4;
