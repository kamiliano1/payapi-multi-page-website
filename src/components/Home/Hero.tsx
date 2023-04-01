import FormEmail from "@/src/Layout/Input/FormEmail";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import singlePhoneImg from "../../../public/assets/home/desktop/illustration-phone-mockup.svg";
import InAnimation from "@/src/Layout/InAnimation/InAnimation";
type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <InAnimation
      cssClasses={`"text-center px-6 sm:px-[2.4375rem] mb-20 lg:flex lg:items-center lg:text-start max-w-[1110px] mx-auto z-10 lg:px-0"`}
      transformValue="translateX(-200px)"
      delay={0.5}
    >
      <Image
        src={singlePhoneImg}
        alt="phone screen"
        className="w-[228px] lg:w-[330px] mx-auto lg:order-10 "
      />
      <div className="">
        <h1
          className="text-600 font-bold leading-9 mt-4 
        sm:text-700 sm:max-w-xl sm:mx-auto
        lg:text-900
        "
        >
          Start building with our APIs for absolutely free.
        </h1>
        <FormEmail />
        <p className="text-100 font-publicSans text-lightSanJuanBlue mt-6 lg:mt-2 lg:px-3">
          Have any questions?{" "}
          <Link className="font-bold hover:text-sanJuanBlue" href="/contact">
            Contact Us
          </Link>
        </p>
      </div>
    </InAnimation>
  );
};
export default Hero;
