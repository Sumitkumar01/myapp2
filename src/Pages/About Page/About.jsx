import React from "react";
import AboutUSBanner from "./AboutUSBanner";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Contact from "../../Component/Contact";
import { Helmet } from "react-helmet";
import NavigationBar from "../../Component/NavigationBar";
import Footer from "../../Component/Footer";
import WhatsApp from "../../chat-component/WhatsApp";
import Call from "../../chat-component/Call";
import ScrollTop from "../../Component/ScrollTop";

const About = () => {
  ScrollTop();
  return (
    <>
      <Helmet>
        <title>
          Fielmente Agency | Best Hospitality Marketing Consultants in India
        </title>
        <meta
          name="description"
          content="About Fielmente, the expert F&amp;B and hospitality marketing consultant. Unveil our transformative expertise &amp; experience in your businesses"
        />
      </Helmet>
      <NavigationBar />
      <div className="main_navbar"> 
        <AboutUSBanner />
        <Section1 />
        <Section2 />
        <Contact />
        <Footer />
        <WhatsApp />
        <Call />
      </div>
    </>
  );
};

export default About;
