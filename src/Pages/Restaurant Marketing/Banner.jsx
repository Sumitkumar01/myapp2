import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import BannerImg from "../../Assests/resto/partners-sitting-table-working-cafe-1.png";
import BlueLinkButton from "../../Component/BlueLinkButton";

function Banner() {
  const heading2 = `Best Restaurant Marketing Agency in
  India`;
  // const heading1 = "SERVICES AS A HOTEL MARKETING AGENCY";

  const description = [
    {
      Text: `We at Fielmente create ROI-driven social media campaigns and content for your for your restaurant business. `,
    },
    {
      Text: `The restaurant business is constantly changing and evolving but one thing that has remained the same over the last few years are diners turn to the internet to help them choose where to eat. `,
    },
  ];
  // const linkText = "know more";
  // const url = "#";
  const imgUrl = BannerImg;
  const Section = "web-dev-section pt-lg-5 pt-4";
  const container = " border-bottom";
  const rowClass = "";
  const colClass1 = "col-lg-7 col-md-6 col-12 p-lg-2 p-1";
  const colClass2 =
    "col-lg-5 col-md-6  col-12 p-2 d-flex align-items-center justify-content-center";

  // ---------------col-datat------------- //
  const colLeftData = (
    <div>
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
      <div className="text-center text-lg-start">
        <BlueLinkButton
          className="px-5 text-capitalize rounded-2"
          url="/contact/"
          text="Know more"
        />
      </div>
    </div>
  );

  const ColRightData = (
    <div className="img-div w-lg-100 h-lg-100">
      <img
        src={imgUrl}
        className="d-block w-100 h-100 rounded-4"
        alt="banner"
      />
    </div>
  );

  return (
    <header className="py-lg-4 py-1">
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
