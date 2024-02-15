import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Accordion from "../../Component/Accordion";
import url from "../../Assests/indus-we-serv/rich-luxury-modern-residential-apartment-hotel-tropical-resort-swimming-pool-with-blue-clear-watergreen-grass-lawn-sunny-day-outdoorsummer-recreational-vacation-egypt-seagetaway-concept 1.png";

function Section1() {
  const Section = "";
  const containerClass = "";
  const rowClass = "";
  const colClass1 =
    "col-lg-4 col-md-5 col-12 d-flex align-items-center justify-content-center justify-content-lg-start";
  const colClass2 = "col-lg-8 col-md-7 col-12 d-flex align-items-center py-3";

  const heading = "Why Your Hotel need to Go Online?";

  const text =
    "Unshackle your hotel business’s full potential online! Elevate success with India’s top hospitality consultants and the best hospitality digital marketing agency. Discover the industries we serve and seize growth today!";

  const accordionItems = [
    {
      title: "Expanding Reach",
      content: ` <ul>
    <li>
    Reach global travelers and widen your audience through our hospitality digital marketing services.
    </li>
  </ul>`,
    },
    {
      title: "Boosting Bookings",
      content: `<ul><li>
      Online presence drives more bookings, converting visitors into loyal guests.
</li>
</ul>`,
    },
    {
      title: "Competing Effectively",
      content: `<ul>
<li>
Stay ahead in the hospitality industry with cutting-edge digital marketing strategies.
</li>

</ul>`,
    },
    {
      title: "Targeted Advertising",
      content: `
      <ul>
      <li>

      Reach your ideal guests with precise targeting and personalized ads.
      </li>
      </ul>`,
    },
    {
      title: "Enhanced Guest Experience",
      content: `<ul><li>
      
      Create seamless interactions and offer convenience through online channels.
      </li></ul> 
      `,
    },
    {
      title: "Data-Driven Insights",
      content: `<ul><li>
      
      Leverage data to optimize marketing efforts and make informed business decisions.
      </li></ul>
      `,
    },
  ];
  //   col-data-----
  const ColRightData = (
    <div className="d-flex flex-column ">
      <p className="p-text-lg ff-p c-fw-4 text-justify">{text}</p>
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

export default Section1;
