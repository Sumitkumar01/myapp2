import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img4 from "../../Assests/seo/bellboy-hotel 3.png";
import WhiteLinkButton from "../../Component/WhiteLinkButton";

function Section2() {
  const Section = "";
  const containerClass = "";
  const rowClass = "";
  const colClass1 = "col-lg-7 col-md-7 col-12";
  const colClass2 = "col-lg-5 col-md-5 col-12 d-flex align-items-center justify-content-center";

  const heading = "Driving Success Through Revenue - Focused SEO Strategies.";
  const text =
    "Fielmente understands it’s about RESULTS, not just rankings. Our hospitality SEO Agency in India drives increased organic traffic, ensuring substantial revenue growth. Partner with us for unparalleled success!";
  //   col-data-----
  const colLeftData = (
    <>
      <div className="container text-center text-lg-start text-md-start my-4">
        <h2 className="text-white ff-p c-fw-6 h2-lg">{heading}</h2>
      </div>
      <div className="">
        <p className="text-white  text-justify ff-p c-fw-4 p-text-lg">{text}</p>
      </div>
      <div className="mt-lg-1 mt-md-3 mt-0 text-center text-lg-start text-md-start">
        <WhiteLinkButton url="/contact/" text="get started" />
      </div>
    </>
  );
  const ColRightData = (
    <div className="seo-section-2-img mt-3 mt-lg-0 mt-md-0">
      <img
        src={Img4}
        className="img-fluid"
        alt="happy-young-receptionist-modern-hotel"
      />
    </div>
  );

  return (
    <div className="seo-section-2">
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
