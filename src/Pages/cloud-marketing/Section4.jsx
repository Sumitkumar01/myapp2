import React from "react";

import TwoColumn from "../../Component/TwoColumn";
import Img7 from "../../Assests/cloud-kitichen/Frame-230.png.png";
import BlueLinkButton from "../../Component/BlueLinkButton";

import Url1 from "../../Assests/restaurent-marketing/LinkSVG (6).svg";
import Url2 from "../../Assests/restaurent-marketing/LinkSVG (7).svg";
import Url3 from "../../Assests/restaurent-marketing/LinkSVG (8).svg";
import Url4 from "../../Assests/restaurent-marketing/LinkSVG (9).svg";
import Url5 from "../../Assests/restaurent-marketing/LinkSVG (10).svg";
import Url6 from "../../Assests/restaurent-marketing/LinkSVG (11).svg";
// import { motion } from "framer-motion";

function Section4() {
  const heading = `Why Cloud Kitchens should have Social media presence`;
  const description1 = `Fielmente, the leading cloud kitchen marketing agency knows the power of social media in
  reaching a wider audience, engaging with customers, and more to it. Here’s why you should
  invest in a captivating social media presence:`;

  const data = [
    {
      url: Url1,
      title: `Collaborate with Influencer's`,
      description: `Partner with influencer's in the F&B industry to
      amplify your reach, attract new customers,
      and increase brand awareness.`,
    },
    {
      url: Url2,
      title: `Reach a Wider Audience`,
      description: `Connect with potential customers beyond
      your local area, reaching a larger audience
      through popular social media platforms.`,
    },
    {
      url: Url3,
      title: `Promote Specials & Offers`,
      description: `Share exclusive deals, limited-time
      promotions, and discounts to create
      excitement and drive more orders.`,
    },
    {
      url: Url4,
      title: `Visual Appeal`,
      description: `Showcase appetizing food photos and videos
      to captivate and entice customers,
      encouraging them to order from your cloud
      kitchen.`,
    },
    {
      url: Url5,
      title: `Customer Engagement`,
      description: `Interact directly with customers, responding to
      their comments, inquiries, and reviews,
      fostering a sense of community and building
      customer loyalty.`,
    },
    {
      url: Url6,
      title: `Brand Persona`,
      description: `Develop a unique brand identity and voice
      through social media, creating a memorable
      and relatable image for your cloud kitchen.`,
    },
  ];
  const Section = "web-dev-section-3 py-lg-4";
  const containerClass = "my-4";
  const rowClass = "px-2 px-lg-0";
  const colClass1 =
    "col-lg-4 col-12 d-flex align-items-center justify-content-lg-start justify-content-center";
  const colClass2 = "col-lg-8 col-12 p-lg-4 p-2";
  const colLeftData = (
    <div className="web-dev-section-3-img-div ">
      <img
        src={Img7}
        className="img-fluid "
        alt="avatar"
        // style={{ height: "35rem" }}
      />
    </div>
  );
  const ColRightData = (
    <div>
      <h2 className="h2-lg ff-p c-fw-6 text-gray5">{heading}</h2>

      <p className="p-text-md ff-p c-fw-4 text-justify">{description1}</p>
      <div className="row">
        {data.map((item, i) => (
          <div className="col-lg-6 col-md-6 col-12" key={i}>
            <div className="row px-2">
              <div className="col-lg-2 px-1 py-0 d-flex">
                <img
                  src={item.url}
                  className="img-fluid"
                  alt={item.title}
                  style={{ width: "4rem", height: "4rem" }}
                />
              </div>
              <div className="col-lg-10 px-1 py-1">
                <h3 className="h3-1 ff-p c-fw-6 text-clr-gray5 text-capitalize">
                  {item.title}
                </h3>
                <p className="p-text-md ff-p c-fw-4 text-justify">
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
          text="Connect with Our Experts"
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
