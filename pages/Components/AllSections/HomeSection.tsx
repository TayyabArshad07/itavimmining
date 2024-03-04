import React from "react";
import Image from "next/image";
import Layout from "../Layout";
import Prisma from '@/public/img/prisma-kantoortuin.png'

const HomeSection = () => {
  return (
    <section className="Home-Section">
      <div className="text-white w-[230px] pt-[3%]">
        <h1 className="text-[78px] leading-[80px] font-thin">magic inside</h1>
        <p className="text-[18px] leading-[30px] pt-[20px] font-normal">The invisible power behind valuable connections.</p>
      </div>
      <div className="pr-[5%] mt-[-3%]">
        <Image src={Prisma} alt="Prisma" height={"300"} width={"300"}/>
      </div>
    </section>
  );
};

export default HomeSection;
