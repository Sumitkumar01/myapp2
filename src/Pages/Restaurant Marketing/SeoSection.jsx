import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import ImgUrl from "../../Assests/restaurent-marketing/odessa-hotel-sea-port-ukraine 3.png";
import img1 from "../../Assests/restaurent-marketing/LinkSVG.svg";
import img2 from "../../Assests/restaurent-marketing/LinkSVG (1).svg";
import img3 from "../../Assests/restaurent-marketing/LinkSVG (2).svg";
import img4 from "../../Assests/restaurent-marketing/LinkSVG (3).svg";
import img5 from "../../Assests/restaurent-marketing/LinkSVG (4).svg";
import img6 from "../../Assests/restaurent-marketing/LinkSVG (5).svg";
import BlueLinkButton from "../../Component/BlueLinkButton";
// import { motion } from "framer-motion";

function SeoSection() {
  const heading = `Why do Your Restaurant Needs SEO?`;

  const pera = `As digitalization is approaching at a faster pace, restaurant marketing is essential for attracting customers and standing out from the competition. Let our restaurant marketing agency help you optimize your online presence for the following reasons:`;

  const data = [
    {
      url: img1,
      title: "Boost Visibility",
      description: `Improve your restaurant's online visibility, making
    it easier for customers to find you when
    searching for dining options.`,
    },
    {
      url: img2,
      title: `Targeted Traffic`,
      description: `Drive quality, relevant traffic to your website by
    optimizing for keywords related to your cuisine,
    location, and specialties.`,
    },
    {
      url: img3,
      title: `Local SEO`,
      description: `Optimize your restaurant's online presence
    for local searches, attracting customers in
    your immediate vicinity.`,
    },
    {
      url: img4,
      title: `Highlight Your Menu`,
      description: `Showcase your delectable dishes and
    unique offerings through optimized web
    pages, enticing customers to visit your
    restaurant.`,
    },
    {
      url: img5,
      title: `Online Reviews and Reputation
    Management`,
      description: `Manage your online reputation by monitoring and
    responding to customer reviews, fostering trust
    and positive perception.`,
    },
    {
      url: img6,
      title: `Drive Reservations and Foot Traffic`,
      description: `Optimize your website to drive online reservations
    and increase foot traffic to your restaurant,
    maximizing bookings and revenue.`,
    },
  ];

  const leftData = (
    <div>
      <div>
        <h2 className="h2-lg ff-p c-fw-6 text-gray5">{heading}</h2>
      </div>
      <div>
        <p className="p-text-md ff-p c-fw-4 text-justify">{pera}</p>
      </div>
      <div className="row p-0 m-0">
        {data.map((item, i) => (
          <div className="col-lg-6 col-md-6 col-12" key={i}>
            <div className="row">
              <div className="col-lg-2 px-1 py-0 d-flex">
                <img
                  src={item.url}
                  className="img-fluid mt-1"
                  alt={item.title}
                  style={{ width: "4rem", height: "4rem" }}
                />
              </div>
              <div className="col-lg-10 px-1 py-1">
                <h3 className="h3-1 ff-p c-fw-6 text-clr-gray5 mb-0 text-capitalize">
                  {item.title}
                </h3>
                <p className="p-text-md ff-p c-fw-4 text-justify mb-o">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  const rightData = (
    <div className="pb-lg-0 pb-3">
      <img src={ImgUrl} className="img-fluid" alt="Hotel-img" />
    </div>
  );
  return (
    <section>
      <TwoColumn
        Section=""
        containerClass=""
        rowClass="px-3 px-lg-0 flex-lg-row flex-column-reverse"
        colClass1="col-lg-8 col-12 p-0"
        colClass2="col-lg-4 col-12 d-flex align-items-center justify-content-lg-end justify-content-center"
        colLeftData={leftData}
        ColRightData={rightData}
      />
      <div className="text-center py-4">
        <BlueLinkButton
          className="px-5 text-capitalize rounded-5"
          url="/contact/"
          text="contact us"
        />
      </div>
    </section>
  );
}

export default SeoSection;
