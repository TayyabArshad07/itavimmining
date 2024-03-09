import PageScroller from "react-page-scroller";
import React from "react";
import HomePage from "./AllSections/HomePage";
import AboutPage from "./AllSections/AboutPage";
import WWeDoPage from "./AllSections/WWeDoPage";
import TeamPage from "./AllSections/TeamPage";
import PartnerBrandPage from "./AllSections/PartnerBrandPage";
import CareerPage from "./AllSections/CareerPage";
import ContactPage from "./AllSections/ContactPage";

const AllPages = () => {
  return (
    <PageScroller>
      <HomePage />
      <AboutPage />
      <WWeDoPage />
      <TeamPage />
      <PartnerBrandPage />
      <CareerPage />
      <ContactPage />
    </PageScroller>
  );
};

export default AllPages;
