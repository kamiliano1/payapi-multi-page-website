import {
  TeslaIcon,
  MicrosoftIcon,
  HewlettPackardIcon,
  OracleIcon,
  GoogleIcon,
  NvidiaIcon,
} from "@/public/assets/shared/desktop/CompanyIcons";
import React from "react";

type CompanyListProps = { iconColor: string };

const CompanyList: React.FC<CompanyListProps> = ({ iconColor }) => {
  return (
    <div
      className={`${iconColor} px-6 w-full lg:max-w-[550px] 
      grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] 
      gap-y-10 justify-items-center items-center max-w-[536px] mx-auto
order-2 lg:px-0 lg:gap-x-5`}
    >
      <TeslaIcon />
      <MicrosoftIcon />
      <HewlettPackardIcon />
      <OracleIcon />
      <GoogleIcon />
      <NvidiaIcon />
    </div>
  );
};
export default CompanyList;
