import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Accordion from "../../Component/Accordion";
import url from "../../Assests/indus-we-serv/three-chefs-are-restaurant-kitchen-one-them-is-wearing-white-apron 1.png";
function Section3() {
  const Section = "";
  const containerClass = "";
  const rowClass = "";
  const colClass1 =
    "col-lg-4 col-md-5 col-12 d-flex align-items-center justify-content-center justify-content-lg-start";
  const colClass2 = "col-lg-8 col-md-7 col-12 d-flex align-items-center";

  const heading = "Why Your Cloud Kitchen need to Go Online?";

  const text =
    "Catapult your cloud kitchen to the top! Partner with India’s foremost hospitality consultants and the ultimate hospitality digital marketing agency. Check out the industries we serve and taste unrivaled success today!";

  const accordionItems = [
    {
      title: "Tap into Wider Audience",
      content: ` <ul>
    <li>Expand your customer base beyond local reach with our digital marketing services for cloud kitchens.</li>
   
  </ul>`,
    },
    {
      title: "Enhanced Visibility",
      content: `<ul><li>Online presence drives higher visibility, attracting hungry customers to your cloud kitchen.</li>

</ul>`,
    },
    {
      title: "Seamless Online Ordering",
      content: `<ul>
<li>Embrace convenience with a user-friendly online ordering system for your cloud kitchen.
</li>

</ul>`,
    },
    {
      title: "Stay Competitive",
      content: `<ul>
<li>Stay ahead of the curve with cutting-edge digital marketing strategies tailored for cloud kitchens.</li>

</ul>`,
    },
    {
      title: "Targeted Promotions",
      content: `<ul>
<li>Reach your ideal diners with targeted promotions and personalized marketing campaigns.</li>

</ul>`,
    },
    {
      title: "Optimize Operations",
      content: `<ul>
<li>Leverage data insights to optimize operations and elevate the efficiency of your cloud kitchen.
</li>

</ul>`,
    },
  ];
  //   col-data-----
  const ColRightData = (
    <div className="d-flex flex-column">
      <p className="p-text-lg c-fw-4 ff-p text-justify">{text}</p>
      <Accordion
        accordionContainerClass="accordionContainerClass w-100"
        accordionContentClass="accordionContentClass border-top"
        headingDivclassName="accordionContentClass p-2"
        h3Class="h3Class svg_icon"
        contentClass="contentClass text-black"
        items={accordionItems}
      />
    </div>
  );
  const colLeftData = (
    <div className="web-dev-section-2-img mt-3 mt-lg-0 mt-md-0">
      <img
        src={url}
        className="img-fluid"
        alt="happy-young-receptionist-modern-hotel"
      />
    </div>
  );

  return (
    <div className="web-dev-section-1 my-lg-5 my-md-3 my-1 container">
      <div className="container mt-4">
        <h2 className="text-center h2-lg ff-p c-fw-6">{heading}</h2>
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
    </div>
  );
}

export default Section3;
