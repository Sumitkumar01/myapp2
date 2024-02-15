import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img5 from "../../Assests/industries-we-serve/asset-7.png";
import WhiteLinkButton from "../../Component/WhiteLinkButton";

function Section3() {
  const heading = "Driving Success Through Mind-blowing UI";
  const data = [
    {
      description:
        "At Fielmente, we understand that real success goes beyond rankings – it’s about RESULTS.",
    },

    {
      description:
        "Our approach, as a leading hospitality website development agency in India, focuses on maximizing your ROI by converting organic traffic into tangible revenue growth. Let’s join forces for unparalleled achievements!",
    },
  ];
  const Section = "web-dev-section-3 py-lg-4";
  const containerClass = "my-4";
  const rowClass = "px-lg-0 px-2 flex-column-reverse flex-lg-row flex-md-row";
  const colClass1 = "col-lg-5 col-md-5 col-12 p-1";
  const colClass2 = "col-lg-7 col-md-7 col-12 p-lg-4";
  const colLeftData = (
    <div className="web-dev-section-3-img-div mt-2 mt-lg-0 mt-md-0 " style={{ height: "35rem" }}>
      <img src={Img5} className="rounded-4" alt="room-img" />
    </div>
  );
  const ColRightData = (
    <div>
      <h2 className="text-white h2-lg ff-p c-fw-6 ">{heading}</h2>
      {data.map((item, i) => (
        <p key={i} className="c-light-white mt-lg-5 ff-p text-justify c-fw-4 p-text-lg">{item.description}</p>
      ))}
      <div className="d-flex justify-content-center">

      <WhiteLinkButton url="/contact/" text="get started"/>
      </div>
    </div>
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

export default Section3;
