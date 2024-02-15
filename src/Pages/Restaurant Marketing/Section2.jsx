import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img3 from "../../Assests/restaurent-marketing/briefing-staff-hotel-restaurant-2.png.png";
import { Link } from "react-router-dom";

function Section2() {
  const Section = "web-dev-section-1";
  const containerClass = "py-4 py-lg-5 ";
  const rowClass = " px-2 px-lg-0";
  const colClass2 =
    "col-lg-5 col-md-5 col-sm-12 d-flex align-items-center justify-content-end";
  const colClass1 = "col-lg-7 col-md-7 col-sm-12 p-2 ";

  const data = [
    {
      text: `In today’s digital age, your restaurant’s reputation is everything. But fear not! At our
      Restaurant Marketing Agency, we’ve mastered the art of managing and elevating your
      online presence. From Google Reviews to Facebook, Instagram, and LinkedIn, we’ll
      monitor and curate the comments that can make or break your business. `,
    },
    {
      text: `Trust the experts at Fielmente to make your brand shine and draw eager diners to your
      tables. Get ready for a reputation transformation like never before!`,
    },
  ];
  // col - data ---------
  const ColRightData = (
    <>
      <div className="col-1-img-div w-lg-100 h-lg-100 rounded-4 overflow-hidden">
        <img src={Img3} alt="hotel-img rounded-4" />
      </div>
    </>
  );

  const colLeftData = (
    <>
      <div>
        <h2 className="text-capitalize banner-h1-md text-gray5 ff-p c-fw-4">
          <u>Fielmente Restaurant Marketing Company</u>
        </h2>
        <h3 className="h2-lg ff-p c-fw-6 text-gray5 text-capitalize">Generating A Buzz Hotspot That Fills Seats</h3>
        
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
