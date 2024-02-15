import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import { Link } from "react-router-dom";
import Url from "../../Assests/restaurent-marketing/SVG.svg";
import Url1 from "../../Assests/restaurent-marketing/SVG (1).svg";
import Url2 from "../../Assests/restaurent-marketing/SVG (2).svg";
import Url3 from "../../Assests/restaurent-marketing/SVG (3).svg";
import Url4 from "../../Assests/restaurent-marketing/SVG (4).svg";
import Url5 from "../../Assests/restaurent-marketing/SVG (5).svg";

function Section5() {
  const data = [
    {
      url: Url,
      title: `Trusted
    Recommendation`,
      description: `Harness the power of influencer’s 
      trusted recommendations to showcase
      your restaurant’s unique offerings and
      drive customer interest.`,
    },
    {
      url: Url1,
      title: "Expand Reach",
      description: `Reach a wider audience by leveraging
    the influencer’s dedicated following,
    increasing brand exposure, and
    attracting new customers.`,
    },
    {
      url: Url2,
      title: `Engaging Content`,
      description: `Collaborate with influencer,s to create
    engaging and authentic content that
    showcases your restaurant’s ambiance,
    cuisine, and dining experience.`,
    },
    {
      url: Url3,
      title: `Unique Experiences`,
      description: `Offer exclusive experiences or tastings
    to influencer's, allowing them to share
    their firsthand experience with their
    audience and create a buzz around your
    restaurant.`,
    },
    {
      url: Url4,
      title: `Targeted Campaigns`,
      description: `Work with influencer's who align with
    your restaurant’s target audience,
    ensuring your message reaches the
    right people who are likely to be
    interested in dining at your
    establishment.`,
    },
    {
      url: Url5,
      title: `Increased
    Reservations`,
      description: `Influencer marketing can drive bookings
    and reservations, as followers are
    inspired to visit your restaurant based on
    the influencer's recommendations.`,
    },
  ];
  const leftData = (
    <div>
      <div>
        <h2 className="text-white h2-lg c-fw-7 ff-p px-2 px-lg-0">
          Why do Your Restaurant Needs Influencer Marketing?
        </h2>
      </div>
      <div>
        <p className=" px-2 px-lg-0 text-white p-text-md c-fw-4 ff-p text-justify">
          The power of influencer marketing in driving customer interest and
          boosting your restaurant’s success is increasing. Let Fielmente, The
          renowned restaurant marketing agency help you harness the influence of
          trusted social media personalities to expand your reach.
        </p>
      </div>
      <div className="d-flex justify-content-center justify-content-lg-start">
        <Link to="/contact/" className="green-btn text-d-none text-capitalize">Contact us</Link>
      </div>
    </div>
  );
  const rightData = (
    <div>
      <div className="row m-0">
        {data.map((item, i) => (
          <div
            className="col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-between gap-2 p-2 m-0"
            key={i} 
          >
            <div className="border px-2 py-3 rounded-3 card-bg-color-yellow-1" style={{minHeight:"13rem"}}>
              <div className="d-flex gap-2 p-2">
                <div>
                  <img src={item.url} className="img-fluid" alt={item.title} />
                </div>
                <div>
                  <h3 className="h3-1 ff-p c-fw-6 text-clr-gray5 text-capitalize">{item.title}</h3>
                </div>
              </div>
              <div>
                <p className="text-justify p-text-md ff-p c-fw-4 pe-1">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <TwoColumn
      Section="section-bg-clr py-lg-5  py-4"
      containerClass=""
      rowClass=""
      colClass1="col-lg-4  col-12 d-flex align-items-center justify-content-start"
      colClass2="col-lg-8  col-12 m-0 p-0"
      colLeftData={leftData}
      ColRightData={rightData}
    />
  );
}

export default Section5;
