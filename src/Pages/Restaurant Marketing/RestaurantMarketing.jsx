import React from "react";
import { Helmet } from "react-helmet";

import Banner from "./Banner";
import NumberCompnent from "../../Component/NumberCompnent";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Contact from "../../Component/Contact";
import Section4 from "./Section4";
import Section5 from "./Section5";
import "./hotelpage.css";
import Section3 from "./Section3";
import SeoSection from "./SeoSection";
import Section6 from "./Section6";
import NavigationBar from "../../Component/NavigationBar";
import Footer from "../../Component/Footer";
import WhatsApp from "../../chat-component/WhatsApp";
import Call from "../../chat-component/Call";
import ScrollTop from "../../Component/ScrollTop";

const RestaurantMarketing = () => {
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
        <title>
          Restaurant Marketing Agency India | Restaurant Marketing Company
        </title>
        <meta
          name="description"
          content="Looking for your restaurant marketing success? Fielmente is the leading restaurant marketing agency in India and boosting your restaurant's digital presence. Contact us!"
        />
      </Helmet>
      <NavigationBar />
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
        <Footer />
        <WhatsApp />
        <Call />
      </main>
    </>
  );
};

export default RestaurantMarketing;
