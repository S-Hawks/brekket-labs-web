import React from "react";
import Banner from "../components/Banner/Banner";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import WhyBrekket from "../components/WhyBrekket/WhyBrekket";

const servicesPromise = fetch("/Services.json").then((res) => res.json());
const featuresPromise = fetch("/Features.json").then((res) => res.json());

const MainLayout = () => {
  return (
    <div>
      <Banner />
      <Services servicesPromise={servicesPromise}></Services>
      <WhyBrekket featuresPromise={featuresPromise}></WhyBrekket>
      <Contact></Contact>
    </div>
  );
};

export default MainLayout;
