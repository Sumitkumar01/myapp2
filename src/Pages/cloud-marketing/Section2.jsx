import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img3 from "../../Assests/cloud-kitichen/Frame-251-1.png.png";
import { Link } from "react-router-dom";

function Section2() {
  const Section = "web-dev-section-1";
  const containerClass = "py-lg-5 ";
  const rowClass = "px-2 px-lg-0";
  const colClass2 =
    "col-lg-5 col-md-5 col-sm-12 d-flex align-items-center justify-content-center";
  const colClass1 = "col-lg-7 col-md-7 col-sm-12 p-2 ";
  // const heading = "Why is Social Media Marketing Important for Your Business?";

  const data = [
    {
      text: `Building an online brand organically is a laborious yet rewarding process. Establishing an
      attractive Food Aggregator Optimization, an effective marketing plan and social media
      platforms help you to grow by 10X`,
    },
    {
      text: `For business growth, leverage Fielmente, the best cloud kitchen marketing agency in
      India. Let our expert cloud kitchen marketing company lead you to success.`,
    },
  ];
  // col - data ---------
  const ColRightData = (
    <>
      <div className="col-1-img-div">
        <img src={Img3} alt="hotel-img" />
      </div>
    </>
  );

  const colLeftData = (
    <>
      <div>
        <h2 className="banner-h1-md text-gray5 ff-p c-fw-4">
          <u>Marketing For Cloud Kitchen in India</u>
        </h2>
      </div>
      <div>
        {data.map((item, i) => (
          <div className="social-media-content-wrap" key={i}>
            <p className="ff-p c-fw-4 p-text-lg text-clr-scorpion text-justify">
              {item.text}
            </p>
          </div>
        ))}
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
      {/* <div className="container mt-4">
        <h2 className="text-white text-center">{heading}</h2>
      </div> */}
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

export default Section2;
