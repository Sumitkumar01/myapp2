import React from "react";
import Banner from "./Banner";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Contact from "../../Component/Contact";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import "./Industry.css";
import NavigationBar from "../../Component/NavigationBar";
import Footer from "../../Component/Footer";
import WhatsApp from "../../chat-component/WhatsApp";
import Call from "../../chat-component/Call";
import ScrollTop from "../../Component/ScrollTop";
import { Helmet } from "react-helmet";

const Industry = () => {
  ScrollTop();
  return (
    <div className="main_navbar">
      <Helmet>
        <title>
          Fielmente Marketing Agency - Industries We Serve | Contact Now
        </title>
        <meta
          name="description"
          content="Here&#039;s our expertise in the hospitality industries we serve: hotels, restaurants, cloud kitchens, and resorts. Get in touch with our experts!"
        />
      </Helmet>
      <NavigationBar />
      <div className="container web-dev ">
        <Banner />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />

      <Section5 />
      <Section6 />
      <Section7 />
      <Contact />
      <Footer />
      <WhatsApp />
      <Call />
    </div>
  );
};

export default Industry;
