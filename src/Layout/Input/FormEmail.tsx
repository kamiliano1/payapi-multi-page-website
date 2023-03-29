import React from "react";
import MainButton from "../Buttons/MainButton";
import InputText from "./InputText";

type FormEmailProps = {};

const FormEmail: React.FC<FormEmailProps> = () => {
  return (
    <form
      className="flex flex-col sm:flex-row sm:items-center 
  sm:justify-center lg:justify-start lg:mt-5 max-w-[445px] mx-auto lg:mx-0 font-bold"
    >
      <InputText inputType="email" inputPlaceholder="Enter email address" />
      <MainButton cssClasses="py-[.938rem] sm:px-6 input-box-shadow" />
    </form>
  );
};
export default FormEmail;
