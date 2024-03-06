import React from "react";
import Image from "next/image";
import { FaBars} from "react-icons/fa6";
import Logo from "@/public/img/Itavi - logomark v5 - peak - flag.png";

const Header = () => {
  return (
    <header className="flex fixed items-center justify-between w-full px-[10%] bg-none z-[1000000000]">
      <div className="w-full h-full">
        <Image src={Logo} alt="Logo" height={150} width={150}/>
      </div>
      <FaBars  className="text-[30px] text-[#fff]"/>
    </header>
  );
};

export default Header;
