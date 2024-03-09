import React from "react";
import { FaLocationDot, FaPhone, FaPaperPlane } from "react-icons/fa6";
import Image from "next/image";
import { FaBars} from "react-icons/fa6";
import Logo from "@/public/img/Itavi - logomark v5 - peak - flag.png";

const ContactForm = () => {
  return (
    <div>
      <header className="flex fixed items-center justify-between w-full px-[10%] bg-none z-[1000000000]">
      <div className="w-full h-full">
        <Image src={Logo} alt="Logo" height={150} width={150}/>
      </div>
      <FaBars  className="text-[30px] text-[#000]"/>
    </header>
      <section className="Contact-Form-Section" id="Contact-Form">
        <div className="Contact-Form-Box">
          <div className="Info-Div">
            <h4>Let's get in touch</h4>
            <p>We're open for any suggestion or just to have a chat</p>
            <div className="Content">
              <div className="Icon-Div">
                <FaLocationDot className="text-white" />
              </div>
              <p>Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
            <div className="Content">
              <div className="Icon-Div">
                <FaPhone className="text-white" />
              </div>
              <p>Phone: {"+"} 1235 2355 98</p>
            </div>
            <div className=" Content">
              <div className="Icon-Div">
                <FaPaperPlane className="text-white" />
              </div>
              <p>Email: info@yoursite.com</p>
            </div>
          </div>
          <form action="post" className="Contact-Form">
            <h4>Get In touch</h4>
            <div className="Input-Div">
              <input type="text" placeholder="Name" />{" "}
              <input type="email" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" /> <br />
            <textarea
              name=""
              id=""
              cols={15}
              rows={3}
              placeholder="Message"
              className=""
            ></textarea>
            <button className="">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
