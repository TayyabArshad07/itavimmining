import PageScroller from "react-page-scroller";
import React from "react";
import Layout from "./Layout";
import HomeSection from "./AllSections/HomeSection";
import AboutSection from "./AllSections/AboutSection";
import Header from "./Header";
import WWeDoSection from "./AllSections/WWeDoSection";

const Section = () => {
  return (
    <PageScroller>
      <HomeSection />
      {/* <AboutSection /> */}
      <WWeDoSection />
    </PageScroller>
  );
};

export default Section;
