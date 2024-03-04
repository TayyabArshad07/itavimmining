import PageScroller from "react-page-scroller";
import React from "react";
import Layout from "./Layout";
import HomeSection from "./AllSections/HomeSection";
import AboutSection from "./AllSections/AboutSection";
import Header from "./Header";

const Section = () => {
  return (
    <PageScroller>
      <HomeSection />
      <AboutSection />
    </PageScroller>
  );
};

export default Section;
