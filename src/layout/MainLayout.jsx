import React from "react";
import Banner from "../components/Banner/Banner";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";

const servicesPromise = fetch("/Services.json").then((res) => res.json());

const MainLayout = () => {
  return (
    <div>
      <Banner />
      <Services servicesPromise={servicesPromise}></Services>
      <Contact></Contact>
    </div>
  );
};

export default MainLayout;
