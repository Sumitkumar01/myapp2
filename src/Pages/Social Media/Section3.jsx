import React from "react";
import WorkCard from "../../Component/WorkCard";
import Img1 from "../../Assests/social-media/happy-elegant-professional-hotel-staff-worker-standing-check-reception-desk-close-up-portrait-cheerful-smiling-bellhop-employee-standing-by-baggage-trolley-travel-resort-lobby.png";
import Img2 from "../../Assests/social-media/happy-young-elegant-worker-contemporary-hotel-using-tablet-while-standing-against-staircase-looking-you-inside-lounge.png";
import Img3 from "../../Assests/social-media/hotel-receptionist-check-man-giving-key-card 3.png";

function Section3() {
  const heading = "Why Do Brands Choose Fielmente for SMM?";
  const peraText =
    "Leading the way as the go-to hospitality social media marketing agency, brands choose Fielmente for their Social Media Management needs because:";

  const data = [
    {
      color: "#E9D175",
      heading: "Personalized Content",
      description:
        "We craft social media content that resonates with your audience, creating meaningful connections that speak directly to them.",
      url: Img1,
    },
    {
      color: "#9896FF",
      heading: "Strategic Planning",
      description:
        "Our social media marketing experts strategically plan and schedule posts, ensuring engaging content that captivates without overwhelming your audience.",
      url: Img2,
    },
    {
      color: "#EEEEEE",
      heading: "Impactful Campaigns",
      description:
        "As a hospitality social media marketing agency, our campaigns reach a vast audience, eliciting direct customer feedback, which sets us apart from the competition.",
      url: Img3,
    },
  ];
  return (
    <>
      <div className="container web-dev-section-3 my-4 p-2 ">
        <div className="container text-center">
          <h2 className="text-white h2-lg ff-p c-fw-6">{heading}</h2>
        </div>
        <div className="container text-center  p-0">
          <p
            className="text-white p-text-lg ff-p c-fw-4 text-justify px-2 px-lg-0"
            style={{ wordSpacing: "-0.05rem" }}
          >
            {peraText}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="work_div">
          {data.map((item, i) => (
            <WorkCard
              keys={i}
              heading={item.heading}
              description={item.description}
              imageUrl={item.url}
              backgroundColor={item.color}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Section3;
