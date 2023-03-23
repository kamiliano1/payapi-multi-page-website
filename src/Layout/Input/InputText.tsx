import React from "react";

type InputTextProps = {};

const InputText: React.FC<InputTextProps> = () => {
  return (
    <input
      type="email"
      placeholder="Enter email address"
      className="w-full rounded-3xl py-3 input-box-shadow px-3 mb-4 mt-5 font-publicSans
placeholder:font-bold placeholder:text-100 sm:w-[272px] sm:rounded-none "
    />
  );
};
export default InputText;
