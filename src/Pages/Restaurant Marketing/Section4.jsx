import React from "react";

import TwoColumn from "../../Component/TwoColumn";
import Img7 from "../../Assests/service/asset 9.png";
import BlueLinkButton from "../../Component/BlueLinkButton";
import Url1 from "../../Assests/restaurent-marketing/LinkSVG (6).svg";
import Url2 from "../../Assests/restaurent-marketing/LinkSVG (7).svg";
import Url3 from "../../Assests/restaurent-marketing/LinkSVG (8).svg";
import Url4 from "../../Assests/restaurent-marketing/LinkSVG (9).svg";
import Url5 from "../../Assests/restaurent-marketing/LinkSVG (10).svg";
import Url6 from "../../Assests/restaurent-marketing/LinkSVG (11).svg";
// import { motion } from "framer-motion";

function Section4() {
  const heading = "Why does your hotel need to have social media presence?";
  const description1 = `Nowadays there is a strong need for social media presence in attracting customers and
    elevating your restaurant’s success. Let Fielmente, the trusted restaurant marketing agency,
    help you with the power of social media to connect with a wider audience and much more,`;

  const data = [
    {
      url: Url1,
      title: `Engage with Customers`,
      description: `Interact directly with customers, responding to
    their comments, inquiries, and reviews,
    fostering a sense of community and building
    customer loyalty.`,
    },
    {
      url: Url2,
      title: `User Generated Content`,
      description: `Encourage customers to share their
    experiences and food photos, leveraging
    user-generated content to amplify your
    restaurant's online presence.`,
    },
    {
      url: Url3,
      title: `Reach a Wider Audience`,
      description: `Connect with potential customers beyond
    your physical location, reaching a larger
    audience through social media platforms.`,
    },
    {
      url: Url4,
      title: `Stay Top of Mind`,
      description: `Regularly update your social media profiles
    with engaging content, keeping your
    restaurant in the minds of customers and
    increasing the likelihood of repeat visits.`,
    },
    {
      url: Url5,
      title: `Build Brand Personality`,
      description: `Develop a unique brand identity and voice
    through social media, creating a memorable
    and relatable image for your restaurant.`,
    },
    {
      url: Url6,
      title: `Showcase Your Food`,
      description: `Display enticing food photos and videos to
    showcase your delicious menu items,
    tempting customers to visit your restaurant.`,
    },
  ];
  const Section = "web-dev-section-3 py-lg-4";
  const containerClass = "my-4";
  const rowClass = "px-3 px-lg-0 flex-column-reverse flex-lg-row flex-md-row";
  const colClass1 =
    "col-lg-4  col-12 d-flex align-items-center justify-content-lg-start justify-content-center lg-pb-0 pb-2";
  const colClass2 = "col-lg-8  col-12 p-0";
  const colLeftData = (
    <div className="web-dev-section-3-img-div ">
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
      <h2 className="h2-lg ff-p c-fw-6 text-gray5 mt-2 mt-lg-0 mt-md-0">
        {heading}
      </h2>

      <p className="p-text-md ff-p c-fw-4 text-justify">{description1}</p>
      <div className="row p-0 m-0">
        {data.map((item, i) => (
          <div
            className="col-lg-6 col-md-6 col-12 d-flex gap-1 m-0 px-1"
            key={i}
          >
            <div className="row m-0">
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
                <p className="p-text-md ff-p c-fw-4 text-justify mb-0">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-2">
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
