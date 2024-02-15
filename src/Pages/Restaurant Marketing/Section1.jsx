import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img3 from "../../Assests/resto/picture-guests-getting-key-card-hotel-1.png";
import { Link } from "react-router-dom";

function Section1() {
  const Section = "web-dev-section-1";
  const containerClass = "py-lg-5 ";
  const rowClass = "flex-column-reverse flex-lg-row flex-md-row px-2 px-lg-0";
  const colClass1 = "col-lg-5 col-md-5 col-sm-12 d-flex align-items-center justify-content-center justify-content-lg-start";
  const colClass2 = "col-lg-7 col-md-7 col-sm-12 p-2 ";
  // const heading = "Why is Social Media Marketing Important for Your Business?";

  const data = [
    {
      text:`Your restaurant is easily found on the internet?
      Potential hungry customers like what they see when they do find you online?`
    },
    {
      text:`Combining content marketing, social media, SEO, paid advertising, and online reputation
      management, we’ll make sure your restaurant not only becomes the hottest spot in your
      community and the city but that it stays that way.`
    },
  ];
  // col - data ---------
  const colLeftData = (
    <>
      <div className="col-1-img-div w-lg-100 h-lg-100">
        <img src={Img3} alt="hotel-img" />
      </div>
    </>
  );

  const ColRightData = (
    <>
     
      <div>
        <h2 className="h2-lg ff-p c-fw-6 text-gray5 text-capitalize"><u>Restaurant Marketing Company</u></h2>
        <p className="ff-p c-fw-4 p-text-lg text-clr-scorpion text-justify">Are you doing everything you can to make sure:</p>
      </div>
      <div>
        {data.map((item, i) => (
          <div className="social-media-content-wrap" key={i}>
            <p className="ff-p c-fw-4 p-text-lg text-clr-scorpion text-justify">{item.text}</p>
          </div>
        ))}
        <div className="">
          <Link to="/contact/" className="border-bottom text-black fs-4">
            Contact us
          </Link>
        </div>
      </div>
    </>
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

export default Section1;
