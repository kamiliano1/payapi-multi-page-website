import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";

const InputCheckboxContact: React.FC = () => {
  const [checked, isChecked] = useState<boolean>(false);
  return (
    <div
      className="flex items-center cursor-pointer text-start justify-center gap-[1.625rem]"
      onClick={() => isChecked((prev) => !prev)}
    >
      <div>
        {checked ? (
          <BsCheck className="text-500 bg-darkPink text-linkWaterWhite " />
        ) : (
          <span className=" bg-lightSanJuanBlue opacity-40 w-[24px] h-[24px] block"></span>
        )}
      </div>
      <p className="text-100 leading-[1.5625rem] font-publicSans text-sanJuanBlue w-[100%]">
        Stay up-to-date with company announcements and updates to our API
      </p>
    </div>
  );
};
export default InputCheckboxContact;
