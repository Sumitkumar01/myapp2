import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import { Link } from "react-router-dom";

import Url from "../../Assests/restaurent-marketing/SVG.svg";
import Url1 from "../../Assests/restaurent-marketing/SVG (1).svg";
import Url2 from "../../Assests/restaurent-marketing/SVG (2).svg";
import Url3 from "../../Assests/restaurent-marketing/SVG (3).svg";
import Url4 from "../../Assests/restaurent-marketing/SVG (4).svg";
import Url5 from "../../Assests/restaurent-marketing/SVG (5).svg";
// import { motion } from "framer-motion";

function Section5() {
  const data = [
    {
      url: Url,
      title: `Trusted
    Recommendation`,
      description: `Harness the influence of trusted
      influencer's to endorse your cloud
      kitchen’s unique offerings, driving
      customer interest and increasing
      credibility.`,
    },
    {
      url: Url1,
      title: "Expand Reach",
      description: `Tap into the influencer’s dedicated
      following, extending your brand’s reach
      to a wider audience of potential
      customers.`,
    },
    {
      url: Url2,
      title: `Engaging Content`,
      description: `Collaborate with influencer's to create
      captivating and authentic content that
      showcases your cloud kitchen’s
      delicious food and enticing menu items.`,
    },
    {
      url: Url3,
      title: `Social Proof`,
      description: `Benefit from the social proof generated
      by influencer's positive experiences and
      endorsements, building trust and
      encouraging more customers to order
      from your cloud kitchen.`,
    },
    {
      url: Url4,
      title: `Unique Experiences`,
      description: `Offer exclusive tastings or experiences
      to influencer's, allowing them to share
      their firsthand experiences and generate
      excitement around your cloud kitchen.`,
    },
    {
      url: Url5,
      title: `Increased Orders`,
      description: `Influencer marketing can drive a surge in
      orders as followers are inspired to try
      your cloud kitchen’s offerings based on
      the influencer’s recommendations.`,
    },
  ];
  const leftData = (
    <div>
      <div>
        <h2 className="text-white h2-lg c-fw-7 ff-p">
          How our Food Influencer Marketing help your cloud kitchen to grow
        </h2>
      </div>
      <div className="d-flex justify-content-center justify-content-lg-start py-2">
        <Link to="/contact/" className="green-btn text-d-none text-capitalize">
          Contact us
        </Link>
      </div>
      <div>
        <p className="text-justify text-white p-text-md c-fw-4 ff-p">
          Maximize the potential of your cloud kitchen with influencer
          marketing.
        </p>
      </div>
    </div>
  );
  const rightData = (
    <div>
      <div className="row m-0">
        {data.map((item, i) => (
          <div
            className="col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-between gap-2 p-2 m-0"
            key={i}
          >
            <div className="border px-2 py-3 rounded-3 card-bg-color-yellow-1" style={{minHeight:'15rem'}}>
              <div className="d-flex">
                <div>
                  <img src={item.url} className="img-fluid" alt={item.title} />
                </div>
                <div>
                  <h3 className="h3-1 ff-p c-fw-6 text-clr-gray5 text-capitalize">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div>
                <p className="text-justify p-text-md ff-p c-fw-4 pe-1">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <TwoColumn
      Section="section-bg-clr py-lg-5  py-4"
      containerClass=""
      rowClass=""
      colClass1="col-lg-5 col-md-12 col-12 d-flex align-items-center justify-content-start"
      colClass2="col-lg-7 col-md-12 col-12 m-0 p-0"
      colLeftData={leftData}
      ColRightData={rightData}
    />
  );
}

export default Section5;
