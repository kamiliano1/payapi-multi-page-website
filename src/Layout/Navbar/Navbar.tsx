import Image from "next/image";
import React from "react";
import webLogo from "../../../public/assets/shared/desktop/logo.svg";
import circle from "../../../public/assets/shared/desktop/bg-pattern-circle.svg";
import hamburgerIcon from "../../../public/assets/shared/mobile/menu.svg";
import closeIcon from "../../../public/assets/shared/mobile/close.svg";
import Link from "next/link";
import MainButton from "../Buttons/MainButton";
import VerticalNav from "./VerticalNav";
const Navbar = () => {
  return (
    <nav className="">
      {/* <Image
        src={circle}
        alt=""
        className="absolute w-[780px] h-[780px] object-none top-[-550px] "
      /> */}
      <div className="mt-10 px-6 flex items-center justify-between  ">
        <Image src={webLogo} alt="page logo" />
        <button>
          <Image
            src={hamburgerIcon}
            alt="hamburger icon"
            className="sm:hidden"
          />
        </button>
      </div>
      <VerticalNav isOpen={true} />
    </nav>
  );
};
export default Navbar;
