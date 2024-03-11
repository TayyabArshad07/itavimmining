import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import Logo from "@/public/img/Itavi - logomark v5 - peak - flag.png";
import MenuLight from "@/public/img/menu-light.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: any) => {
    setIsActive((current) => !current);
  };

  const handleNavbar = (event: any) => {
    setIsActive((current) => !current);
  };
  return (
    <div>
      <header className="Header">
        <div className="w-full h-full">
          <Image src={Logo} alt="Logo" height={150} width={150} />
        </div>
        <Image
          src={MenuLight}
          alt=""
          className="text-[30px] text-[#fff] cursor-pointer"
          onClick={handleClick}
        />
      </header>
      {isActive && (
        <nav className="Drop-Navbar">
          <div>
            <Link href={"#HomePage"} className="Buttons" onClick={handleNavbar}>
              <li>.01</li>
              <li>Home</li>
            </Link>
            <Link
              href={"#AboutPage"}
              className="Buttons"
              onClick={handleNavbar}
            >
              <li>.02</li>
              <li>About Us</li>
            </Link>
            <Link
              href={"#WWeDoPage"}
              className="Buttons"
              onClick={handleNavbar}
            >
              <li>.03</li>
              <li>What We Do</li>
            </Link>
            <Link href={"#TeamPage"} className="Buttons" onClick={handleNavbar}>
              <li>.04</li>
              <li>Teamwork</li>
            </Link>
            <Link
              href={"#PartnerBrandPage"}
              className="Buttons"
              onClick={handleNavbar}
            >
              <li>.05</li>
              <li>Partners {"&"} Brands</li>
            </Link>
            <Link
              href={"#CareerPage"}
              className="Buttons"
              onClick={handleNavbar}
            >
              <li>.06</li>
              <li>Career</li>
            </Link>
            <Link
              href={"#ContactPage"}
              className="Buttons"
              onClick={handleNavbar}
            >
              <li>.07</li>
              <li>Contact</li>
            </Link>
          </div>
          <div className="Header-Info">
            <h2>Itavimining Miners Group</h2>
            <p>
              Sra Jimenez Sucre
              <br /> 76 LA PAZ
            </p>
            <div className="Social-Div">
              <h4>Socials :</h4>
              <FaFacebookF className="Icons" />
              <FaInstagram className="Icons" />
              <FaYoutube className="Icons" />
              <FaLinkedinIn className="Icons" />
              <FaXTwitter className="Icons" />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
