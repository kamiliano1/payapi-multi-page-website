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
      <div className="max-w-[1440px] mx-auto lg:px-20 relative overflow-hidden sm:px-10">
        {/* <Image
          src={circle}
          alt=""
          className="absolute object-none w-[780px] h-[780px] top-[180px] sm:-top-52 sm:left-[430px] lg:left-[1100px]
         "
        /> */}
        <CircleBackground
          cssClasses=" w-[780px] h-[780px] top-[180px] 
        sm:-top-52 sm:left-[430px] 
        lg:left-[1100px]"
        />
        <div className="max-w-[1110px] mx-auto text-center sm:flex sm:justify-between pt-10 pb-14">
          {/* <Image
            src={webLogo}
            alt="page logo"
            className=" text-linkWaterWhite mx-auto py-10 sm:mx-0"
          /> */}
          <Link className="text-400 mr-8 hover:opacity-70 " href="/">
            <Image src={webLogo} alt="page logo" className="mx-auto sm:mr-10" />
          </Link>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center ">
            <Link
              className="text-100 text-linkWaterWhite opacity-70 font-bold hover:opacity-100"
              href="pricing"
            >
              Pricing{" "}
            </Link>
            <Link
              className="text-100 text-linkWaterWhite opacity-70 font-bold hover:opacity-100"
              href="about"
            >
              About{" "}
            </Link>
            <Link
              className="text-100 text-linkWaterWhite opacity-70 font-bold hover:opacity-100"
              href="contact"
            >
              Contact{" "}
            </Link>
          </div>
          <div className="flex mt-11 justify-center gap-6 items-center sm:mt-0 sm:pb-0 text-linkWaterWhite">
            <Link href="" className="z-50 text-2xl hover:text-charmPink">
              <GrFacebook />
            </Link>
            <Link href="" className="z-50 text-2xl hover:text-charmPink">
              <BsTwitter />
            </Link>
            <Link href="" className="z-50 text-2xl hover:text-charmPink">
              <BsLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
