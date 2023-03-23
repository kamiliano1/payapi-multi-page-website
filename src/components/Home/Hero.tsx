import MainButton from "@/src/Layout/Buttons/MainButton";
import InputText from "@/src/Layout/Input/InputText";
import Image from "next/image";
import React from "react";
import singlePhoneImg from "../../../public/assets/home/desktop/illustration-phone-mockup.svg";
type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="text-center px-6 lg:px-20 mb-20 lg:flex lg:items-center lg:text-start max-w-[1400px] mx-auto z-10">
      <Image
        src={singlePhoneImg}
        alt="phone screen"
        className="w-[228px] lg:w-[330px] mx-auto lg:order-10"
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
        <form className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start lg:mt-5 max-w-[445px] mx-auto">
          <InputText />
          <MainButton cssClasses="py-[0.625rem] sm:px-6 input-box-shadow" />
        </form>
        <p className="text-100 font-publicSans text-lightSanJuanBlue mt-6 lg:mt-2 lg:px-3">
          Have any questions? <span className="font-bold">Contact Us</span>{" "}
        </p>
      </div>
    </div>
  );
};
export default Hero;
