import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img3 from "../../Assests/cloud-kitichen/Frame-289-2.png.png";
import { Link } from "react-router-dom";

function Section1() {
  const Section = "web-dev-section-1";
  const containerClass = "py-lg-5 ";
  const rowClass = "px-lg-0 px-2 flex-lg-row flex-md-row flex-column-reverse";
  const colClass1 =
    "col-lg-5 col-md-5 col-sm-12 d-flex align-items-center justify-content-center";
  const colClass2 = "col-lg-7 col-md-7 col-sm-12 p-2 ";
  // const heading = "Why is Social Media Marketing Important for Your Business?";

  
  // col - data ---------
  const colLeftData = (
    <>
      <div className="col-1-img-div w-100 h-100">
        <img src={Img3} alt="hotel-img" className="img-fluid" />
      </div>
    </>
  );

  const ColRightData = (
    <>
      <div>
        <h2 className="banner-h1-md text-gray5 ff-p c-fw-4">
          <u>How our Cloud Kitchen Marketing Agency help you to grow</u>
        </h2>
        <h3 className="h2-lg ff-p c-fw-6 text-gray5 text-capitalize">
          You focus on cooking and We Grow Your Cloud Kitchen Business through
          our marketing strategy
        </h3>
        <p className="ff-p c-fw-4 p-text-lg text-clr-scorpion">
          Join forces with Fielmente, India’s premier cloud kitchen marketing
          agency. Maximize online orders, boost sales, and unleash your
          business’s full potential. Our expert strategies will supercharge your
          revenue and optimize operations for seamless growth.
        </p>
      </div>
      <div>
        <div className="">
          <Link to="/contact/" className="border-bottom text-black fs-4">
            Contact us
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <>
      <TwoColumn
        Section={Section}
        containerClass={containerClass}
        rowClass={rowClass}
        colClass1={colClass1}
        colClass2={colClass2}
        colLeftData={colLeftData}
        ColRightData={ColRightData}
      />
    </>
  );
}

export default Section1;
