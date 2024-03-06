import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";
import DiamondOne from '@/public/img/Diamond-1.png';
import Prisma from '@/public/img/prisma-kantoortuin.png';

const WWeDoPage = () => {
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
          <h3>.03</h3>
          <h2 onClick={handleFirst}>WHAT WE DO</h2>
        </div>
        <div className="Progress-Bar">
          <div
            className="slider-progress"
            style={{ width: `${(currentSection - 1) * 50}%` }}
          ></div>
        </div>
        <div className="Lower-div">
          <p onClick={handleSecond}>SEARCH TO SEARCH</p>
          <p onClick={handleThird}>DISPLAY TO SEARCH</p>
        </div>
      </div>
      <div className="slider">
        <div
          className="slider-content"
          style={{ transform: `translateX(-${(currentSection - 1) * 100}vw)` }}
        >
          <div className="slider-section">
            <section className="WWeDo-Section">
              <h2>what we do</h2>
              <div className="Second-div">
                <h3>.03</h3>
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
            <section className="Search-Section">
              <div className="Text-Box">
                <h4>search to search</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto pariatur quo ea! Sunt inventore quo deserunt neque aliquid. Nemo dolorum natus, est vel nulla ipsum hic iusto eaque assumenda earum in laudantium numquam debitis voluptatem commodi vitae magni maxime ab a inventore nobis
                </p>
              </div>
              <div className="absolute top-[30%] right-[10%]">
                <Image src={DiamondOne} alt="" />
              </div>
            </section>
          </div>
          <div className="slider-section">
          <section className="Display-Search-Section">
              <div className="h-[450px] w-[450px]">
                <Image src={Prisma} alt="" className="h-full w-full" />
              </div>
              <div className="Text-Box">
                <h4>display to search</h4>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sunt ipsa culpa nam sed. Blanditiis facilis molestiae dignissimos distinctio at neque explicabo eius, similique dicta cum ipsam necessitatibus excepturi! Libero, quo sint odio architecto tempora eligendi soluta ipsum incidunt eos, aliquid quae maxime, voluptatibus iure?
                </p>
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

export default WWeDoPage;
