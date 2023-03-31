import React from "react";
// import webLogo from "../../../public/assets/shared/desktop/logo.svg";
import webLogo from "../../../public/assets/shared/desktop/footer-logo.svg";
import facebookLogo from "../../../public/assets/shared/desktop/facebook.svg";
import twitterLogo from "../../../public/assets/shared/desktop/twitter.svg";
import linkedinLogo from "../../../public/assets/shared/desktop/linkedin.svg";
import Image from "next/image";
import Link from "next/link";
import circle from "../../../public/assets/shared/desktop/bg-pattern-circle.svg";

import { GrFacebook } from "react-icons/gr";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import CircleBackground from "../CircleBackground/CircleBackground";
type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-mirageBlue">
      <div className="max-w-[1440px] mx-auto lg:px-20 relative overflow-hidden sm:px-[2.4375rem]">
        <CircleBackground
          cssClasses=" w-[780px] h-[780px] top-[165px] 
        sm:top-[-208px] sm:left-[380px] sm:hidden "
        />
        <div
          className="sm:w-[980px] sm:h-[980px] bg-sanJuanBlue opacity-[.2] rounded-full absolute 
         top-[165px] 
        sm:top-[-208px] sm:left-[380px] 
        lg:left-[1100px]"
        ></div>
        <div className="max-w-[1110px] mx-auto text-center sm:flex  pt-10 pb-14">
          <Link className="text-400 mr-16 hover:opacity-70 " href="/">
            <Image src={webLogo} alt="page logo" className="mx-auto " />
          </Link>
          <div className="flex flex-col gap-10 sm:flex-row sm:items-center ">
            <Link
              className="text-100 text-linkWaterWhite opacity-70 font-bold hover:opacity-100 z-50"
              href="pricing"
            >
              Pricing{" "}
            </Link>
            <Link
              className="text-100 text-linkWaterWhite opacity-70 font-bold hover:opacity-100 z-50"
              href="about"
            >
              About{" "}
            </Link>
            <Link
              className="text-100 text-linkWaterWhite opacity-70 font-bold hover:opacity-100 z-50"
              href="contact"
            >
              Contact{" "}
            </Link>
          </div>
          <div className="flex mt-11 justify-center gap-6 items-center sm:mt-0 sm:pb-0 text-linkWaterWhite sm:ml-auto">
            <Link
              href=""
              aria-label="My Facebook page"
              className="z-50 text-2xl hover:text-charmPink"
            >
              <GrFacebook />
            </Link>
            <Link
              href=""
              aria-label="My Twitter page"
              className="z-50 text-2xl hover:text-charmPink"
            >
              <BsTwitter />
            </Link>
            <Link
              href=""
              aria-label="My Linkedin page"
              className="z-50 text-2xl hover:text-charmPink"
            >
              <BsLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
