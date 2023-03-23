import React from "react";
// import webLogo from "../../../public/assets/shared/desktop/logo.svg";
import webLogo from "../../../public/assets/shared/desktop/footer-logo.svg";
import facebookLogo from "../../../public/assets/shared/desktop/facebook.svg";
import twitterLogo from "../../../public/assets/shared/desktop/twitter.svg";
import linkedinLogo from "../../../public/assets/shared/desktop/linkedin.svg";
import Image from "next/image";
import Link from "next/link";
import circle from "../../../public/assets/shared/desktop/bg-pattern-circle.svg";
type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className=" bg-mirageBlue ">
      <div className="max-w-[1400px] mx-auto text-center relative overflow-hidden  sm:flex sm:justify-between sm:px-10">
        <Image
          src={circle}
          alt=""
          className="absolute w-[780px] h-[780px] top-[180px]  sm:-top-52 sm:left-[430px] lg:left-[1030px]
         "
        />
        <Image
          src={webLogo}
          alt="page logo"
          className=" text-linkWaterWhite mx-auto py-10 sm:mx-0"
        />
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center ">
          <Link
            className="text-100 text-linkWaterWhite opacity-70 font-bold"
            href="pricing"
          >
            Pricing{" "}
          </Link>
          <Link
            className="text-100 text-linkWaterWhite opacity-70 font-bold"
            href="about"
          >
            About{" "}
          </Link>
          <Link
            className="text-100 text-linkWaterWhite opacity-70 font-bold"
            href="contact"
          >
            Contact{" "}
          </Link>
        </div>
        <div className="flex mt-11 pb-14 justify-center gap-6 items-center sm:mt-0 sm:pb-0">
          <Link href="">
            <Image src={facebookLogo} alt="facebook logo"></Image>
          </Link>
          <Link href="">
            <Image src={twitterLogo} alt="twitter logo"></Image>
          </Link>
          <Link href="">
            <Image src={linkedinLogo} alt="linkedin logo"></Image>
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
