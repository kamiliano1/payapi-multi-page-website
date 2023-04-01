import SecondaryDarkButton from "@/src/Layout/Buttons/SecondaryDarkButton";
import CircleBackground from "@/src/Layout/CircleBackground/CircleBackground";
import CompanyList from "@/src/Layout/CompanyList/CompanyList";
import React from "react";
import InAnimation from "@/src/Layout/InAnimation/InAnimation";
type WorkProps = {};

const Work: React.FC<WorkProps> = () => {
  return (
    <div className="bg-mirageBlue ">
      <div className="text-center text-linkWaterWhite max-w-[1440px] relative overflow-hidden mx-auto lg:px-20">
        <CircleBackground cssClasses="w-[780px] h-[780px] left-0 top-[-590px] sm:top-[-575px] lg:top-[-420px] lg:left-[-300px]" />
        <div className="py-20 lg:flex max-w-[1110px] mx-auto">
          <CompanyList iconColor={"text-linkWaterWhite lg:w-[50%]"} />
          <InAnimation
            cssClasses="px-6 lg:text-start lg:px-0 lg:w-[50%]"
            transformValue="translateX(-200px)"
            delay={0.7}
          >
            <h2 className="text-600 leading-9 text-linkWaterWhite font-bold mt-14 sm:mt-16 lg:mt-0 mb-5 sm:text-700">
              Who we work with
            </h2>
            <p className="text-200 opacity-70 font-publicSans max-w-[475px] mx-auto lg:mx-0">
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.{" "}
            </p>
            <SecondaryDarkButton cssClasses="px-7 py-2 mt-8" />
          </InAnimation>
        </div>
      </div>
    </div>
  );
};
export default Work;

// const defaultValue = {
//   transformValue: "translateX(-200px)",
//   delay:0.5
// }
