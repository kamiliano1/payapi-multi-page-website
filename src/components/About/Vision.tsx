import InAnimation from "@/src/Layout/InAnimation/InAnimation";
import ReadyToStartForm from "@/src/Layout/Input/ReadyToStartForm";
import React from "react";
import CountUp from "react-countup";
type VisionProps = {};

const Vision: React.FC<VisionProps> = () => {
  return (
    <div className="text-center lg:text-start max-w-[1400px] mx-auto z-10 px-6 sm:text-start">
      <div className="sm:flex sm:justify-between sm:gap-3 lg:gap-7 max-w-[1110px] mx-auto px-6 lg:px-0">
        <div className="mb-8 w-[100%]">
          <span className="h-[1px] block bg-lightSanJuanBlue opacity-25 mb-4 sm:my-4"></span>
          <h2 className="text-[1rem] leading-7 font-publicSans">
            Team Members
          </h2>
          <p className="text-800 leading-[4.5rem] text-darkPink font-bold">
            <CountUp
              end={300}
              duration={2.75}
              enableScrollSpy={true}
              scrollSpyDelay={200}
              scrollSpyOnce={true}
            />
            +
          </p>
          <span className="hidden h-[1px] sm:block bg-lightSanJuanBlue opacity-25 my-4"></span>
        </div>
        <div className="mb-8 w-[100%]">
          <span className="hidden h-[1px] sm:block bg-lightSanJuanBlue opacity-25 my-4"></span>
          <h2 className="text-[1rem] leading-7 font-publicSans">
            Offices in the US
          </h2>
          <p className="text-800 leading-[4.5rem] text-darkPink font-bold">
            <CountUp
              end={3}
              duration={2.75}
              enableScrollSpy={true}
              scrollSpyDelay={200}
              scrollSpyOnce={true}
            />
          </p>
          <span className="hidden h-[1px] sm:block bg-lightSanJuanBlue opacity-25 my-4"></span>
        </div>
        <div className="mb-8 w-[100%]">
          <span className="hidden h-[1px] sm:block bg-lightSanJuanBlue opacity-25 my-4"></span>
          <h2 className="text-[1rem] leading-7 font-publicSans">
            Transactions analyzed
          </h2>
          <p className="text-800 leading-[4.5rem] text-darkPink font-bold">
            <CountUp
              end={10}
              duration={2.75}
              enableScrollSpy={true}
              scrollSpyDelay={200}
              scrollSpyOnce={true}
            />
            M+
          </p>
          <span className="h-[1px] block bg-lightSanJuanBlue opacity-25 my-4"></span>
        </div>
      </div>
      <div className="text-center lg:text-start max-w-[1400px] mx-auto px-6 lg:w-[85%] lg:px-20">
        <div className="max-w-[689px] lg:max-w-[920px]">
          <InAnimation
            cssClasses="mb-12 sm:flex sm:text-start sm:gap-12"
            transformValue="translateX(-200px)"
            delay={0.2}
          >
            <h2 className="text-500 font-bold tracking-[-0.196154px] mb-4 sm:text-600 min-w-[180px]">
              The Culture
            </h2>
            <p className="text-200 font-publicSans text-lightSanJuanBlue max-w-[635px]">
              We strongly believe there`s always an opportunity to learn from
              each other outside of day-to-day work, whether it`s company-wide
              offsites, internal hackathons, or co-worker meetups. We always
              value cross-team collaboration and diversity of thought, no matter
              the job title.
            </p>
          </InAnimation>
          <InAnimation
            cssClasses="mb-12 sm:flex sm:text-start sm:gap-12"
            transformValue="translateX(-200px)"
            delay={0.2}
          >
            <h2 className="text-500 font-bold tracking-[-0.196154px] mb-4 sm:text-600 min-w-[180px]">
              The People
            </h2>
            <p className="text-200 font-publicSans text-lightSanJuanBlue  max-w-[635px]">
              We`re all passionate about building a more efficient and inclusive
              financial infrastructure together. At PayAPI, we have diverse
              backgrounds and skills.
            </p>
          </InAnimation>
        </div>
      </div>
      <ReadyToStartForm cssClasses="pt-12" />
    </div>
  );
};
export default Vision;
