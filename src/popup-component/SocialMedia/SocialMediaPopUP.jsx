import React from "react";
import "../popup-styles/popup-style.css";
import "./social-media-pop-up.css";
import cancelBtn from "../../Assests/pop-up-img/Vector.svg";
import checkBtn from "../../Assests/pop-up-img/right-tick.svg";
import Img from "../../Assests/pop-up-img/young-successful-hotel-staff.png";
import { Link } from "react-router-dom";

function SocialMediaPopUP({ setShow }) {
  const listData = [
    { text: "Reach more people." },
    { text: "Improve direct Guest Engagement." },
    { text: "Showcase Features through attractive content." },
  ];
  return (
    <section className="pop_up overflow-y-auto py-10">
      <div className="social_media_pop_up-container">
        <div className="background_img_class social_media_pop_up-img  d-flex justify-content-end position-relative">
          <img src={Img} className="card-img-top" alt="hero" />
          <button
            className="bg-transparent border-0 social_media_cancel_btn"
            onClick={() => setShow(false)}
          >
            <img src={cancelBtn} className="" alt="icon" />
          </button>
        </div>
        <div className="d-flex justify-justify-content-evenly align-items-center  flex-column py-lg-4 px-lg-5 p-md-4 p-3">
          <div>
            <h2 className="pop_up_heading c-fw-5 clr_dark_black text-center">
              <strong className="c-fw-7">55%</strong> of travelers like a
              hotel’s <span className="c-fw-6">Facebook page</span> to receive
              more information about the property.
            </h2>
            <p className="ff-p c-fw-4 text-center pop_up-content_text">
              Hotels with a better content strategy, videos and images receive
              138% more engagement and are 225% more likely to get bookings. 
            </p>
          </div>
          <div>
            <div>
              <h3 className="ff-p c-fw-6 clr_dark_black text-center pop_up-content_text px-3">
                Join Fielmente, India's Leading Hospitality Marketing Agency,
                and let us build you an unforgettable social dominance. 
              </h3>
            </div>
            <div className="d-flex justify-content-center w-100">
              <ul className="p-0">
                {listData.map((item, i) => (
                  <li
                    className="d-flex align-items-lg-center align-items-md-center pop_up-content_text gap-1 clr_dark_black"
                    key={i}
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "1rem",
                        height: "1rem",
                      }}
                    >
                      {" "}
                      <img
                        src={checkBtn}
                        className="filter-invert"
                        alt="icon"
                      />{" "}
                    </div>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/contact/"
              className="social_media_pop_up-btn btn-active text-d-none"
            >
              Get a Free Brand Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMediaPopUP;
