import Link from "next/link";
import React from "react";
import MainButton from "../Buttons/MainButton";

const HorizontalNav: React.FC = () => {
  return (
    <div className="hidden text-center items-center text-sanJuanBlue sm:flex  w-full ">
      <Link
        className="text-100 font-bold opacity-70 mr-10 hover:opacity-100"
        href="pricing"
      >
        Pricing{" "}
      </Link>
      <Link
        className="text-100 font-bold opacity-70 mr-10 hover:opacity-100"
        href="about"
      >
        About{" "}
      </Link>
      <Link
        className="text-100 font-bold opacity-70 mr-10 hover:opacity-100"
        href="contact"
      >
        Contact{" "}
      </Link>
      <MainButton cssClasses={"px-[1.55rem] py-[0.938rem] sm:ml-auto "} />
    </div>
  );
};
export default HorizontalNav;
