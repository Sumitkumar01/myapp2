import React from "react";

import ScrollTop from "../../Component/ScrollTop";
import Banner from "./Banner";
import NumberCompnent from "../../Component/NumberCompnent";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Contact from "../../Component/Contact";
import Section4 from "./Section4";
import Section5 from "./Section5";
import "./hotelpage.css";
import { Helmet } from "react-helmet";
import Section3 from "./Section3";
import SeoSection from "./SeoSection";
import Section6 from "./Section6";
import NavigationBar from "../../Component/NavigationBar";
import Footer from "../../Component/Footer";
import WhatsApp from "../../chat-component/WhatsApp";
import Call from "../../chat-component/Call";
function CloudMarketingPage() {
  ScrollTop();
  const numberColClass = "col-lg-3 col-md-3 col-6";

  const data = [
    { number: "50", data: "L+", text: "revenue generated" },
    { number: "10", data: "K+", text: "booking achieved" },
    { number: "90", data: "%", text: "satisfaction rate" },
    { number: "10", data: "+", text: "years of experience" },
  ];
  return (

    <>
      <Helmet>
        <title>Best Cloud Kitchen Marketing Agency in India- Fielmente</title>
        <meta
          name="description"
          content="Fielmente cloud kitchen marketing agency in India and digitally boost your cloud kitchen success with our amazing marketing services."
        />
      </Helmet>
      <NavigationBar/>
      <main className="main_navbar">
        <Banner />
        <Section1 />
        <Section2 />
        <NumberCompnent
          containerclassName="py-2"
          rowClass="justify-content-center my-lg-5 my-md-3 my-2"
          colClass={numberColClass}
          divClass="text-center"
          span1Class="text-black"
          span2Class="text-black"
          numberData={data}
        />
        
        <Section3 />
        <SeoSection />
        <Section4 />
        <Section5 />
        <Section6 />
        <Contact />
      </main>
      <Footer/>
      <WhatsApp/>
      <Call/>
    </>
  );
}

export default CloudMarketingPage;
