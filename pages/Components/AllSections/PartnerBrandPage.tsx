import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";
import OurPartnerBg from "@/public/img/Our-Partner-BG.jpg";

const PartnerBrandPage = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 3;

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

  const handlePrevious = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="slider-container">
      <div className="Side-Nav">
        <div className="Uper-div">
          <h3>.05</h3>
          <h2 onClick={handleFirst}>PARTNERS {"&"} BRANDS</h2>
        </div>
        <div className="Progress-Bar">
          <div
            className="slider-progress"
            style={{ width: `${(currentSection - 1) * 50}%` }}
          ></div>
        </div>
        <div className="Lower-div">
          <p onClick={handleSecond}>OUR PARTNERS</p>
          <p onClick={handleThird}>OUR BRANDS</p>
        </div>
      </div>
      <div className="slider">
        <div
          className="slider-content"
          style={{ transform: `translateX(-${(currentSection - 1) * 100}vw)` }}
        >
          <div className="slider-section">
            <section className="Partner-Brand-Section">
              <h2>partners {"&"} brands</h2>
              <div className="Second-div">
                <h3>.05</h3>
                <p>
                  We are a global player and one of the world's largest mining
                  company.
                </p>
              </div>
            </section>
          </div>
          <div className="slider-section">
            <section className="Our-Partner-Section">
              <div className="w-1/2">
                <Image
                  src={OurPartnerBg}
                  alt="Background-Image"
                  className="h-screen w-full"
                />
              </div>
              <div className="Text-Box">
                <h4>partners</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore molestiae porro recusandae, facilis harum natus iusto
                  illum accusantium nobis magnam incidunt sunt voluptates odit
                  molestias officiis ea sapiente
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  a pariatur accusantium. Voluptates quibusdam nulla aspernatur
                  molestiae ipsam debitis, nihil et, earum non expedita optio.
                </p>
              </div>
            </section>
          </div>
          <div className="slider-section">
            <section className="Our-Brand-Section">
              <div className="Text-Box">
                <h4 className="heading">our brands</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur eum necessitatibus assumenda.
                </p>
                <div className="Second-Text-Box">
                  <h5>Facts and numbers</h5>
                  <h3>121.777.688</h3>
                  <p>Visitors per month</p>
                  <h3>1.580.981.504</h3>
                  <p>Visitors per month</p>
                </div>
              </div>
              <div className="w-1/2">
                <Image
                  src={OurPartnerBg}
                  alt="Background-Image"
                  className="h-screen w-full"
                />
              </div>
            </section>
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

export default PartnerBrandPage;
