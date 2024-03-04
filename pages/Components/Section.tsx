import PageScroller from "react-page-scroller";
import React from "react";

const Section = () => {
  return (
    <PageScroller>
      <div className="bg-[#ff0000] h-screen">Section 1</div>
      <div className="bg-[#ff00ff] h-screen">Section 2</div>
      <div className="bg-[#00ffff] h-screen">Section 3</div>
      <div className="bg-[#00ff00] h-screen">Section 4</div>
    </PageScroller>
  );
};

export default Section;
