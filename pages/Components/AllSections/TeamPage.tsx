import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";
import DiamondOne from '@/public/img/Diamond-1.png';
import Prisma from '@/public/img/prisma-kantoortuin.png';
import TeamImage from "@/public/img/workspace-1.jpg";
import CelebratingImage from "@/public/img/Celebrating-BG.jpg"

const TeamPage = () => {
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
          <h3>.04</h3>
          <h2 onClick={handleFirst}>TEAMWORK</h2>
        </div>
        <div className="Progress-Bar">
          <div
            className="slider-progress"
            style={{ width: `${(currentSection - 1) * 50}%` }}
          ></div>
        </div>
        <div className="Lower-div">
          <p onClick={handleSecond}>EXPERT TEAMS</p>
          <p onClick={handleThird}>CELEBRATING SUCCESSES</p>
        </div>
      </div>
      <div className="slider">
        <div
          className="slider-content"
          style={{ transform: `translateX(-${(currentSection - 1) * 100}vw)` }}
        >
          <div className="slider-section">
            <section className="TeamWork-Section">
              <h2>teamwork</h2>
              <div className="Second-div">
                <h3>.04</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis culpa, magnam eos dolorum nulla, odio quia quaerat labore tempora quisquam aut, ad nisi consectetur. Eaque nostrum aperiam, culpa, amet necessitatibus blanditiis delectus molestias fugit, sit laborum impedit quibusdam aliquid accusantium. Sit voluptatum soluta veritatis cupiditate, odio reprehenderit minima autem?
                </p>
              </div>
            </section>
          </div>
          <div className="slider-section">
          <section className="Expert-Team-Section">
              <div className="w-1/2">
                <Image
                  src={TeamImage}
                  alt="Background-Image"
                  className="h-screen w-full"
                />
              </div>
              <div className="Text-Box">
                <h4>expert teams</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quod nesciunt blanditiis sit libero numquam eveniet eum corporis doloremque saepe.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt veniam quidem ad? Harum eveniet quae quidem obcaecati, culpa iste repellat?
                </p>
              </div>
            </section>
          </div>
          <div className="slider-section">
          <section className="Celebrating-Section">
              <div className="Text-Box">
                <h4>celebrating successes</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo voluptatem minus amet numquam tenetur adipisci, beatae ullam itaque? Aliquam doloribus quis perferendis at delectus! mquam tenetu
                </p>
              </div>
              <div className="absolute bottom-[10%] right-[65%]">
                <Image src={DiamondOne} alt="" className="opacity-30" />
              </div>
              <div className="w-full">
                <Image
                  src={CelebratingImage}
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

export default TeamPage;
