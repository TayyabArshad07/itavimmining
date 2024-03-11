import React from "react";
import Image from "next/image";
import Layout from "../Layout";
import Prisma from '@/public/img/prisma-kantoortuin.png'

const HomePage = () => {
  return (
    <section className="Home-Section" id="HomePage">
      <div className="heading">
        <h2>magic inside</h2>
        <p>The invisible power behind valuable connections.</p>
      </div>
      <div className="pr-[15%] mt-[-15%] w-fit">
        <Image src={Prisma} alt="Prisma" height={"250"} width={"250"}/>
      </div>
    </section>
  );
};

export default HomePage;
