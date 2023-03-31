import Link from "next/link";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import MainButton from "../Buttons/MainButton";
import closeIcon from "../../../public/assets/shared/mobile/close.svg";
type VerticalNavProps = {
  isOpen: boolean;
  closeNav: MouseEventHandler<HTMLImageElement>;
};

const VerticalNav: React.FC<VerticalNavProps> = ({ isOpen, closeNav }) => {
  return (
    <>
      {isOpen && (
        <div
          className={`px-6 flex flex-col fixed h-full top-0 left-0 pt-12 w-[20%] text-center z-[1000] `}
          onClick={closeNav}
        ></div>
      )}

      <div
        className={`bg-mirageBlue px-6 flex flex-col fixed h-full top-0 right-0 pt-12 w-[80%] text-center primary-navigation z-[1000] ${
          !isOpen ? "nav-open" : ""
        }`}
      >
        <button>
          <Image
            src={closeIcon}
            onClick={closeNav}
            alt="close icon"
            className="ml-auto z-[100]"
          />
        </button>
        <span className="h-[1px] w-full bg-linkWaterWhite opacity-[0.15] mt-6"></span>
        <Link
          className="text-400 opacity-70 text-linkWaterWhite mt-[2.6875rem]"
          href="pricing"
        >
          Pricing{" "}
        </Link>
        <Link
          className="text-400 opacity-70 text-linkWaterWhite py-8"
          href="about"
        >
          About{" "}
        </Link>
        <Link
          className="text-400 opacity-70 text-linkWaterWhite pb-8"
          href="contact"
        >
          Contact{" "}
        </Link>
        <MainButton cssClasses={"py-[0.625rem] "} />
      </div>
    </>
  );
};
export default VerticalNav;
