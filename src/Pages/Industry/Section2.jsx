import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img4 from "../../Assests/indus-we-serv/popular-val-s-restaurant-freret-street-shade-palm-tree-during-summer-day 1.png";
import Accordion from "../../Component/Accordion";

function Section2() {
  const Section = "";
  const containerClass = "";
  const rowClass = "flex-column-reverse flex-lg-row flex-md-row";
  const colClass1 = "col-lg-8 col-md-7 col-12 d-flex align-items-center";
  const colClass2 =
    "col-lg-4 col-md-5 col-12 d-flex align-items-center justify-content-center justify-content-lg-end";

  const accordionItems = [
    {
      title: "Expanded Customer Base",
      content: ` <ul>
    <li>Tap into a wider audience pool by going online with our hospitality digital marketing services.</li>
    
  </ul>`,
    },
    {
      title: "Drive Online Orders",
      content: `<ul><li>
      Boost sales with a robust online ordering system and targeted promotions.
</li>
</ul>`,
    },
    {
      title: "Stay Competitive",
      content: `<ul>
<li>
Stand out in the industry by embracing digital channels for your restaurant.
</li>

</ul>`,
    },
    {
      title: "Enhanced Visibility",
      content: `<ul>
<li>Increase brand visibility and attract more local customers through digital marketing strategies.</li>

</ul>`,
    },
    {
      title: "Engage with Customers",
      content: `<ul>
<li>Connect with diners through social media and personalized interactions for lasting loyalty.</li>

</ul>`,
    },
    {
      title: "Insights for Growth",
      content: `<ul>
<li>Gain valuable data-driven insights to optimize operations and improve customer experiences.</li>

</ul>`,
    },
  ];
  //   col-data-----
  const colLeftData = (
    <div className="d-flex flex-column">
      <div>
        <p className="p-text-lg ff-p c-fw-4 text-justify">
          Take your Restaurant to new heights! Partner with India’s top
          hospitality consultants and premier hospitality digital marketing
          agency. Elevate your brand presence and conquer new markets today!
        </p>
      </div>
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
  const ColRightData = (
    <div className="web-dev-section-2-img mt-3 mt-lg-0 mt-md-0">
      <img
        src={Img4}
        className="img-fluid"
        alt="happy-young-receptionist-modern-hotel"
      />
    </div>
  );

  return (
    <div className="web-dev-section-1 my-lg-5 my-md-3 my-1">
      <div className="container">
        <div className="container text-center">
          <h2 className="h2-lg ff-p c-fw-6 text-clr-gray5">
            Why Your Restaurant need to Go Online?
          </h2>
        </div>
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

export default Section2;
