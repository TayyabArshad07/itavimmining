import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";
import OurValueBG from "@/public/img//Our-Value-BG.png";

const Slider = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 4;

  const handleNext = () => {
    if (currentSection < totalSections) {
      setCurrentSection(currentSection + 1);
    }
  };
  const handleFirst = () => {
    setCurrentSection(1);
  };
  const handleSecond = () => {
    setCurrentSection(2);
  };
  const handleThird = () => {
    setCurrentSection(3);
  };
  const handleForth = () => {
    setCurrentSection(4);
  };

  const handlePrevious = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="slider-container">
      <div className="Side-Nav">
        <div className="Uper-div">
          <h3>.02</h3>
          <h2 onClick={handleFirst}>ABOUT US</h2>
        </div>
        <div className="Progress-Bar">
          <div
            className="slider-progress"
            style={{ width: `${(currentSection - 1) * 33}%` }}
          ></div>
        </div>
        <div className="Lower-div">
          <p onClick={handleSecond}>OUR VALUES</p>
          <p onClick={handleThird}>GREAT PLACE TO WORK</p>
          <p onClick={handleForth}>HISTORY</p>
        </div>
      </div>
      <div className="slider">
        <div
          className="slider-content"
          style={{ transform: `translateX(-${(currentSection - 1) * 100}vw)` }}
        >
          <div className="slider-section">
            <section className="About-Section">
              <h2>about us</h2>
              <div className="Second-div">
                <h3>.02</h3>
                <p>
                  Visymo Universal Search Group (since 1997) is the invisible
                  power behind valuable search results. Every single day, the
                  search technology we developed in-house helps millions of
                  users find the relevant information they seek. In part, we are
                  able to achieve this as a result of our strategic partnerships
                  with e.g. Google, Microsoft and Yahoo.
                </p>
              </div>
            </section>
          </div>
          <div className="slider-section">
            <section className="Our-Value-Section flex">
              <div className="w-full">
                <Image src={OurValueBG} alt="Background-Image" className="h-screen" />
              </div>
              <div className="bg-[#2B2D31] pl-[8%] leading-[45px] py-[10px] flex items-center">
                <p className="text-white text-[40px] w-[60%] font-extralight">
                  We are always searching. Searching for new possibilities and
                  opportunities, searching for ways to improve results,
                  searching for even more effective solutions. Where others
                  stick to the beaten path, we choose the road less travelled
                  by. If that road does not exist yet, we will simple chart our
                  own course.
                </p>
              </div>
            </section>
          </div>
          <div className="slider-section" style={{ backgroundColor: "green" }}>
            Section 3
          </div>
          <div className="slider-section" style={{ backgroundColor: "gray" }}>
            Section 4
          </div>
        </div>
      </div>
      <button
        className="slider-button previous"
        onClick={handlePrevious}
        style={{ visibility: currentSection === 1 ? "hidden" : "visible" }}
      >
        <FaAngleLeft />
      </button>
      <button
        className="slider-button next"
        onClick={handleNext}
        style={{
          visibility: currentSection === totalSections ? "hidden" : "visible",
        }}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Slider;
