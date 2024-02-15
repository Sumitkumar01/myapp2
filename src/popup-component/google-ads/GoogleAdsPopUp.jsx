import React from "react";
import "./google_ads.css";
import "../popup-styles/popup-style.css";
import { Link } from "react-router-dom";
import Img from "../../Assests/pop-up-img/we-serve-finest-desserts.png";
import cancelBtn from "../../Assests/pop-up-img/Vector.svg";
import checkBtn from "../../Assests/pop-up-img/right-tick.svg";

function GoogleAdsPopUp({ setShow }) {
  const listData = [
    { text: "Real-time Pricing." },
    { text: "Increase Direct Traffic" },
    { text: "Less booking commission than OTAs." },
    { text: "GHA cancellation - 13% < OTA Cancellation - 20% to 40%." },
  ];
  return (
    <section className="pop_up overflow-y-auto py-10">
      <div className="google_ads_pop_up-container">
        <div className="background_img_class google_ads_pop_up-img  d-flex justify-content-end position-relative">
          <img src={Img} className="card-img-top" alt="hero" />
          <button
            className="bg-transparent border-0 google_ads_cancel_btn"
            onClick={() => setShow(false)}
          >
            <img src={cancelBtn} className="" alt="icon" />
          </button>
        </div>
        <div className="d-flex justify-justify-content-evenly align-items-center  flex-column py-lg-4 px-lg-5 p-md-4 p-3">
          <div>
            <h2 className="pop_up_heading c-fw-5 clr_dark_black text-center">
              <strong className="c-fw-7">93%</strong> of travelers chooses a
              hotel based on <strong className="c-fw-7">Google’s</strong>{" "}
              recommendation.
            </h2>
            <p className="ff-p c-fw-4 text-center pop_up-content_text">
              Google’s ranking will result in the difference between your Hotel
              making or losing money. 
            </p>
          </div>
          <div>
            <div>
              <h3 className="ff-p c-fw-6 clr_dark_black text-center pop_up-content_text px-3">
                Improve your lead generation Marketing with Fielmente's Google
                Hotel Ads Expertise. 
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
              className="google_ads_pop_up-btn btn-active text-d-none"
            >
              Get a Free Brand Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoogleAdsPopUp;
