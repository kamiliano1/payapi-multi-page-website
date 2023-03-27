import React, { useState } from "react";
import Image from "next/image";
import checkIcon from "../../../public/assets/shared/desktop/icon-check.svg";
import { BsCheck } from "react-icons/bs";
type InputCheckboxContactProps = {};

const InputCheckboxContact: React.FC<InputCheckboxContactProps> = () => {
  const [checked, isChecked] = useState<boolean>(false);
  return (
    <div className="flex items-center text-start justify-center gap-[1.625rem]">
      <div>
        {checked ? (
          <BsCheck
            onClick={() => isChecked((prev) => !prev)}
            className="text-500 bg-darkPink text-linkWaterWhite "
          />
        ) : (
          <span
            className=" bg-lightSanJuanBlue opacity-40 w-[24px] h-[24px] block"
            onClick={() => isChecked((prev) => !prev)}
          ></span>
        )}
      </div>
      <p className="text-100 leading-[1.5625rem] font-publicSans text-sanJuanBlue w-[100%]">
        Stay up-to-date with company announcements and updates to our API
      </p>
    </div>
  );
};
export default InputCheckboxContact;
