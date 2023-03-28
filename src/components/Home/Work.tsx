import SecondaryDarkButton from "@/src/Layout/Buttons/SecondaryDarkButton";
import CompanyList from "@/src/Layout/CompanyList/CompanyList";
import Image from "next/image";
import React from "react";
import circle from "../../../public/assets/shared/desktop/bg-pattern-circle.svg";
type WorkProps = {};

const Work: React.FC<WorkProps> = () => {
  return (
    <div className="bg-mirageBlue text-center text-linkWaterWhite ">
      <div className="py-20 lg:flex max-w-[1400px] mx-auto lg:gap-32 relative lg:px-20 overflow-hidden">
        <Image
          src={circle}
          alt=""
          className="absolute top-[-590px] w-[780px] h-[780px] object-none left-0 sm:top-[-575px] lg:top-[-420px] lg:left-[-300px]"
        />

        <CompanyList iconColor={"text-linkWaterWhite"} />

        <div className="px-6 lg:text-start lg:px-0">
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
