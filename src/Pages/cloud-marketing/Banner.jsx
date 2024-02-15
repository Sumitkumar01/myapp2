import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import BannerImg from "../../Assests/cloud-kitichen/Section-Frame-289.png.png";

function Banner() {
  const heading2 = `India’s Best Cloud Kitchen Marketing
  Agency`;
  // const heading1 = "SERVICES AS A HOTEL MARKETING AGENCY";

  const description = [
    {
      Text: `Struggling to achieve your cloud kitchen’s order goals?`,
    },
    {
      Text: `Fielmente, the leading cloud kitchen marketing agency in India, has the solution! With our
      expert services, we’ll boost your sales and empower your managers and teams to reach
      their desired goals.`,
    },
    {
      Text:'Ready to see your cloud kitchen thrive like never before?'
    }
  ];
  // const linkText = "know more";
  // const url = "#";
  const imgUrl = BannerImg;
  const Section = "web-dev-section pt-lg-5 pt-4";
  const container = " border-bottom";
  const rowClass = "px-2 px-lg-0";
  const colClass1 = "col-lg-7 col-md-6 col-12 p-lg-2 p-1";
  const colClass2 =
    "col-lg-5 col-md-6  col-12 p-2 d-flex align-items-center justify-content-center justify-content-lg-end";

  // ---------------col-data------------- //
  const colLeftData = (
    <>
      <div className="container px-2">
        <h1 className="mb-4 banner-h1-lg ff-p c-fw-6 text-clr-gray5">
          {heading2}
        </h1>
      </div>
      {description.map((item, i) => (
        <div className="container px-lg-2 p-1" key={i}>
          <p className="mb-4 p-text-lg ff-p c-fw-4 text-clr-scorpion text-justify">
            {item.Text}
          </p>
        </div>
      ))}
    </>
  );

  const ColRightData = (
    <div className="w-100 h-100">
      <img src={imgUrl} className="img-fluid" alt="banner" />
    </div>
  );

  return (
    <header className="pt-5">
      <TwoColumn
        Section={Section}
        containerClass={container}
        rowClass={rowClass}
        colClass1={colClass1}
        colClass2={colClass2}
        colLeftData={colLeftData}
        ColRightData={ColRightData}
      />
    </header>
  );
}

export default Banner;
