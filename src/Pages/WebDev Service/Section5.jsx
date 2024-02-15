import React from "react";

import TwoColumn from "../../Component/TwoColumn";
import Img7 from "../../Assests/industries-we-serve/asset-13.png";
import WhiteLinkButton from "../../Component/WhiteLinkButton";
import Img8 from "../../Assests/industries-we-serve/asset-14.png";
// import { motion } from "framer-motion";

function Section5() {
  const heading = "Let's Ignite Your Growth Together";
  const description1 =
    "Don’t miss the opportunity to revolutionize your online presence and drive unmatched revenue growth. Get in touch with our team today!";
  const description2 =
    "Partner with Fielmente’s expert team to elevate your brand and dominate the digital landscape. Embrace your potential today.";
  const Section = "web-dev-section-3 py-lg-4";
  const containerClass = "my-4";
  const rowClass = "px-lg-0 px-2 flex-column-reverse flex-lg-row flex-md-row";
  const colClass1 = "col-lg-5 col-md-5 col-12 d-flex align-items-center";
  const colClass2 = "col-lg-7 col-md-7 col-12 p-lg-4 p-2";
  const colLeftData = (
    <div className="web-dev-section-3-img-div " style={{ height: "auto" }}>
      <img src={Img7} className="img-fluid " alt="avatar" />
    </div>
  );
  const ColRightData = (
    <div
    // className="d-flex flex-column gap-3 h-100"
    >
      <h2 className="text-white h2-lg ff-p c-fw-6">{heading}</h2>

      <p className="text-white p-text-lg text-justify ff-p c-fw-6 ">
        {description1}
      </p>
      <img src={Img8} alt="avatar" />
      <p className="mt-lg-5 mt-2 text-white text-justify p-text-lg ff-p c-fw-6">
        {description2}
      </p>
      <div className="text-center">
        <WhiteLinkButton url="/contact/" text="Connect with Our Experts" />
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

export default Section5;
