import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img3 from "../../Assests/social-media/miami-usa-april-15-2021-park-central-hotel-art-deco-district-ocean-drive-florida.png";
import WhiteLinkButton from "../../Component/WhiteLinkButton";

function Section1() {
  const Section = "social-media-section-1";
  const containerClass = "py-lg-5 ";
  const rowClass = "px-2 px-lg-0";
  const colClass1 = "col-lg-5 col-md-5 col-sm-12 d-flex align-items-center justify-content-center";
  const colClass2 = "col-lg-7 col-md-7 col-sm-12 p-2";
  const heading = "Why is Social Media Marketing Important for Your Business?";
  const ptext =
    "Embrace the power of social media in the digital era with Fielmente, the leading hospitality social media marketing agency. Connect with your target audience, showcase your brand’s personality, and soar to new heights in the restaurant or hotel industry. With billions of active users on platforms like Facebook, Twitter, and Instagram, social media can be a game-changer for your business.";

  const data = [
    {
      heading: "Social Media Calendar",
      text: "A well-planned content calendar to make sure that your posts are always interesting and consistent.",
    },
    {
      heading: "Content Creation",
      text: "Content Creation means making content that is compelling and interesting and sticks with your audience.",
    },
    {
      heading: "Social Media Campaigns",
      text: "Campaigns that are planned strategically to get the most engagement and sales.",
    },
    {
      heading: "Facebook, Twitter & Linkedin Ads",
      text: "Targeted ads can help you reach more people and raise brand awareness, visibility of your brand, reach professionals and people who make decisions.",
    },
  ];
  // col - data ---------
  const colLeftData = (
    <>
      <div className="col-1-img-div" >
        <img src={Img3} className="img-fluid rounded-4" alt="hotel-img" style={{height:"35rem"}}/>
      </div>
    </>
  );

  const ColRightData = (
    <>
      <div>
        <p className="text-justify text-white p-text-lg ff-p c-fw-4 mb-1">{ptext}</p>
        {data.map((item, i) => (
          <div className="social-media-content-wrap">
            <div className="row p-0 m-0">
              <div className="icon px-0 pt-2 col-1 d-flex justify-content-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM9.6 18L3.6 12L5.292 10.308L9.6 14.604L18.708 5.496L20.4 7.2L9.6 18Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="col-11">
                <h3 className="text-white h3-1 ff-p c-fw-6 mb-1">{item.heading}</h3>
                <p className="text-white fs-6 text-justify ff-p c-fw-4 mb-1">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center mt-lg-5 mt-2">
          <WhiteLinkButton text="Know More" url="/contact/" />
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="container mt-lg-4 mt-md-2 mt-1 c-container-60rem">
        <h2 className="c-text-white text-center h2-lg c-fw-6 ff-p">{heading}</h2>
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
    </>
  );
}

export default Section1;
