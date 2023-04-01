import {
  GoogleIcon,
  HewlettPackardIcon,
  MicrosoftIcon,
  NvidiaIcon,
  OracleIcon,
  TeslaIcon,
} from "@/public/assets/shared/desktop/CompanyIcons";
import React from "react";
import InAnimation from "../InAnimation/InAnimation";

type CompanyListProps = { iconColor: string };

const CompanyList: React.FC<CompanyListProps> = ({ iconColor }) => {
  return (
    <div
      className={`${iconColor} px-6 w-full lg:max-w-[550px] 
      grid grid-cols-[repeat(auto-fill,_minmax(140px,_1fr))] 
      gap-y-10 gap-x-[2rem] place-content-center max-w-[536px] mx-auto
order-2 lg:px-0 lg:gap-x-5 items-center`}
    >
      <InAnimation
        cssClasses={`"text-start lg:flex lg:items-center lg:text-start max-w-[1110px] mx-auto z-10 lg:px-0"`}
        transformValue="translateX(100px)"
        delay={0.2}
      >
        <TeslaIcon />
      </InAnimation>
      <InAnimation
        cssClasses={`"text-center lg:flex lg:items-center lg:text-start max-w-[1110px] mx-auto z-10 lg:px-0"`}
        transformValue="translateX(100px)"
        delay={0.5}
      >
        <MicrosoftIcon />
      </InAnimation>
      <InAnimation
        cssClasses={`"text-center lg:flex lg:items-center lg:text-start max-w-[1110px] mx-auto z-10 lg:px-0"`}
        transformValue="translateX(100px)"
        delay={0.8}
      >
        <HewlettPackardIcon />
      </InAnimation>
      <InAnimation
        cssClasses={`"text-center lg:flex lg:items-center lg:text-start max-w-[1110px] mx-auto z-10 lg:px-0"`}
        transformValue="translateX(100px)"
        delay={1.1}
      >
        <OracleIcon />
      </InAnimation>
      <InAnimation
        cssClasses={`"text-center lg:flex lg:items-center lg:text-start max-w-[1110px] mx-auto z-10 lg:px-0"`}
        transformValue="translateX(100px)"
        delay={1.4}
      >
        <GoogleIcon />
      </InAnimation>
      <InAnimation
        cssClasses={`"text-center lg:flex lg:items-center lg:text-start max-w-[1110px] mx-auto z-10 lg:px-0"`}
        transformValue="translateX(100px)"
        delay={1.7}
      >
        <NvidiaIcon />
      </InAnimation>
    </div>
  );
};
export default CompanyList;
