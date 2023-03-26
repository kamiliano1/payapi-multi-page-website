import ReadyToStartForm from "@/src/Layout/Input/ReadyToStartForm";
import React from "react";

type VisionProps = {};

const Vision: React.FC<VisionProps> = () => {
  return (
    <div className="text-center lg:text-start mb-20 max-w-[1400px] mx-auto z-10 px-6 sm:text-start">
      <div className="sm:flex sm:justify-between sm:gap-3 lg:gap-7">
        <div className="mb-8 w-[100%]">
          <span className="h-[1px] block bg-lightSanJuanBlue opacity-25 my-6"></span>
          <h2 className="text-[1rem] leading-7">Team Members</h2>
          <p className="text-800 leading-[4.5rem] text-darkPink font-bold">
            300+
          </p>
          <span className="hidden h-[1px] sm:block bg-lightSanJuanBlue opacity-25 my-6"></span>
        </div>
        <div className="mb-8 w-[100%]">
          <span className="hidden h-[1px] sm:block bg-lightSanJuanBlue opacity-25 my-6"></span>
          <h2 className="text-[1rem] leading-7">Offices in the US</h2>
          <p className="text-800 leading-[4.5rem] text-darkPink font-bold">3</p>
          <span className="hidden h-[1px] sm:block bg-lightSanJuanBlue opacity-25 my-6"></span>
        </div>
        <div className="mb-8 w-[100%]">
          <span className="hidden h-[1px] sm:block bg-lightSanJuanBlue opacity-25 my-6"></span>
          <h2 className="text-[1rem] leading-7">Transactions analyzed</h2>
          <p className="text-800 leading-[4.5rem] text-darkPink font-bold">
            10M+
          </p>
          <span className="h-[1px] block bg-lightSanJuanBlue opacity-25 my-6"></span>
        </div>
      </div>
      <div className="mb-12 sm:flex sm:text-start sm:gap-12">
        <h2 className="text-500 font-bold tracking-[-0.196154px] mb-4 sm:text-600 min-w-[180px]">
          The Culture
        </h2>
        <p className="text-200 font-publicSans text-lightSanJuanBlue ">
          We strongly believe there`s always an opportunity to learn from each
          other outside of day-to-day work, whether it`s company-wide offsites,
          internal hackathons, or co-worker meetups. We always value cross-team
          collaboration and diversity of thought, no matter the job title.
        </p>
      </div>
      <div className="mb-12 sm:flex sm:text-start sm:gap-12">
        <h2 className="text-500 font-bold tracking-[-0.196154px] mb-4 sm:text-600 min-w-[180px]">
          The People
        </h2>
        <p className="text-200 font-publicSans text-lightSanJuanBlue ">
          We`re all passionate about building a more efficient and inclusive
          financial infrastructure together. At PayAPI, we have diverse
          backgrounds and skills.
        </p>
      </div>
      <ReadyToStartForm />
    </div>
  );
};
export default Vision;
