import SecondaryDarkButton from "@/src/Layout/Buttons/SecondaryDarkButton";
import React from "react";
import teslaIcon from "../../../public/assets/shared/desktop/tesla.svg";
import microsoftIcon from "../../../public/assets/shared/desktop/microsoft.svg";
import hpIcon from "../../../public/assets/shared/desktop/hewlett-packard.svg";
import oracleIcon from "../../../public/assets/shared/desktop/oracle.svg";
import googleIcon from "../../../public/assets/shared/desktop/google.svg";
import nvidiaIcon from "../../../public/assets/shared/desktop/nvidia.svg";
import Image from "next/image";
import circle from "../../../public/assets/shared/desktop/bg-pattern-circle.svg";
type WorkProps = {};

const Work: React.FC<WorkProps> = () => {
  return (
    <div className="bg-mirageBlue text-center text-linkWaterWhite  ">
      <div className="py-20 lg:flex max-w-[1440px] mx-auto lg:gap-32 relative overflow-hidden">
        <Image
          src={circle}
          alt=""
          className="  absolute top-[-590px] w-[780px] h-[780px] object-none left-0 sm:top-[-575px] lg:top-[-420px] lg:left-[-300px]"
        />
        <div
          className="px-6 flex items-center flex-wrap gap-8 sm:gap-x-16 w-full justify-center mb-14 lg:max-w-[550px] lg:gap-y-0
        "
        >
          <Image src={teslaIcon} alt="tesla icon" className="" />
          <Image src={microsoftIcon} alt="microsoft icon" className="" />
          <Image src={hpIcon} alt="hewlett packard icon" className=" " />
          <Image
            src={oracleIcon}
            alt="oracle icon"
            className="justify-self-start"
          />
          <Image src={googleIcon} alt="google icon" className="" />
          <Image src={nvidiaIcon} alt="nvidia icon" className="" />
        </div>
        <div className="px-6 lg:text-start">
          <h2 className="text-600 leading-9 text-linkWaterWhite font-bold mb-5 sm:text-700">
            Who we work with
          </h2>
          <p className="text-200 opacity-70 font-publicSans sm:max-w-md sm:mx-auto">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.{" "}
          </p>
          <SecondaryDarkButton cssClasses="px-7 py-2 mt-8" />
        </div>
      </div>
    </div>
  );
};
export default Work;
