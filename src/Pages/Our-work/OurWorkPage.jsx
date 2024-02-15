import React from "react";
import Banner from "./Banner";
import Section2 from "./Section2";
import NavigationBar from "../../Component/NavigationBar";
import Footer from "../../Component/Footer";
import WhatsApp from "../../chat-component/WhatsApp";
import Call from "../../chat-component/Call";
import ScrollTop from "../../Component/ScrollTop";
import { Helmet } from "react-helmet";

export default function OurWorkPage() {
    ScrollTop();
  return (
    <div className="main_navbar">
      <Helmet>
        <title>Our Work | Fielmente</title>

        <meta
          name="description"
          content="We're a group of digital marketers who love finding innovative solutions to problems in support of our clients and our communities."
        />
      </Helmet>
      <NavigationBar />
      <Banner />
      <main>
        <Section2 />
      </main>
      <Footer />
      <WhatsApp />
      <Call />
    </div>
  )
}
