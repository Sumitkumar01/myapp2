import React from "react";

import NavigationBar from "../../Component/NavigationBar";
import Footer from "../../Component/Footer";
import Call from "../../chat-component/Call";
import WhatsApp from "../../chat-component/WhatsApp";
import { Link, useParams } from "react-router-dom";

// import banner from "../../Assests/blog/asset-7.png";
import RecentBlogs from "./blog-common-components/RecentBlogs";
import LatestPosts from "./blog-common-components/LatestPosts";
import parse from "html-react-parser";

import { cardData } from "./Blogs";
import ScrollTop from "../../Component/ScrollTop";

function BlogDetails6() {
  ScrollTop();

  const d = useParams();
const blogdata=cardData.filter((item,i)=>(item.link===d.name))

  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <section className="py-lg-5 py-4">
          <div className="container">
            <div className="row align-items-lg-start ">
              <div className="col-lg-9 col-md-9 col-12 p-0">
                <div className="blog_details_banner">
                  <div className="container">
                    <p className="text-center text-black c-fw-4 fs-6 px-1">
                      <span>
                        <Link
                          to="/"
                          className="text-d-none"
                          style={{ color: "#6664e4" }}
                        >
                          Home
                        </Link>
                        <small className="px-1">&gt;&gt;</small>
                      </span>
                      <span>
                        <Link
                          to="/Blog"
                          className="text-d-none"
                          style={{ color: "#6664e4" }}
                        >
                          Blogs
                        </Link>
                        <small className="px-1">&gt;&gt;</small>
                      </span>
                      {blogdata[0].title}
                    </p>
                  </div>
                  <div className="container">
                    <h1 className="fs-2 c-fw-8 ff-m text-center">
                      {blogdata[0].title}
                    </h1>
                  </div>
                  <div className="container">
                    <img src={blogdata[0].url} loading="lazy" alt="banner" className="img-fluid py-3" />
                  </div>

                  {blogdata[0].addimg && (
                    <div className="px-2 py-3">
                      <img
                        src={blogdata[0].addimg}
                        className="img-fluid "
                        alt="addimg"
                      />
                    </div>
                  )}
                </div>
                <div className="container blog-d-container px-lg-2 m-0 px-3">
                  {parse(blogdata[0].data)}
                </div>
              </div>

              {/* -------------------------------------************------------------------------------------ */}
              {/* -------------------------------------RECENT BLOGS & contact form------------------------------------------ */}
              {/* -------------------------------------************------------------------------------------ */}

              <RecentBlogs />

              {/* -------------------------------------************------------------------------------------ */}
              {/* -------------------------------------RECENT BLOGS & contact form------------------------------------------ */}
              {/* -------------------------------------************------------------------------------------ */}
            </div>
          </div>
        </section>

        {/* -------------------------------------************------------------------------------------ */}
        {/* -------------------------------------Latest Posts------------------------------------------ */}
        {/* -------------------------------------************------------------------------------------ */}
        <LatestPosts />

        {/* -------------------------------------************------------------------------------------ */}
        {/* -------------------------------------Latest Posts------------------------------------------ */}
        {/* -------------------------------------************------------------------------------------ */}
      </main>
      <Footer />
      <Call />
      <WhatsApp />
    </>
  );
}

export default BlogDetails6;
