import React from "react";
import bgIMg from "../../Assests/restaurent-marketing/Group-520.png";

import img1 from "../../Assests/restaurent-marketing/Group-538.png.png";
import img2 from "../../Assests/restaurent-marketing/Vector.png.png";
import img3 from "../../Assests/restaurent-marketing/Group.png.png";
import img4 from "../../Assests/restaurent-marketing/Group-539.png.png";
import img5 from "../../Assests/restaurent-marketing/Group-1.png.png";
import img6 from "../../Assests/restaurent-marketing/Group-2.png.png";
// import { motion } from "framer-motion";

function Section6() {
  const background = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${bgIMg})`,
    // height: "min(100%,916px)",
  };
  const data = [
    {
      url: img1,
      title: `Track and Optimize`,
      description: `Monitor the performance of your ads in real
      time, making data-driven adjustments to
      maximize their effectiveness and drive more
      orders.`,
    },
    {
      url: img2,
      title: `Enhanced Visibility`,
      description: `Increase your cloud kitchen’s visibility by
      appearing at the top of relevant Google
      search results, capturing the attention of
      hungry customers.`,
    },
    {
      url: img3,
      title: `Targeted Advertising`,
      description: `Reach customers actively searching for food
      delivery options in your area, targeting
      specific keywords and locations to maximize
      relevance.`,
    },
    {
      url: img4,
      title: `Cost-Effective Results`,
      description: `Set your budget and only pay for clicks or
    conversions, ensuring you get a return on
    your investment with measurable results.`,
    },
    {
      url: img5,
      title: `Outrank Competitors`,
      description: `Gain a competitive edge by appearing above
    organic search results and outranking
    competing restaurants in paid search ads.`,
    },
    {
      url: img6,
      title: `Local Targeting`,
      description: `Reach customers in your immediate vicinity
    with location-based targeting, ensuring you
    attract diners who are most likely to visit your
    restaurant.`,
    },
  ];
  return (
    <section style={background}>
      <div
        className="w-100 h-100 py-lg-5 py-4 d-flex flex-column justify-content-center align-items-center "
        style={{ background: "rgba(0,0,0,.5)" }}
      >
        <div className="container">
          <h2 className="text-white text-center h2-lg c-fw-7 ff-p">
            Why Cloud Kithen Needs Google Ads?
          </h2>
        </div>

        <div className="container">
          <div className="row">
            {data.map((item, i) => (
              <div className="col-lg-4 col-md-6 col-12 p-1" key={i}>
                <div
                  className="d-flex flex-column justify-content-center align-items-center px-2 py-3 border rounded-3"
                  style={{ background: "rgba(225,225,225,.8)", minHeight:'15rem'}}
                >
                  <div>
                    <img
                      src={item.url}
                      alt={item.title}
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <div>
                    <h3 className="h3-1 ff-p c-fw-6 text-clr-gray5 text-capitalize">
                      {item.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-justify p-text-md c-fw-4 ff-p m-0">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section6;
