import React from "react";
import Image from "next/image";
import Layout from "../Layout";
import Prisma from "@/public/img/prisma-kantoortuin.png";

const AboutSection = () => {
  return (
    <section className="About-Section">
      <h2 className="text-[68px] font-thin w-min leading-[70px]">about us</h2>
      <div className="flex">
        <div className="flex">
          <h3>.02</h3>
          <p>
            Visymo Universal Search Group (since 1997) is the invisible power
            behind valuable search results. Every single day, the search
            technology we developed in-house helps millions of users find the
            relevant information they seek. In part, we are able to achieve this
            as a result of our strategic partnerships with e.g. Google,
            Microsoft and Yahoo.
          </p>
        </div>
        <div>
          <h3>.02</h3>
          <h4 className="border-b border-[#fff] w-fit">ABOUT US</h4>
          <p>OUR VALUES</p>
          <p>GREAT PLACE TO WORK</p>
          <p>HISTORY</p>
        </div>
       
   
      </div>
    </section>
  );
};

export default AboutSection;
