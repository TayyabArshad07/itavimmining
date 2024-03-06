import PageScroller from "react-page-scroller";
import React from "react";
import Layout from "./Layout";
import HomePage from "./AllSections/HomePage";
import AboutPage from "./AllSections/AboutPage";
import Header from "./Header";
import WWeDoPage from "./AllSections/WWeDoPage";
import TeamPage from "./AllSections/TeamPage";

const Section = () => {
  return (
    <PageScroller>
      <HomePage />
      <AboutPage />
      <WWeDoPage />
      <TeamPage />
    </PageScroller>
  );
};

export default Section;
