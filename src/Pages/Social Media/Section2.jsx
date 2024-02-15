import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img4 from "../../Assests/social-media/happy-young-receptionist-modern-hotel-using-tablet-while-standing-against-wooden-wall-front-camera-looking-you-with-smile.png";
import WhiteLinkButton from "../../Component/WhiteLinkButton";

function Section2() {
  const Section = "py-lg-3 py-2";
  const containerClass = "";
  const rowClass = "";
  const colClass1 = "col-lg-7 col-md-7 col-12";
  const colClass2 = "col-lg-5 col-md-5 col-12 d-flex align-items-center justify-content-center";

  const heading = "What is Fielmente's Social Media Marketing Approach?";
  const text =
    "Fielmente, the premier hospitality social marketing agency, employs custom content planning, precise scheduling, and strategic campaigns aligned with your business goals. We ensure your brand shines brightly in the spotlight and keep you informed when conversations about your business ignite.";
  //   col-data-----
  const colLeftData = (
    <>
      <div className="container text-center text-lg-start text-ms-start my-lg-4 p-0">
        <h2 className="text-white h2-lg ff-p c-fw-6 mb-2">{heading}</h2>
      </div>
      <div className="text-center text-lg-start text-md-start">
        <p className="text-white text-justify p-text-lg ff-p c-fw-4 mb-2">{text}</p>
      </div>
      <div className="mt-lg-5 mt-md-3 mt-0 text-center text-lg-start text-md-start">
        <WhiteLinkButton url="/contact/" text="get started"/>
      </div>
    </>
  );
  const ColRightData = (
    <div className="social-media-section-2-img-div mt-3 mt-lg-0 mt-md-0">
      <img
        src={Img4}
        className="img-fluid"
        alt="happy-young-receptionist-modern-hotel"
      />
    </div>
  );

  return (
    <div className="social-media-section-2">
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

export default Section2;
