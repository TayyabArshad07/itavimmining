import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";
import CultureBG from "@/public/img/Culture-BG.jpg";
import FirstIcon from "@/public/Icons/pleasant-workplace.svg";
import SecondIcon from "@/public/Icons/great-benefits.svg";
import ThirdIcon from "@/public/Icons/flexible-work-hours.svg";
import ForthIcon from "@/public/Icons/social-fun-events.svg";
import FifthIcon from "@/public/Icons/study-arrangement.svg";
import SixthIcon from "@/public/Icons/achievement-bonus.svg";
import SeventhIcon from "@/public/Icons/great-lunches.svg";
import EighthIcon from "@/public/Icons/vrijmibo.svg";
import NinthIcon from "@/public/Icons/weekly-workouts.svg";

const CareerPage = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 2;

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

  const handlePrevious = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="slider-container">
      <div className="Side-Nav">
        <div className="Uper-div">
          <h3>.06</h3>
          <h2 onClick={handleFirst}>CAREER</h2>
        </div>
        <div className="Progress-Bar">
          <div
            className="slider-progress"
            style={{ width: `${(currentSection - 1) * 100}%` }}
          ></div>
        </div>
        <div className="Lower-div">
          <p onClick={handleSecond}>OUR CULTURE</p>
        </div>
      </div>
      <div className="slider">
        <div
          className="slider-content"
          style={{ transform: `translateX(-${(currentSection - 1) * 100}vw)` }}
        >
          <div className="slider-section">
            <section className="Career-Section">
              <h2>career</h2>
              <div className="Second-div">
                <h3>.06</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  itaque minima voluptas ut hic aut facere ex pariatur vel dolor
                  incidunt fugiat quis inventore voluptates, temporibus debitis
                  perspiciatis expedita quae, magni, repellat quibusdam quos
                  voluptate reiciendis eius! Fugiat incidunt dolores sunt
                  architecto corporis? Officia, ex corrupti minima voluptatem
                  eligendi cupiditate! Fugiat incidunt dolores sunt architecto
                  corporis?
                </p>
              </div>
            </section>
          </div>
          <div className="slider-section">
            <section className="Our-Culture-Section">
              <div className="w-1/3">
                <Image
                  src={CultureBG}
                  alt="Background-Image"
                  className="h-screen w-full"
                />
              </div>
              <div className="Text-Box">
                <h4>our culture</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore molestiae porro recusandae, facilis harum natus iusto
                  illum accusantium nobis magnam incidunt sunt voluptates odit
                  molestias officiis ea sapiente
                </p>
                <div className="Icons-Section">
                  <div>
                    <Image src={FirstIcon} alt="Icon" className="Icon-Image" />
                    <p>pleasant workplace</p>
                  </div>
                  <div>
                    <Image src={SecondIcon} alt="Icon" className="Icon-Image" />
                    <p>great benefits</p>
                  </div>
                  <div>
                    <Image src={ThirdIcon} alt="Icon" className="Icon-Image" />
                    <p>flexible work hours</p>
                  </div>
                  <div>
                    <Image src={ForthIcon} alt="Icon" className="Icon-Image" />
                    <p>social fun events</p>
                  </div>
                  <div>
                    <Image src={FifthIcon} alt="Icon" className="Icon-Image" />
                    <p>study arrangement</p>
                  </div>
                  <div>
                    <Image src={SixthIcon} alt="Icon" className="Icon-Image" />
                    <p>achievement bonus</p>
                  </div>
                  <div>
                    <Image src={SeventhIcon} alt="Icon" className="Icon-Image" />
                    <p>great lunches</p>
                  </div>
                  <div>
                    <Image src={EighthIcon} alt="Icon" className="Icon-Image" />
                    <p>vrijmibo</p>
                  </div>
                  <div>
                    <Image src={NinthIcon} alt="Icon" className="Icon-Image" />
                    <p>weekly workouts</p>
                  </div>
                </div>
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

export default CareerPage;
