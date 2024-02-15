import React from "react";
import Accordion from "../../Component/Accordion";

import NavigationBar from "../../Component/NavigationBar";
import Footer from "../../Component/Footer";
import WhatsApp from "../../chat-component/WhatsApp";
import Call from "../../chat-component/Call";
import ScrollTop from "../../Component/ScrollTop";

export const Faq = () => {
  ScrollTop();
  const accordionItems = [
    {
      title: `What is Marketing for a Restaurant?`,
      content: `<p>Marketing for a restaurant involves:</p>
<ol>
    <li>Promoting the restaurant's brand, menu, and ambiance.</li>
    <li>Reaching and attracting the target audience.</li>
    <li>Utilizing various channels like social media, online ads, and local promotions.</li>
    <li>Encouraging repeat business through loyalty programs.</li>
    <li>Showcasing positive reviews and testimonials.</li>
    <li>Creating enticing offers and special promotions.</li>
    <li>Engaging with customers through email marketing and personalized campaigns.</li>
</ol>
<p>In Fielmente, with our restaurant marketing expert we make this very seamless. Contact us to skyrocket your revenue.
</p>`,
    },
    {
      title: `What marketing channels do Restaurants use?`,
      content: `<p>Restaurants use the following marketing channels:</p>
<ol>
    <li>Social media platforms (Facebook, Instagram, Twitter).</li>
    <li>Google Ads and search engine optimization (SEO).</li>
    <li>Email marketing campaigns.</li>
    <li>Local promotions and events.</li>
    <li>Online food delivery platforms(Swiggy, Zomato, ONDC).</li>
    <li>Influencer marketing partnerships.</li>
    <li>Local promotions and events.</li>
</ol>`,
    },
    {
      title: `How do Restaurants practice Marketing?`,
      content: `<p>Restaurants practice marketing through:</p>
<ol>
    <li>Online presence and social media engagement.</li>
    <li>Eye-catching menu design and visuals.</li>
    <li>Local advertising and promotions.</li>
    <li>Email and SMS marketing campaigns.</li>
    <li>Special offers and loyalty programs.</li>
    <li>Partnering with food influencer's and bloggers.</li>
    <li>Showcasing positive reviews and testimonials.</li>
</ol>
<p>We at our restaurant marketing agency, with experts with over 10+ years of experience, does all the best practices to
    fill in your dine.</p>`,
    },
    {
      title: `Why is marketing important in Restaurant?`,
      content: `
<p>Marketing is crucial for restaurants because it:</p>
<ol>
    <li>Attracts new customers and increases footfall.</li>
    <li>Builds brand awareness and recognition.</li>
    <li>Increases sales and revenue.</li>
    <li>Helps in standing out in a competitive market.</li>
    <li>Fosters customer loyalty and repeat business.</li>
    <li>Showcases unique offerings and promotions.</li>
    <li>Creates a positive reputation and online presence.</li>
</ol>
<p>We at our restaurant marketing agency, with experts with over 10+ years of experience, does all the best practices to
    fill in your dine.</p>`,
    },
    {
      title: "How do I make my Restaurant famous?",
      content: `<p>To make your restaurant famous:</p>
<ol>
    <li>Focus on exceptional food & service.</li>
    <li>Engage on social media with enticing visuals.</li>
    <li>Encourage positive online reviews.</li>
    <li>Participate in local events & partnerships.</li>
    <li>Collaborate with food influencer's.</li>
    <li>Offer loyalty rewards & unique promotions.</li>
    <li>Seek press coverage & word-of-mouth.</li>
</ol>`,
    },
    {
      title: "Is Cloud Kitchen profitable business?",
      content: `<p>Yes, cloud kitchens can be a profitable business if managed efficiently and strategically.</p>
<p>If you want to run your cloud kitchen business profitable, get on a call with our expert for a free one on one
    consultation.</p>`,
    },
    {
      title: "Is Cloud Kitchen B2B and B2C?",
      content: `<p>Yes, cloud kitchens can operate as both B2B (Business-to-Business) and B2C (Business-to-Consumer) models,
    serving food delivery platforms and individual customers directly.</p>
<p>If you want to create a sensational brand of your cloud kitchen?</p>
<p>Connect with our expert cloud kitchen marketing agency, to skyrocket your revenue.</p>`,
    },
    {
      title: "Does Cloud Kitchen needs license in India?",
      content: `Yes, cloud kitchens in India require licenses and permits to operate legally. The specific licenses may vary
depending on the location and local regulations. It’s essential for cloud kitchen operators to comply with food safety
and hygiene guidelines, trade licenses, and other necessary permits.`,
    },
    {
      title: "what is the startup cost of Cloud Kitchen?",
      content: `<p>The startup cost of a cloud kitchen can be broken down as follows:</p>
<ol>
    <li>Kitchen Setup: INR 2,50,000 to INR 10,00,000 depending on the size and location of the kitchen.</li>
    <li>Equipment: Approximately INR 3,00,000 to INR 5,00,000 for high-quality kitchen appliances and tools.</li>
    <li>Licenses and Permits: Budget around INR 1,00,000 for various licenses and permits required for legal operations.
    </li>
    <li>Staffing: Initial staffing costs may range from INR 1,50,000 to INR 3,00,000, including salaries and training.
    </li>
    <li>Branding and Marketing: Allocate INR 50,000 to INR 1,50,000 for logo design, menu creation, and initial
        marketing efforts.</li>
    <li>Initial Inventory: Plan for INR 1,00,000 to INR 3,00,000 for purchasing ingredients and supplies.</li>
    <li>Technology: Invest around INR 50,000 to INR 1,00,000 for online ordering systems and delivery management
        software.</li>
    <li>Utilities and Insurance: Set aside INR 30,000 to INR 50,000 for covering water, electricity, and insurance
        costs.</li>
</ol>
<p>Keep in mind that these figures are approximate and can vary based on various factors.</p>
<p>Proper financial planning and budgeting are crucial for a successful cloud kitchen startup.</p>`,
    },
    {
      title: "What is required for Cloud Kitchen?",
      content: `<p>To set up a cloud kitchen, you need:</p>
<ol>
    <li>Commercial kitchen space.</li>
    <li>Essential kitchen equipment.</li>
    <li>Licenses and permits.</li>
    <li>Online ordering system.</li>
    <li>Delivery fleet or partnership.</li>
    <li>Well-curated menu.</li>
    <li>Branding and marketing.</li>
    <li>Skilled staff.</li>
    <li>Quality ingredients and suppliers.</li>
    <li>Proper packaging and hygiene.</li>
    <li>Technology and software.</li>
    <li>Comprehensive financial planning.</li>
</ol>
<p>To make your process of setting up a cloud kitchen and creating a brand that talks, our cloud kitchen marketing
    agency is your go to place.</p>`,
    },
  ];
  const accordionContainerClass = "";
  const headingDivClass = "border-bottom p-1";
  const h3Class = "accordionh3";
  const contentClass = "accordion-content";
  const accordionContentClass = "";
  return (
    <div>
      <NavigationBar />
      <div className="container text-center mt-4">
        <h2 className="text-black text-capitalize ff-p c-fw-6 h2-lg text-gray5">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="container">
        <div
          className="py-lg-5 py-md-4 py-3 m-auto"
          style={{ maxWidth: "80%" }}
        >
          <Accordion
            items={accordionItems}
            accordionContainerClass={accordionContainerClass}
            headingDivClass={headingDivClass}
            h3Class={h3Class}
            contentClass={contentClass}
            accordionContentClass={accordionContentClass}
          />
        </div>
      </div>
      <Footer />
      <WhatsApp />
      <Call />
    </div>
  );
};
