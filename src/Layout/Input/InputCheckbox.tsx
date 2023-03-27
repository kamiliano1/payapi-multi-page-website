import React from "react";
import Image from "next/image";
import checkIcon from "../../../public/assets/shared/desktop/icon-check.svg";

type InputCheckboxProps = { checked: boolean; name: string };

const InputCheckbox: React.FC<InputCheckboxProps> = ({ checked, name }) => {
  return (
    <div className="flex items-center gap-6">
      {checked ? (
        <Image src={checkIcon} className="w-[12px] h-[8px]" alt=""></Image>
      ) : (
        <span className="w-[12px] h-[8px]"></span>
      )}
      <p
        className={`text-base leading-7 font-publicSans text-mirageBlue ${
          !checked && "opacity-50"
        }`}
      >
        {name}
      </p>
    </div>
  );
};
export default InputCheckbox;
