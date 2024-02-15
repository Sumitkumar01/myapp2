import React from "react";
import "./homePage_pop_up.css";
import "../popup-styles/popup-style.css";
import { Link } from "react-router-dom";
import Img from "../../Assests/pop-up-img/young-successful-hotel-staff.png";
import cancelBtn from "../../Assests/pop-up-img/Vector.svg";
import checkBtn from "../../Assests/pop-up-img/right-tick.svg";

function HomePagePopUP({ setShow }) {
  const listData = [
    { text: "Hotel Website Development in 1 Min." },
    { text: "Boosting Direct Bookings." },
    { text: "Reducing dependency on OTAs." },
    { text: "Improving visibility through social media, SEO and Google Ads." },
  ];
  return (
    <section className="pop_up overflow-y-auto py-10">
      <div className="home_page_pop_up-container">
        <div className="background_img_class home_page_pop_up-img  d-flex justify-content-end position-relative">
          <img src={Img} className="card-img-top" alt="hero" />
          <button
            className="bg-transparent border-0 home_page_cancel_btn"
            onClick={() => setShow(false)}
          >
            <img src={cancelBtn} className="" alt="icon" />
          </button>
        </div>
        <div className="d-flex justify-justify-content-evenly align-items-center  flex-column py-lg-4 px-lg-5 p-md-4 p-3">
          <div>
            <h2 className="pop_up_heading c-fw-5 clr_dark_black text-center">
              <strong className="c-fw-7">52%</strong> of travelers check hotel
              social media before booking.{" "}
              <strong className="c-fw-7">Want an Engaging Presence?</strong>
            </h2>
            <p className="ff-p c-fw-4 text-center pop_up-content_text">
              Hotels pay up to 25% of their average costs to online operators
              for increased bookings. Fielmente does it for much less.
            </p>
          </div>
          <div>
            <div>
              <h3 className="ff-p c-fw-6 clr_dark_black text-center pop_up-content_text px-3">
                As India’s leading Hotel Marketing Company, we are formed to
                simplify the life of Hotel Owners by :
              </h3>
            </div>
            <div className="d-flex justify-content-center w-100">
              <ul className="p-0">
                {listData.map((item, i) => (
                  <li
                    className="d-flex align-items-lg-center align-items-md-center justify-content-start pop_up-content_text gap-1 clr_dark_black"
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
              className="home_page_pop_up-btn btn-active text-d-none"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePagePopUP;
