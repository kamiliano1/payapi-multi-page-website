import SecondaryDarkButton from "@/src/Layout/Buttons/SecondaryDarkButton";
import SecondaryLightButton from "@/src/Layout/Buttons/SecondaryLightButton";
import InputCheckbox from "@/src/Layout/Input/InputCheckbox";
import InputCheckboxContact from "@/src/Layout/Input/InputCheckboxContact";

import React, { use, useEffect } from "react";
import {
  SubmitHandler,
  useForm,
  FieldErrors,
  FieldError,
} from "react-hook-form";
type ContactFormProps = {};
interface FormData {
  firstName: string;
  email: string;
  companyName: string;
  title: string;
  message: string;
  isSubsribed: boolean;
}
interface ContactFormInputInterface {
  error: FieldError | undefined;
  type: string;
  placeholder: string;
  formName:
    | "firstName"
    | "email"
    | "companyName"
    | "title"
    | "message"
    | "isSubsribed";
}

const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

const ContactForm: React.FC<ContactFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  return (
    <div className="text-center px-6 sm:max-w-[445px] mx-auto lg:px-0 lg:mx-0">
      {" "}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-5"
      >
        <div className="relative">
          <input
            {...register("firstName", { required: true })}
            type="text"
            placeholder="Name"
            className={`w-full px-5 border-b-[1px] py-2 border-sanJuanBlue border-opacity-50 placeholder:opacity-50 focus:border-opacity-100 focus:outline-none  ${
              errors.firstName &&
              `border-[red] border-opacity-50 placeholder:text-[red]`
            }`}
          />
          {errors.firstName && (
            <p className="text-[.6875rem] leading-3 py-1 text-[red] opacity-50 absolute pt-2 px-5 z-20">
              This field can`t be empty
            </p>
          )}
        </div>
        <div className="relative">
          <input
            {...register("email", {
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

                message: "Please use a valid email address",
              },
            })}
            type="text"
            placeholder="Email Address"
            className={`w-full px-5 border-b-[1px] py-2 border-sanJuanBlue border-opacity-50 placeholder:opacity-50 focus:border-opacity-100 focus:outline-none  ${
              errors.email &&
              `border-[red] border-opacity-50 placeholder:text-[red]`
            }`}
          />
          {errors.email && (
            <p className="text-[.6875rem] leading-3 py-1 text-[red] opacity-50 absolute pt-2 px-5 ">
              {errors.email.message
                ? errors.email.message
                : "This field can`t be empty"}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            {...register("companyName")}
            type="text"
            placeholder="Company Name"
            className={`w-full px-5 border-b-[1px] py-2 border-sanJuanBlue border-opacity-50 placeholder:opacity-50 focus:border-opacity-100 focus:outline-none`}
          />
        </div>
        <div className="relative">
          <input
            {...register("title")}
            type="text"
            placeholder="Title"
            className={`w-full px-5 border-b-[1px] py-2 border-sanJuanBlue border-opacity-50 placeholder:opacity-50 focus:border-opacity-100 focus:outline-none `}
          />
        </div>
        <div className="relative">
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className={`w-full px-5 border-b-[1px] py-2  border-sanJuanBlue  border-opacity-50 placeholder:opacity-50 focus:border-opacity-100 focus:outline-none  ${
              errors.message &&
              `border-[red] border-opacity-50 placeholder:text-[red]`
            }`}
          />
          {errors.message && (
            <p className="text-[.6875rem] leading-3 py-1 text-[red] opacity-50 absolute pt-[0] px-5 z-20">
              This field can`t be empty
            </p>
          )}
        </div>

        <InputCheckboxContact />
        <SecondaryLightButton
          cssClasses="px-8 py-2 self-start"
          buttonText="Submit"
        />
      </form>
    </div>
  );
};
export default ContactForm;
