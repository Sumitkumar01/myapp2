import React from "react";
import "../popup-styles/popup-style.css";
import "./influencerMarketing.css";
import Img from '../../Assests/pop-up-img/waitress-holding-plate-with-cakes.png'
import cancelBtn from "../../Assests/pop-up-img/Vector.svg";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function InfluencerMarketing({ setShow }) {
  const data = [
    { text: "Improve Social Presence" },
    { text: "Generate Authentic Leads" },
    { text: "Increase Direct Bookings" },
    { text: "Boost hotel recommendation to millions of users" },
  ];
  return (
    <section className="d-flex justify-content-center align-items-center pop_up overflow-y-auto py-10 ">
      <div className="influencer_marketing-container">
        <div className="influencer_marketing-content d-flex">
          <button
            className="mob_cancel_btn position-absolute border-0 d-block d-sm-block d-md-none d-lg-none"
            onClick={() => setShow(false)}
          >
            <img src={cancelBtn} alt="cancelBtn" />
          </button>
          <div
            className="left_section-img_div"
            // style={{ backgroundImage: `url(${Img})` }}
          >
            <img src={Img} alt="avatar" className="img-fluid h-100" />
          </div>
          <div className="right_section-content-container position-relative d-flex flex-column justify-content-evenly p-xl-5 py-lg-4 px-lg-5 p-md-4 px-3 py-2">
            <button
              className="cancel_btn position-absolute border-0"
              onClick={() => setShow(false)}
            >
              <img src={cancelBtn} alt="cancelBtn" />
            </button>
            <div>
              <h2 className="c-fw-7 pop_up_heading">
                Are you looking to 4x your social validation?
              </h2>
              <p className="c-fw-4 pop_up-content_text clr_text_gray clr_text_blue_dark">
                Travel Influencer's with more than <b>100K</b> followers on
                instagram get almost 2.5x likes and 10% shares on every
                collaboration post.
              </p>
            </div>
            <div>
              <p className="pop_up-content_text c-fw-4 clr_text_gray">
                Let influential voices build authentic and trusted
                recommendations for your hotel. Trust Fielmente, your leading
                hotel marketing agency to :
              </p>
              <div className="row m-0 p-0">
                {data.map((item, i) => (
                  <div className="col-6 p-0" key={i}>
                    <p className="pop_up-content_text clr_text_gray c-fw-4 d-inline-flex align-content-center justify-content-center">
                      <FaCheckCircle className="clr_text_blue_dark me-1" />{" "}
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center w-100">
              <Link
                to="/contact/"
                className="influencer_marketing-button btn_active text-d-none c-fw-6"
              >
                Connect me with an influencer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfluencerMarketing;
