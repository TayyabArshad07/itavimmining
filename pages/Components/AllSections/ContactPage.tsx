import Link from "next/link";
import React from "react";
import Image from "next/image"
import DiamondImage from "@/public/img/Diamond-1.png"

const ContactPage = () => {
  return (
    <section className="Contact-Section">
      <div className="Text-Box">
        <h2>contact</h2>
        <div className="Second-div">
          <h3>.07</h3>
          <p>
          Do you have an urgent question or request? This <Link href={'/ContactForm'} className="underline cursor-pointer">contact form</Link> is the fastest way to get in touch.
          </p>
        </div>
      </div>
      <div className="Image-Div">
        <Image src={DiamondImage} alt="" className="h-[50%] w-[50%] opacity-30 select-none" />
      </div>
    </section>
  );
};

export default ContactPage;
