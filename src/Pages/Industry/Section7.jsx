import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import url from "../../Assests/indus-we-serv/coats-hanging-rack.png"
import NumberCompnent from "../../Component/NumberCompnent";

function Section7() {
  const heading = `Our Expertise : Your Tremendous Business Growth Awaits`;

  const data = [
    {
      text: `Click the true potential of your business as thriving destinations with our unmatched hospitality digital marketing solutions.`,
    },
    {
      text: `Tantalize taste buds and elevate your business’s success with Fielmente – The premier Hospitality marketing agency in the industries we serve!`,
    },
  ];
  const numberData = [
    { number: "150", data: "+", text: "Business partners" },
    { number: "72", data: "%", text: "Business growth" },
  ];
  const numberColClass = "col-6";

  const Section = "web-dev-secton-4";
  const containerClass = "";
  const rowClass = "";
  const colClass1 = "col-lg-8 col-md-7 col-12";
  const colClass2 = "col-lg-4 col-md-5 col-12 d-flex align-items-center justify-content-end";
  const colLeftData = (
    <>
      <div>
        <h2 className="text-white c-fw-6 ff-p h2-lg">{heading}</h2>
        {data.map((item, i) => (
          <p className="text-white c-fw-4 ff-p fs-sm" key={i}>{item.text}</p>
        ))}
      </div>
      <div>
        <NumberCompnent containerclassName="py-2"
          rowClass="justify-content-center my-lg-5 my-md-3 my-2"
          colClass={numberColClass}
          divClass="text-center"
          span1Class="text-warning"
          span2Class="text-white"
          numberData={numberData}
          />
      </div>
    </>
  );
  const ColRightData = (
    <>
      <div>
        <img src={url} alt="" />
      </div>
    </>
  );
  // const styleColLeft=""
  // const styleColRight=""
  return (
    <div
      className=" py-lg-5 py-3"
      style={{ background: "#0F110F" }}
    >
      <TwoColumn
        Section={Section}
        containerClass={containerClass}
        rowClass={rowClass}
        colClass1={colClass1}
        colClass2={colClass2}
        colLeftData={colLeftData}
        ColRightData={ColRightData}
        // styleColLeft={}
        // styleColRight={}
      />
    </div>
  );
}

export default Section7;
