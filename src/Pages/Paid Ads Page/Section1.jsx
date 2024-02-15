import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img3 from "../../Assests/pad-ads/odessa-hotel-sea-port-ukraine 1.png";
import WhiteLinkButton from "../../Component/WhiteLinkButton";

function Section1() {
  const Section = "paid-ads-section-1";
  const containerClass = "py-lg-5 ";
  const rowClass = "";
  const colClass1 = "col-lg-4 col-md-5 col-sm-12 d-flex align-items-center justify-content-center justify-content-lg-start";
  const colClass2 = "col-lg-8 col-md-7 col-sm-12 p-2";
  const heading = "Why Does Your Business Needs Google Ads?";
  const ptext =
    "At Fielmente, the top hospitality Google Ads agency in India, we amplify your brand’s visibility and drive targeted traffic. Our powerful Google Ads services fuel your business growth by unleashing the full potential of online advertising.";
  const data = [
    {
      heading: "Why Google Ads Matter for Your Business",
      text: "Your Potential: Discover the Impact of Effective Advertising on Your Business Success.",
    },
    {
      heading: "Our Google Ads Services - Igniting Your Online Advertising Strategy",
      text: "Precision Targeting: Drive Results with Search Advertising, Display Advertising, and Video Advertising.",
    },
    {
      heading: "Competitive Research",
      text: "Stay ahead by understanding your competitors' moves.",
    },
    {
      heading: "Our Approach to Your Advertising Success",
      text: "Strategic Mastery: From Planning to Execution, We Craft Customized Ads Strategies for Optimal Results.",
    },
  ];
  // col - data ---------
  const colLeftData = (
    <>
      <div className="col-1-img-div py-2 py-lg-0 py-md-0" >
        <img src={Img3} alt="hotel-img" className="img-fluid rounded-4" style={{height:"35rem"}}/>
      </div>
    </>
  );

  const ColRightData = (
    <>
      <div>
        <p className="text-justify text-white p-text-lg ff-p px-2 px-lg-0 px-md-0 c-fw-4">{ptext}</p>
        {data.map((item, i) => (
          <div className="paid-ads-content-wrap">
            <div className="row p-0 m-0">
              <div className="icon pt-2 col-1 d-flex justify-content-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM9.6 18L3.6 12L5.292 10.308L9.6 14.604L18.708 5.496L20.4 7.2L9.6 18Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="col-11">
                <h3 className="text-white h3-1 ff-p c-fw-4">{item.heading}</h3>
                <p className="text-white p-text-md  text-justify ff-p c-fw-4">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center">
          <WhiteLinkButton text="Know More" url="/contact" />
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-white text-center h2-lg ff-p c-fw-6">{heading}</h2>
      </div>
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
