import Link from "next/link";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import MainButton from "../Buttons/MainButton";
import closeIcon from "../../../public/assets/shared/mobile/close.svg";
type VerticalNavProps = {
  //   isOpen: boolean;
  //   closeNav: MouseEventHandler<HTMLImageElement>;
};

const HorizontalNav: React.FC<VerticalNavProps> = ({}) => {
  return (
    <div className="hidden text-center items-center text-sanJuanBlue sm:flex  w-full ">
      <Link
        className="text-400 opacity-70 mr-8 hover:opacity-100"
        href="pricing"
      >
        Pricing{" "}
      </Link>
      <Link className="text-400 opacity-70 mr-8 hover:opacity-100" href="about">
        About{" "}
      </Link>
      <Link
        className="text-400 opacity-70 mr-8 hover:opacity-100"
        href="contact"
      >
        Contact{" "}
      </Link>
      <MainButton cssClasses={"px-[1.55rem] py-[0.625rem] sm:ml-auto "} />
    </div>
  );
};
export default HorizontalNav;
