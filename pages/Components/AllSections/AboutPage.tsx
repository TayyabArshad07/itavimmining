import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";
import OurValueBG from "@/public/img//Our-Value-BG.png";
import WorkImage from "@/public/img/workspace-1.jpg";
import HistoryImage from "@/public/img/prisma-kantoortuin.png";

const AboutPage = () => {
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
    <div className="slider-container" id="AboutPage">
      <div className="Side-Nav">
        <div className="Uper-div">
          <h3>.02</h3>
          <h2 onClick={handleFirst}>ABOUT US</h2>
        </div>
        <div className="Progress-Bar">
          <div
            className="slider-progress"
            style={{ width: `${(currentSection - 1) * 33.33}%` }}
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
                  Itaviming (since 1997) is the invisible power behind valuable
                  mining results. Every single day, the mining technology we
                  developed in-house helps millions of users find the relevant
                  stones they seek. In part, we are able to achieve this as a
                  result of our strategic partnerships with technologies.
                </p>
              </div>
            </section>
          </div>
          <div className="slider-section">
            <section className="Our-Value-Section">
              <div className="w-full">
                <Image
                  src={OurValueBG}
                  alt="Background-Image"
                  className="h-screen"
                />
              </div>
              <div className="Text-Box">
                <p>
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
          <div className="slider-section">
            <section className="Work-Place-Section">
              <div className="Text-Box">
                <h4>great place to work</h4>
                <p>
                  Work hard, play hard! We do this in an inspirational
                  environment where we can work and relax.
                </p>
                <p>
                  Be sure to read the experiences of our colleagues Maurice,
                  Bastian, Rayhana and Simon.
                </p>
              </div>
              <div className="w-full">
                <Image
                  src={WorkImage}
                  alt="Background-Image"
                  className="h-screen w-full"
                />
              </div>
            </section>
          </div>
          <div className="slider-section">
            <section className="History-Section">
              <div className="Text-Box">
                <div className="Evolution">
                  <h4 className="text-[var(--Yellow-color)] text-[22px] font-medium">
                    2024
                  </h4>
                  <p className="text-white text-[22px] font-normal">
                    Establishment of Itavimining
                  </p>
                </div>
                <div className="Evolution">
                  <h4 className="text-[var(--Yellow-color)] text-[22px] font-medium">
                    2024
                  </h4>
                  <p className="text-white text-[22px] font-normal">
                    Lorem, ipsum.
                  </p>
                </div>
                <div className="Evolution">
                  <h4 className="text-[var(--Yellow-color)] text-[22px] font-medium">
                    2024
                  </h4>
                  <p className="text-white text-[22px] font-normal">
                    Lorem ipsum dolor sit.
                  </p>
                </div>
                <div className="Evolution">
                  <h4 className="text-[var(--Yellow-color)] text-[22px] font-medium">
                    2024
                  </h4>
                  <p className="text-white text-[22px] font-normal">
                    Lorem, ipsum dolor.
                  </p>
                </div>
                <div className="Evolution">
                  <h4 className="text-[var(--Yellow-color)] text-[22px] font-medium">
                    2024
                  </h4>
                  <p className="text-white text-[22px] font-normal">
                    Lorem, ipsum dolor.
                  </p>
                </div>
                <div className="Evolution">
                  <h4 className="text-[var(--Yellow-color)] text-[22px] font-medium">
                    2024
                  </h4>
                  <p className="text-white text-[22px] font-normal">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div className="Evolution">
                  <h4 className="text-[var(--Yellow-color)] text-[22px] font-medium">
                    2024
                  </h4>
                  <p className="text-white text-[22px] font-normal">
                    Lorem ipsum dolor sit.
                  </p>
                </div>
                <div className="Evolution">
                  <h4 className="text-[var(--Yellow-color)] text-[22px] font-medium">
                    2024
                  </h4>
                  <p className="text-white text-[22px] font-normal">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="Image-Div">
                <Image
                  src={HistoryImage}
                  alt="Image"
                  height={400}
                  width={400}
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

export default AboutPage;
