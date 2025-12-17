import React from "react";
import Banner from "../components/Banner/Banner";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import WhyBrekket from "../components/WhyBrekket/WhyBrekket";
import Reviews from "../components/Reviews/Reviews";
import LogoLoop from "../components/LogoLoop/LogoLoop";

const servicesPromise = fetch("/Services.json").then((res) => res.json());
const featuresPromise = fetch("/Features.json").then((res) => res.json());
const reviewsPromise = fetch("http://localhost:3000/reviews").then((res) =>
  res.json()
);

const MainLayout = () => {
  return (
    <div>
      <Banner />
      <Services servicesPromise={servicesPromise}></Services>
      <WhyBrekket featuresPromise={featuresPromise}></WhyBrekket>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <LogoLoop></LogoLoop>
      {/* <Contact></Contact> */}
    </div>
  );
};

export default MainLayout;
