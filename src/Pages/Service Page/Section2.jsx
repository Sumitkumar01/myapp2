import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img4 from "../../Assests/Marketing/hotel-receptionist-check-man-giving-key-card 1.png";
import Accordion from "../../Component/Accordion";

function Section2() {
  const Section = "";
  const containerClass = "";
  const rowClass = "px-lg-0 px-2";
  const colClass1 = "col-lg-7 col-md-7 col-12 d-flex align-items-center";
  const colClass2 =
    "col-lg-5 col-md-5 col-12 d-flex align-items-center justify-content-center";

  const accordionItems = [
    {
      title: "Expand Your Reach",
      content: ` <ul>
    <li>
    Amplify your presence and connect with a wider audience, propelling your business to new horizons.
    </li>
    
  </ul>`,
    },
    {
      title: "Increase Revenue",
      content: `<ul><li>
      Boost your earnings and achieve remarkable financial growth with Fielmente’s powerful hospitality marketing strategies.
</li>
</ul>`,
    },
    {
      title: "Stay Competitive",
      content: `<ul>
<li>
Stay ahead in the race and outshine your rivals with our cutting-edge marketing techniques tailored for your hotel.
</li>
</ul>`,
    },
    {
      title: "Build Trust and Credibility",
      content: `<ul>
<li>Establish a rock-solid reputation, earning your guests’ trust and loyalty through authentic and transparent marketing approaches.</li>
</ul>`,
    },
    {
      title: "Engage with Guests",
      content: `<ul>
<li>Forge meaningful connections and foster lasting relationships with your guests, fostering a sense of belonging and value.</li>
</ul>`,
    },
    {
      title: "Showcase Your Amenities",
      content: `<ul>
<li>Flaunt your unique offerings and entice potential guests with captivating visuals and enticing descriptions of your amenities.</li>
</ul>`,
    },
    {
      title: "Drive Direct Bookings",
      content: `<ul>
<li>Maximize profitability and take control of your bookings by steering guests to reserve directly through your platform.</li>
</ul>`,
    },
    {
      title: "Discover Hidden Gems",
      content: `<ul>
<li>Uncover untapped potential and niche markets to uncover new opportunities and diversify your revenue streams.</li>
</ul>`,
    },
  ];
  //   col-data-----
  const colLeftData = (
    <>
      <Accordion
        accordionContainerClass="accordionContainerClass w-100"
        accordionContentClass="accordionContentClass border-top"
        headingDivclassName="accordionContentClass p-2"
        h3Class="h3Class svg_icon"
        contentClass="contentClass text-black"
        items={accordionItems}
      />
    </>
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
    <div className="web-dev-section-1 my-4">
      <div className="container">
        <div className="container text-center">
          <h2 className="h2-lg ff-p c-fw-6 text-clr-gray5">
            Why do You need to Go Online?
          </h2>
        </div>
        <div className="m-auto" style={{ maxWidth: "85%" }}>
          <p className="p-text-lg ff-p c-fw-4 text-clr-scorpion text-lg-center">
            Unwrap your business’s true potential and reach new heights with the
            irresistible allure of online presence with Fielmente’s cutting-edge
            hospitality marketing services!
          </p>
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
