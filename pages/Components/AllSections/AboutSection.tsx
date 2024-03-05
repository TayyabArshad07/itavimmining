import React from "react";
import Image from "next/image";
import Layout from "../Layout";
import Prisma from "@/public/img/prisma-kantoortuin.png";

const AboutSection = () => {
  return (
    <section className="About-Section">
      <h2 className="text-[68px] font-extralight w-min leading-[70px]">
        about us
      </h2>
      <div className="flex justify-between">
        <div className="flex gap-10 justify-center items-start">
          <h3 className="text-[170px] font-thin leading-[150px]">.02</h3>
          <p className="text-[15px] w-[250px] pt-[17px] leading-7">
            Visymo Universal Search Group (since 1997) is the invisible power
            behind valuable search results. Every single day, the search
            technology we developed in-house helps millions of users find the
            relevant information they seek. In part, we are able to achieve this
            as a result of our strategic partnerships with e.g. Google,
            Microsoft and Yahoo.
          </p>
        </div>
        <div className="text-right mt-[-7%]">
          <div className="leading-[50px]">
            <h3 className="text-[68px] font-extralight">.02</h3>
            <h4 className="text-[19px] font-semibold text-yellow-400 border-b-[2px] border-white">
              ABOUT US
            </h4>
          </div>
          <div className="leading-[30px] pt-[15%]">
            <p>OUR VALUES</p>
            <p>GREAT PLACE TO WORK</p>
            <p>HISTORY</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
