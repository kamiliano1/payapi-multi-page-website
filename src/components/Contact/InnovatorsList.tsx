import CompanyList from "@/src/Layout/CompanyList/CompanyList";
import React from "react";
type InnovatorsListProps = {};

const InnovatorsList: React.FC<InnovatorsListProps> = () => {
  return (
    <div className="py-20 sm:py-16 lg:py-0">
      <h2 className=" opacity-75 text-sanJuanBlue text-500 text-center font-bold px-6 lg:px-0 max-w-[445px] mx-auto lg:mx-2 lg:text-start">
        Join the thousands of innovators already building with us
      </h2>
      <div className="mt-8">
        <CompanyList iconColor={"text-sanJuanBlue "} />
      </div>
    </div>
  );
};
export default InnovatorsList;
