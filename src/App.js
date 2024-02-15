import "./App.css";
import "./Style/Main.css";
import "./Style/Responsive.css";
// import { RouterProvider, createBrowserRouter, useParams } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import Home from "./Pages/Home Page/Home";
import About from "./Pages/About Page/About";
// Industry
import Industry from "./Pages/Industry/Industry";
import HotelMarketing from "./Pages/Hotel-Marketing/HotelMarketing";
import RestaurantMarketing from "./Pages/Restaurant Marketing/RestaurantMarketing";
import CloudMarketing from "./Pages/cloud-marketing/CloudMarketingPage";
// Industry end
// Service
import Service from "./Pages/Service Page/Service";
import WebDevPage from "./Pages/WebDev Service/WebDevPage";
import SocialMedia from "./Pages/Social Media/SocialMedia";
import SeoPage from "./Pages/SEO Page/SeoPage";
import PaidAds from "./Pages/Paid Ads Page/PaidAds";
// Service end
import OurTeamPage from "./Pages/Our Team/OurTeamPage";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact Page/Contact";
// footer end
import LandingPage1 from "./Pages/LandingPage1/LandingPage1";
import LandingPage2 from "./Pages/LandingPage2/LandingPage2";
import TermsOfUse from "./Pages/terms-of-Use/TermsOfUse";
import { Faq } from "./Pages/faq/Faq";

import BlogDetails6 from "./Pages/Blogs/BlogDetails6";

function App() {
  const d = useParams();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/about-fielmente-best-hospitality-marketing-agency/"
            exact
            element={<About />}
          />

          {/* Industries We Serve */}

          <Route path="/industries-we-serve/" exact element={<Industry />} />
          <Route
            path="/industries-we-serve/hotel-marketing-agency/"
            exact
            element={<HotelMarketing />}
          />
          <Route
            path="/industries-we-serve/restaurant-marketing-agency/"
            exact
            element={<RestaurantMarketing />}
          />
          <Route
            path="/industries-we-serve/cloud-kitchen-marketing-agency/"
            exact
            element={<CloudMarketing />}
          />
          {/*Services*/}
          <Route
            path="/hospitality-marketing-services"
            exact
            element={<Service />}
          />
          <Route
            path="/hospitality-marketing-services/website-development-agency/"
            exact
            element={<WebDevPage />}
          />
          <Route
            path="/hospitality-marketing-services/social-media-marketing-agency/"
            exact
            element={<SocialMedia />}
          />
          <Route
            path="/hospitality-marketing-services/seo-agency/"
            exact
            element={<SeoPage />}
          />
          <Route
            path="/hospitality-marketing-services/google-ads-agency/"
            exact
            element={<PaidAds />}
          />
          {/*Services*/}
          {/* <Route path="/our-team/" exact element={<OurTeamPage />} /> */}

          <Route path="/blog/" exact element={<Blogs />} />

          {/* <Route path={`/blog/:name`} exact element={<BlogDetails6 />} /> */}

          <Route path="/contact/" exact element={<Contact />} />
          <Route path="/terms-of-Use/" exact element={<TermsOfUse />} />
          <Route path="/faq/" exact element={<Faq />} />
          <Route path="/landing_page2" exact element={<LandingPage2 />} />
          <Route path="/landing_page1" exact element={<LandingPage1 />} />

          <Route path="*"  element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
