import React from "react";
import MainButton from "../Buttons/MainButton";
import InputText from "./InputText";

type FormEmailProps = {};

const FormEmail: React.FC<FormEmailProps> = () => {
  return (
    <form
      className="flex flex-col sm:flex-row sm:items-center 
  sm:justify-center lg:justify-start lg:mt-5 max-w-[445px] mx-auto lg:mx-0"
    >
      <InputText />
      <MainButton cssClasses="py-[0.625rem] sm:px-6 input-box-shadow" />
    </form>
  );
};
export default FormEmail;
