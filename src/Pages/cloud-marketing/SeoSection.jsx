import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import ImgUrl from "../../Assests/cloud-kitichen/keywords.png.png";

import img1 from "../../Assests/restaurent-marketing/LinkSVG.svg";
import img2 from "../../Assests/restaurent-marketing/LinkSVG (1).svg";
import img3 from "../../Assests/restaurent-marketing/LinkSVG (2).svg";
import img4 from "../../Assests/restaurent-marketing/LinkSVG (3).svg";
import img5 from "../../Assests/restaurent-marketing/LinkSVG (4).svg";
import img6 from "../../Assests/restaurent-marketing/LinkSVG (5).svg";
import BlueLinkButton from "../../Component/BlueLinkButton";
// import { motion } from "framer-motion";

function SeoSection() {
  const heading = `Why Cloud Kitchen Needs Google SEO`;

  const data = [
    {
      url: img1,
      title: "Targeted Traffic",
      description: `Quality, relevant traffic to your website by
      optimizing for keywords related to your cuisine,
      location, and unique offerings.`,
    },
    {
      url: img2,
      title: `Cost-Effectiveness`,
      description: `SEO is a cost-effective marketing strategy,
      providing long-term benefits and a higher return
      on investment for the cloud kitchen.`,
    },
    {
      url: img3,
      title: `Outrank Competitors`,
      description: `Our expert team of SEO professionals will
      work diligently to help your cloud kitchen
      outperform competitors in search results.`,
    },
    {
      url: img4,
      title: `Local Search Optimization`,
      description: `Our cloud kitchen SEO services prioritize
      local search optimization, attracting nearby
      customers searching for convenient food
      delivery.`,
    },
    {
      url: img5,
      title: `Online Reputation Management`,
      description: `Monitor and respond to customer reviews,
      ensuring a positive online reputation that builds
      trust and encourages more orders.`,
    },
    {
      url: img6,
      title: `Mobile Optimization`,
      description: `Optimize your website for mobile devices,
      providing a seamless and user-friendly experience
      for customers who prefer ordering through their
      smartphones.`,
    },
  ];

  const leftData = (
    <div>
      <div>
        <h2 className="h2-lg ff-p c-fw-6 text-gray5">{heading}</h2>
      </div>
      <div className="row">
        {data.map((item, i) => (
          <div className="col-lg-6 col-md-6 col-12 " key={i}>
            <div className="row px-2">
              <div className="col-lg-2 px-1 py-0 d-flex">
                <img
                  src={item.url}
                  className="img-fluid mt-1"
                  alt={item.title}
                  style={{ width: "3rem", height: "3rem" }}
                />
              </div>
              <div className="col-lg-10 px-1 py-1">
                <h3 className="h3-1 ff-p c-fw-6 text-clr-gray5 mb-0 text-capitalize">
                  {item.title}
                </h3>
                <p className="p-text-md ff-p c-fw-4 text-balance text-sm-justify">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  const rightData = (
    <div>
      <img src={ImgUrl} alt="Hotel-img" />{" "}
    </div>
  );
  return (
    <section>
      <TwoColumn
        Section=""
        containerClass=""
        rowClass="flex-column-reverse flex-lg-row "
        colClass1="col-lg-7 col-12"
        colClass2="col-lg-5 col-12 d-flex align-items-center justify-content-lg-end justify-content-center"
        colLeftData={leftData}
        ColRightData={rightData}
      />
      <div className="text-center py-lg-4">
        <BlueLinkButton
          className="px-5 text-capitalize rounded-5"
          url="/contact/"
          text="contact us"
        />
      </div>
    </section>
  );
}

export default SeoSection;
