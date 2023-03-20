import Link from "next/link";
import Image from "next/image";
import React from "react";
import MainButton from "../Buttons/MainButton";
import closeIcon from "../../../public/assets/shared/mobile/close.svg";
type VerticalNavProps = { isOpen: boolean };

const VerticalNav: React.FC<VerticalNavProps> = ({ isOpen }) => {
  return (
    <div className="bg-mirageBlue px-6 flex flex-col klasa fixed h-full top-0 right-0 pt-12 w-[80%] text-center">
      <button>
        <Image src={closeIcon} alt="close icon" className="ml-auto" />
      </button>
      <span className="h-[1px] w-full bg-linkWaterWhite opacity-[0.15] mt-6 ">
        aa
      </span>
      <Link
        className="text-400 opacity-70 text-linkWaterWhite mt-[2.6875rem]"
        href="pricing"
      >
        Pricing{" "}
      </Link>
      <Link
        className="text-400 opacity-70 text-linkWaterWhite py-8"
        href="cbout"
      >
        About{" "}
      </Link>
      <Link
        className="text-400 opacity-70 text-linkWaterWhite pb-8"
        href="contact"
      >
        Contact{" "}
      </Link>
      <MainButton />
    </div>
  );
};
export default VerticalNav;
