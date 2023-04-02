import ReadyToStartForm from "@/src/Layout/Input/ReadyToStartForm";
import React from "react";
import ContactForm from "./ContactForm";
import InnovatorsList from "./InnovatorsList";

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="sm:px-[2.4375rem] lg:px-20  ">
      <div className="text-center lg:text-start mx-auto z-10">
        <h1 className="text-600 px-6 leading-9 font-bold mt-12 mb-10 tracking-[-0.196154px] sm:text-700 lg:text-800 sm:mt-[4.6875rem] max-w-[550px] mx-auto lg:max-w-[730px] lg:mx-0 ">
          Submit a help request and we`ll get in touch shortly.
        </h1>
        <div className="lg:flex lg:text-start lg:gap-[5rem]  items-center">
          <ContactForm />
          <InnovatorsList />
        </div>
        <div className="px-6 lg:px-0">
          <ReadyToStartForm cssClasses="pt-0 lg:pt-[5.8125rem]" />
        </div>
      </div>
    </div>
  );
};
export default Contact;
