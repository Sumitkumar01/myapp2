import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../Assests/Images/cropped-fielmente-logo.webp";


function RecentBlogs() {

  const blogsData = [
    {
      title: "How to Reply to Google business Profile and Facebook Feedback",
      month: "October ",
      date: "12, 2023",
      desc: `In recent times, opinions and reviews have become crucial for`,
      link:'/respond-to-facebook-google-reviews/'
    },
    {
      title: "Why do you need Fielmente Hospitality Marketing Agency?",
      month: "October ",
      date: "11, 2023",
      desc: `A hospitality digital marketing agency brings its clients revenue with`,
      link:'/hospitality-consultants-in-india/'
    },
    {
      title:
        "How to start Cloud Kitchen in India-Ultimate Guide to open the Cloud Kitchen",
      month: "August ",
      date: "26, 2023",
      desc: `Why is opening a cloud kitchen a good idea? Here’s`,
      link:'/how-to-start-cloud-kitchen-in-india-ultimate-guide-to-open-the-cloud-kitchen/'
    },
    
  ];
  return (
    <div className="col-lg-3 col-md-3 col-12 position-sticky top-0 p-0">
      <aside className="w-100 p-2">
        <div className="py-3"></div>
        <h2 className="text-uppercase c-fw-7 fs-3">Recent Blogs</h2>

        {blogsData.map((item, i) => (
          <div className="py-3" key={i}>
            <div>
              <Link to={item.link} className="ff-p c-fw-6 fs-5 mb-1 text-d-none text-black">{item.title}</Link>
            </div>
            <small className="m-0">
              {item.month} {item.date}
            </small>
            <div>
              <p className="text-black c-fw-4 ff-p">{item.desc}</p>
            </div>
          </div>
        ))}

        {/* -------------------------------------************------------------------------------------ */}
        {/* -------------------------------------contact form------------------------------------------ */}
        {/* -------------------------------------************------------------------------------------ */}

        <div className="p-2">
          <img src={Logo} className="img-fluid" alt="log" />
        </div>

        <form className="p-1 d-flex flex-column align-items-center gap-2">
          <div className="w-100">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="w-100">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="w-100">
            <input
              type="number"
              className="form-control"
              placeholder="Phone No"
            />
          </div>
          <div className="w-100">
            <input
              type="text"
              className="form-control"
              placeholder="Business"
            />
          </div>
          <div className="w-100 px-1">
            <button
              type="button"
              className="w-100 py-2 border-0 btn-active rounded-3 hover-white text-capitalize fs-5 c-fw-6 text_white bg_light_blue"
            >
              get a consultation
            </button>
          </div>
        </form>

        {/* -------------------------------------************------------------------------------------ */}
        {/* -------------------------------------contact form------------------------------------------ */}
        {/* -------------------------------------************------------------------------------------ */}
      </aside>
    </div>
  );
}

export default RecentBlogs;
