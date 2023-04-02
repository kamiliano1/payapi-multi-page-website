import React from "react";
import MainButton from "../Buttons/MainButton";
import InputText from "./InputText";

const FormEmail: React.FC = () => {
  return (
    <form
      className="flex flex-col sm:flex-row sm:items-center 
  sm:justify-center lg:justify-start max-w-[445px] mx-auto lg:mx-0 font-bold"
    >
      <InputText inputType="email" inputPlaceholder="Enter email address" />
      <MainButton cssClasses="py-[.938rem] sm:px-[1.865rem] input-box-shadow" />
    </form>
  );
};
export default FormEmail;
